const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const {serve}=require('./local-review-server.cjs');
const {textHash}=require('./benchmark.cjs');
const root=path.resolve(__dirname,'..');
const readJSON=file=>JSON.parse(fs.readFileSync(file,'utf8').replace(/^\ufeff/,''));
(async()=>{const ledger=readJSON(path.join(root,'evals/benchmark/ledger.json'));const local=await serve(root);let browser;try{
 browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{channel:'chrome'})});
 const results=[];
 for(const pair of ledger.pairs)for(const side of ['A','B']){
  const run=pair.runs[side];if(run.status!=='complete')continue;const output=path.join(root,run.directory),source=fs.readFileSync(path.join(output,'index.html'),'utf8');
  if(textHash(source)!==run.sourceSha256)throw new Error('First-attempt source changed: '+pair.id+'/'+side);
  const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});const route=local.base+'/'+run.directory+'/index.html';const views={};const checks=[];
  for(const width of [1440,390])for(const state of ['default','error']){
   await page.setViewportSize({width,height:900});await page.goto(route+(state==='error'?'?state=error':''),{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
   views[`${state}-${width}`]=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,noDocumentOverflow:document.documentElement.scrollWidth<=innerWidth+1,fontsLoaded:[...document.fonts].filter(f=>f.status==='loaded').length}));
   await page.screenshot({path:path.join(output,`${state}-${width}.png`),fullPage:true,animations:'disabled'});
  }
  try{await page.goto(route+'?state=error',{waitUntil:'networkidle'});const form=page.getByTestId('work-form');const values=await form.locator('input,textarea,select').evaluateAll(fields=>fields.map(f=>({name:f.name||f.id,value:f.value})));const before=await page.getByTestId('feedback').innerText();await page.getByTestId('primary').focus();await page.keyboard.press('Enter');await page.waitForFunction(previous=>document.querySelector('[data-testid="feedback"]')?.textContent.trim()!==previous.trim(),before);await page.waitForFunction(()=>/đã|thành công|hoàn tất|xác nhận/i.test(document.querySelector('[data-testid="feedback"]')?.textContent||''));checks.push({name:'error-route keyboard retry reports success',passed:true,valuesAtFailure:values});}catch(error){checks.push({name:'error-route keyboard retry reports success',passed:false,error:error.message});}
  results.push({pairId:pair.id,side,sourceSha256:run.sourceSha256,views,checks,errors,manualTaskAudit:'pending'});await page.close();
 }
 fs.writeFileSync(path.join(root,'evals/benchmark/browser-results.json'),JSON.stringify({at:new Date().toISOString(),browser:await browser.version(),results,limits:'First attempts retained. Generic retry check supplements, not replaces, per-brief task audit and owner review.'},null,2)+'\n');console.log('Rendered '+results.length+' completed generation artifacts.');
}finally{if(browser)await browser.close();await local.close();}})().catch(error=>{console.error(error);process.exitCode=1;});
