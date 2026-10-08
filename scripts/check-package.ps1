param(
    [string]$SkillRoot = (Split-Path -Parent $PSScriptRoot)
)

$ErrorActionPreference = 'Stop'
$root = (Resolve-Path -LiteralPath $SkillRoot).Path
$skillFile = Join-Path $root 'SKILL.md'
$errors = [System.Collections.Generic.List[string]]::new()

if (-not (Test-Path -LiteralPath $skillFile -PathType Leaf)) {
    throw "Missing SKILL.md in $root"
}

$skill = Get-Content -LiteralPath $skillFile -Raw -Encoding UTF8
$frontmatter = [regex]::Match($skill, '(?s)^---\r?\n(?<body>.*?)\r?\n---\r?\n')
if (-not $frontmatter.Success) {
    $errors.Add('SKILL.md has no leading YAML frontmatter.')
} else {
    $name = [regex]::Match($frontmatter.Groups['body'].Value, '(?m)^name:\s*(?<value>[^\r\n]+)$')
    $description = [regex]::Match($frontmatter.Groups['body'].Value, '(?m)^description:\s*(?<value>[^\r\n]+)$')
    if (-not $name.Success -or $name.Groups['value'].Value -notmatch '^[a-z0-9-]{1,64}$') {
        $errors.Add('Skill name is missing or is not lowercase letters, digits, and hyphens.')
    } elseif ($name.Groups['value'].Value -ne (Split-Path -Leaf $root)) {
        $errors.Add('Skill name does not match its folder name.')
    }
    if (-not $description.Success -or [string]::IsNullOrWhiteSpace($description.Groups['value'].Value)) {
        $errors.Add('Skill description is missing.')
    }
    if ($frontmatter.Groups['body'].Value.Length -gt 1024) {
        $errors.Add('Skill frontmatter exceeds 1024 characters.')
    }
}

$markdownFiles = @(Get-ChildItem -LiteralPath $root -Recurse -Filter '*.md' -File)
foreach ($file in $markdownFiles) {
    $content = Get-Content -LiteralPath $file.FullName -Raw -Encoding UTF8
    if ($content -match '(?i)\b(TODO|TBD|Lorem ipsum)\b') {
        $errors.Add("Unfinished placeholder in $($file.FullName)")
    }
    foreach ($match in [regex]::Matches($content, '\]\((?<target>[^)]+)\)')) {
        $target = $match.Groups['target'].Value.Split('#')[0].Trim('<', '>')
        if (-not $target -or $target -match '^(https?:|mailto:|codex:)') { continue }
        $resolved = Join-Path $file.DirectoryName $target
        if (-not (Test-Path -LiteralPath $resolved)) {
            $errors.Add("Broken link in $($file.FullName): $target")
        }
    }
}

$imageRoot = Join-Path $root 'assets\owner-references'
$manifestFile = Join-Path $imageRoot 'manifest.csv'
if (-not (Test-Path -LiteralPath $manifestFile -PathType Leaf)) {
    $errors.Add('Missing owner reference image manifest.')
} else {
    $images = @(Import-Csv -LiteralPath $manifestFile -Encoding UTF8)
    if ($images.Count -ne 7) { $errors.Add("Expected seven owner reference images, found $($images.Count) manifest rows.") }
    $names = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
    foreach ($entry in $images) {
        if ($entry.file -notmatch '^[a-f0-9]{32}\.jpg$' -or -not $names.Add($entry.file)) {
            $errors.Add("Invalid or duplicate reference image name: $($entry.file)")
            continue
        }
        $path = Join-Path $imageRoot $entry.file
        if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
            $errors.Add("Missing reference image: $($entry.file)")
            continue
        }
        if ($entry.sha256 -notmatch '^[a-f0-9]{64}$') {
            $errors.Add("Invalid SHA-256 in manifest: $($entry.file)")
        } elseif ((Get-FileHash -LiteralPath $path -Algorithm SHA256).Hash -ine $entry.sha256) {
            $errors.Add("Reference image differs from manifest: $($entry.file)")
        }
    }
    $actualImages = @(Get-ChildItem -LiteralPath $imageRoot -Filter '*.jpg' -File)
    if ($actualImages.Count -ne $images.Count) {
        $errors.Add("Expected $($images.Count) JPG files, found $($actualImages.Count).")
    }
}

$promptFile = Join-Path $root 'evals\prompts.csv'
if (-not (Test-Path -LiteralPath $promptFile -PathType Leaf)) {
    $errors.Add('Missing evals/prompts.csv.')
} else {
    $prompts = @(Import-Csv -LiteralPath $promptFile -Encoding UTF8)
    if ($prompts.Count -lt 4) { $errors.Add('Evaluation prompt set is too small.') }
    foreach ($prompt in $prompts) {
        if (-not $prompt.id -or $prompt.should_trigger -notin @('true', 'false') -or -not $prompt.prompt) {
            $errors.Add("Invalid evaluation prompt row: $($prompt.id)")
        }
    }
}

if ($errors.Count -gt 0) {
    $errors | ForEach-Object { Write-Output "ERROR: $_" }
    exit 1
}

Write-Output "Package check passed: $($markdownFiles.Count) Markdown files, $($prompts.Count) evaluation prompts, seven verified reference images, no broken local links or placeholders."
