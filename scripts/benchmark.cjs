const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const studyRoot = path.join(root, 'evals/benchmark');
const normalize = text => text.replace(/^\ufeff/, '').replace(/\r\n?/g, '\n');
const textHash = text => crypto.createHash('sha256').update(normalize(text), 'utf8').digest('hex');
const readJSON = file => JSON.parse(normalize(fs.readFileSync(file, 'utf8')));
const writeJSON = (file, value) => fs.writeFileSync(file, JSON.stringify(value, null, 2) + '\n');

function analyze(pairs, votes) {
  const lookup = new Map();
  for (const pair of pairs) {
    if (lookup.has(pair.id)) throw new Error('Duplicate pair: '+pair.id);
    if (!pair.conditions || new Set(Object.values(pair.conditions)).size !== 2 || !['A','B'].every(side=>['skill','control'].includes(pair.conditions[side]))) throw new Error('Invalid condition mapping');
    if (pair.eligible && pair.status !== 'complete') throw new Error('Incomplete pair cannot be eligible');
    lookup.set(pair.id,pair);
  }
  const report = {superiorityClaim:false,claim:'No universal or statistical superiority established.',progression:'incomplete',coverage:{scheduled:pairs.filter(p=>p.scheduled!==false).length,complete:pairs.filter(p=>p.scheduled!==false&&p.status==='complete').length,eligible:pairs.filter(p=>p.eligible).length,ownerRated:0,exploratoryRated:0},ownerVisual:{skill:0,control:0,tie:0,neither:0},clarity:{skill:0,control:0,tie:0,unknown:0},brand:{skill:0,control:0,tie:0,na:0},perBrief:{},exploratory:[],decisiveWinRate:null,inferentialInterval:null};
  const seen=new Set();
  for (const vote of votes) {
    const pair=lookup.get(vote.pairId);if(!pair)throw new Error('Unknown pair: '+vote.pairId);
    if(pair.renderFingerprint&&vote.renderFingerprint!==pair.renderFingerprint)throw new Error('Render fingerprint changed or missing: '+pair.id);
    if(!['A','B','tie','neither'].includes(vote.visual))throw new Error('Invalid visual choice');
    if(!['A','B','tie','unknown'].includes(vote.clarity))throw new Error('Invalid clarity choice');
    if(!['A','B','tie','na'].includes(vote.brand))throw new Error('Invalid brand choice');
    if(!vote.reviewerId||!['owner','target-user','ai','operator'].includes(vote.reviewerRole)||typeof vote.reason!=='string'||!vote.reason.trim())throw new Error('Missing reviewer or reason');
    const key=vote.reviewerId+'::'+vote.pairId;
    if(seen.has(key))throw new Error('Duplicate review: '+key);seen.add(key);
    if(vote.reviewerRole!=='owner')continue;
    const result=['A','B'].includes(vote.visual)?pair.conditions[vote.visual]:vote.visual;
    if(!pair.eligible){report.coverage.exploratoryRated++;report.exploratory.push({pairId:pair.id,visual:result,reason:vote.reason});continue;}
    report.coverage.ownerRated++;report.ownerVisual[result]++;
    const brief=report.perBrief[pair.briefId]||={rated:0,skill:0,control:0,tie:0,neither:0};brief.rated++;brief[result]++;
    for(const dimension of ['clarity','brand']){const choice=vote[dimension];report[dimension][['A','B'].includes(choice)?pair.conditions[choice]:choice]++;}
  }
  // One owner decision per pair, even if someone imports two distinct owner IDs.
  const ownerPairs=votes.filter(v=>v.reviewerRole==='owner').map(v=>v.pairId);
  if(new Set(ownerPairs).size!==ownerPairs.length)throw new Error('Duplicate owner decision for a pair');
  const decisive=report.ownerVisual.skill+report.ownerVisual.control;
  if(decisive)report.decisiveWinRate=report.ownerVisual.skill/decisive;
  if(report.coverage.scheduled===18&&report.coverage.eligible===18&&report.coverage.ownerRated===18){
    const noSkillOnlyFailure=pairs.every(p=>!p.skillOnlyHardFailure);
    const everyBrief=Object.values(report.perBrief).length===6&&Object.values(report.perBrief).every(b=>b.skill>0);
    report.progression=report.ownerVisual.skill>=12&&everyBrief&&noSkillOnlyFailure&&report.clarity.control<=report.clarity.skill&&report.brand.control<=report.brand.skill&&report.clarity.unknown===0?'ready-for-larger-trial':'revise';
  }
  return report;
}

