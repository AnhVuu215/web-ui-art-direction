const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const {serve}=require('./local-review-server.cjs');
const root=path.resolve(__dirname,'..');
(async()=>{const local=await serve(root);let browser;try{
 browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{channel:'chrome'})});
 const page=await browser.newPage({acceptDownloads:true});const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(r.status()+' '+r.url());});
 const route=local.base+'/evals/benchmark/review/index.html';await page.goto(route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.locator('input[type=radio]:checked').count(),0);
 const views=[];for(const width of [1440,390,320]){await page.setViewportSize({width,height:900});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true);views.push({width,noDocumentOverflow:true});if(width!==320)await page.screenshot({path:path.join(root,`evals/benchmark/review/preview-${width}.png`),fullPage:true});}
 await page.setViewportSize({width:1440,height:900});await page.locator('#view-0').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('#view-1').getAttribute('aria-selected'),'true');
 await page.locator('input[name=visual][value=tie]').check();await page.locator('input[name=clarity][value=unknown]').check();await page.locator('input[name=brand][value=na]').check();await page.locator('#reason').fill('SYNTHETIC TEST ONLY — titles are equally clear.');await page.locator('#save').click();assert.match(await page.locator('#feedback').innerText(),/mở đủ/);
 for(const tab of await page.locator('[role=tab]').all())await tab.click();await page.locator('#save').click();assert.match(await page.locator('#feedback').innerText(),/Đã lưu/);
 await page.reload();assert.equal(await page.locator('input[name=visual][value=tie]').isChecked(),true);
 await page.locator('.enlarge').first().click();assert.equal(await page.locator('#image-dialog').evaluate(el=>el.open),true);await page.keyboard.press('Escape');assert.equal(await page.locator('.enlarge').first().evaluate(el=>document.activeElement===el),true);
 const downloadPromise=page.waitForEvent('download');await page.locator('#export').click();const download=await downloadPromise;const stream=await download.createReadStream();const chunks=[];for await(const chunk of stream)chunks.push(chunk);const exported=JSON.parse(Buffer.concat(chunks).toString());assert.equal(exported.votes.length,1);assert.equal(exported.votes[0].visual,'tie');assert.match(exported.votes[0].reason,/SYNTHETIC/);
 await page.locator('#reset').click();await page.locator('#cancel-reset').click();assert.match(await page.locator('#storage-status').innerText(),/1\//);await page.locator('#reset').click();await page.locator('#confirm-reset').click();assert.equal(await page.locator('input[type=radio]:checked').count(),0);assert.equal(JSON.parse(await page.evaluate(()=>localStorage.getItem('ui-art-direction-exploratory-review-v1'))).votes.length,0);
 assert.equal(errors.length,0);const result={at:new Date().toISOString(),browser:await browser.version(),views,checks:['no preselected winner','keyboard tabs','all views required','save and reload','image dialog Escape/focus return','JSON export preserves tie','reset requires choice and clears local votes'],errors,syntheticVotesRetained:false,limits:'Fresh automated browser context; test votes discarded, not human evidence.'};fs.writeFileSync(path.join(root,'evals/benchmark/review/checks.json'),JSON.stringify(result,null,2)+'\n');console.log('Review UI checks passed; no synthetic votes retained.');
}finally{if(browser)await browser.close();await local.close();}})().catch(error=>{console.error(error);process.exitCode=1;});