function initialize() {
  const planFile=path.join(studyRoot,'plan.json'),plan=readJSON(planFile);
  const planSha256=textHash(fs.readFileSync(planFile,'utf8'));
  const ledgerFile=path.join(studyRoot,'ledger.json');
  if(fs.existsSync(ledgerFile)){const ledger=readJSON(ledgerFile);if(ledger.planSha256!==planSha256)throw new Error('Frozen plan changed; create a new study version.');return ledger;}
  const trials=plan.briefs.flatMap(brief=>Array.from({length:plan.repetitions},(_,index)=>({brief,index,id:`${brief.id}-${String(index+1).padStart(2,'0')}`}))).sort((a,b)=>textHash(plan.sideSeed+a.id).localeCompare(textHash(plan.sideSeed+b.id)));
  const pairs=trials.map((trial,index)=>{
    const first=index%2===0?'skill':'control';
    const conditions={A:first,B:first==='skill'?'control':'skill'};
    const runs={};
    for(const side of ['A','B']){
      const directory=`evals/benchmark/artifacts/${trial.id}/${side.toLowerCase()}`;
      const condition=conditions[side];
      const conditionLine=condition==='skill'?'CONDITION: Explicitly apply D:/UI/web-ui-art-direction/SKILL.md and only its relevant resources.':'CONDITION: Control. Do not read or apply the custom skill or its analysis documents.';
      const prompt=plan.commonPrompt+'\n\nBRIEF: '+trial.brief.text+'\n\nOUTPUT DIRECTORY: '+path.join(root,directory).replaceAll('\\','/')+'\n\n'+conditionLine+'\n';
      const promptFile=`evals/benchmark/prompts/${trial.id}-${side}.txt`;
      fs.mkdirSync(path.dirname(path.join(root,promptFile)),{recursive:true});fs.writeFileSync(path.join(root,promptFile),prompt);
      runs[side]={condition,directory,promptFile,promptSha256:textHash(prompt),status:'pending',attempts:[]};
    }
    return {id:trial.id,briefId:trial.brief.id,title:trial.brief.title,brief:trial.brief.text,scheduled:true,status:'pending',eligible:false,conditions,runs};
  });
  const ledger={studyId:plan.studyId,planSha256,skillCommit:plan.skillCommit,createdAt:new Date().toISOString(),model:null,modelAvailability:'exact ID not exposed by inherited subagent tool',resourceBudgetEnforced:false,generationAvailable:null,pairs};writeJSON(ledgerFile,ledger);return ledger;
}

function recordAttempt(pairId,side,status,note) {
  if(!['A','B'].includes(side)||!['running','blocked-quota','complete','failed'].includes(status))throw new Error('Invalid attempt status');
  const ledger=initialize(),pair=ledger.pairs.find(p=>p.id===pairId);if(!pair)throw new Error('Unknown pair');
  const run=pair.runs[side];run.status=status;run.attempts.push({status,at:new Date().toISOString(),note});
  if(status==='blocked-quota')ledger.generationAvailable=false;
  if(status==='complete'){
    for(const name of ['index.html','report.md'])if(!fs.existsSync(path.join(root,run.directory,name)))throw new Error('Missing generation artifact '+name);
    run.sourceSha256=textHash(fs.readFileSync(path.join(root,run.directory,'index.html'),'utf8'));
  }
  pair.status=Object.values(pair.runs).every(r=>r.status==='complete')?'complete':Object.values(pair.runs).some(r=>r.status==='blocked-quota')?'blocked-quota':'pending';
  // Independence/model/browser attestation is a human-audited gate, never inferred from files.
  pair.eligible=false;writeJSON(path.join(studyRoot,'ledger.json'),ledger);
}

function buildReview() {
  const ledger=initialize();
  const pilot=path.join(root,'evals/runs/2026-10-08');
  const reviewRoot=path.join(studyRoot,'review');fs.mkdirSync(path.join(reviewRoot,'images'),{recursive:true});
  const groups=[{id:'X-01',briefId:'P2',title:'Workspace biên tập',brief:'Tìm bài BT-042, đổi người phụ trách, phục hồi sau lỗi và quay về bộ lọc cũ. Dữ liệu mẫu, không backend.',variants:['control-app','skill-app'],views:[['default-1440','Desktop'],['default-390','Mobile'],['error-1440','Lỗi desktop'],['error-390','Lỗi mobile']]},{id:'X-02',briefId:'P1',title:'Studio typography tiếng Việt',brief:'Chữ Việt; “Chữ rõ. Ý có dấu.”; Chọn chữ, Chỉnh nhịp, Hoàn thiện; có mẫu chữ và form mô phỏng giữ input.',variants:['skill-public','control-public'],views:[['default-1440','Desktop'],['default-390','Mobile'],['feedback-390','Phản hồi mobile']]}];
  const mapping=[],publicPairs=[];
  for(const pair of ledger.pairs){
    if(pair.status!=='complete')continue;
    const views=[['default-1440','Desktop'],['default-390','Mobile'],['error-1440','Lỗi desktop'],['error-390','Lỗi mobile']];
    if(!['A','B'].every(side=>views.every(([name])=>fs.existsSync(path.join(root,pair.runs[side].directory,name+'.png')))))continue;
    groups.push({id:pair.id,briefId:pair.briefId,title:pair.title,brief:pair.brief,variants:['a','b'],directories:[pair.runs.A.directory,pair.runs.B.directory],conditions:pair.conditions,views,eligible:pair.eligible,scheduled:true});
  }
  for(const group of groups){
    const conditions={},views=[];
    for(const [view,label] of group.views){const images={};for(const [index,variant] of group.variants.entries()){const side=index===0?'A':'B';const source=group.directories?path.join(root,group.directories[index],view+'.png'):path.join(pilot,variant,view+'.png');if(!fs.existsSync(source))throw new Error('Missing review image');const imageName=textHash(group.id+side+view).slice(0,20)+'.png';fs.copyFileSync(source,path.join(reviewRoot,'images',imageName));images[side]='images/'+imageName;conditions[side]=group.conditions?group.conditions[side]:variant.startsWith('skill')?'skill':'control';}views.push({label,images});}
    const hasher=crypto.createHash('sha256');for(const view of views)for(const side of ['A','B'])hasher.update(fs.readFileSync(path.join(reviewRoot,view.images[side])));const renderFingerprint=hasher.digest('hex');
    if(!group.scheduled)mapping.push({id:group.id,briefId:group.briefId,scheduled:false,status:'complete',eligible:false,conditions,renderFingerprint,reason:'Earlier exploratory pilot; no pre-registration, imperfect control; public root-authored.'});
    else ledger.pairs.find(p=>p.id===group.id).renderFingerprint=renderFingerprint;
    publicPairs.push({id:group.id,title:group.title,brief:group.brief,renderFingerprint,origin:group.scheduled?'Brief chốt trước · Benchmark mới':'Pilot cũ · Chỉ dùng khám phá',views});
  }
  writeJSON(path.join(studyRoot,'review-map.json'),mapping);
  writeJSON(path.join(studyRoot,'ledger.json'),ledger);
  writeJSON(path.join(reviewRoot,'pairs.json'),{schemaVersion:1,studyId:'exploratory-review-v1',warning:'Previous pilot only. One public generation was operator-authored after a quota failure. Both pairs are exploratory. No owner votes exist until submitted.',pairs:publicPairs});
  const payload=JSON.stringify({schemaVersion:1,studyId:'exploratory-review-v1',pairs:publicPairs}).replaceAll('<','\\u003c');
  fs.writeFileSync(path.join(reviewRoot,'data.js'),'window.REVIEW_DATA = '+payload+';\n');
  console.log('Prepared anonymous review of '+publicPairs.length+' available pairs; condition map is outside review bundle.');
}

function main() {
  const [command,arg1,arg2,arg3,...note]=process.argv.slice(2);
  if(command==='init'){const ledger=initialize();console.log(`Frozen ${ledger.pairs.length} pairs / ${ledger.pairs.length*2} generation prompts. First pair: ${ledger.pairs[0].id}`);}
  else if(command==='attempt'){recordAttempt(arg1,arg2,arg3,note.join(' '));console.log('Attempt recorded.');}
  else if(command==='review')buildReview();
  else if(command==='analyze'){
    const ledger=initialize(),mapping=fs.existsSync(path.join(studyRoot,'review-map.json'))?readJSON(path.join(studyRoot,'review-map.json')):[];
    const imported=arg1?readJSON(path.resolve(arg1)):{votes:[]};
    if(!Array.isArray(imported.votes))throw new Error('Votes export must contain votes array.');
    const report=analyze([...ledger.pairs,...mapping],imported.votes);report.studyId=ledger.studyId;report.generationAvailable=ledger.generationAvailable;report.scope='Descriptive evidence only. No automatic statistical superiority claim.';
    const destination=arg2?path.resolve(arg2):path.join(studyRoot,'summary.json');writeJSON(destination,report);console.log(JSON.stringify(report,null,2));
  }else throw new Error('Use init | attempt PAIR A/B STATUS NOTE | review | analyze [votes.json] [output.json]');
}
module.exports={analyze,textHash};
if(require.main===module){try{main();}catch(error){console.error(error.message);process.exitCode=1;}}
