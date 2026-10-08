/* npm install --no-save playwright, or set PLAYWRIGHT_MODULE to an existing module.
   Optional CHROME_PATH points to an installed Chrome executable. No downloads. */
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.ttf': 'font/ttf', '.jpg': 'image/jpeg', '.png': 'image/png', '.md': 'text/plain; charset=utf-8' };
const server = http.createServer((req, res) => {
  let filename;
  try { filename = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname)); } catch { res.writeHead(400).end(); return; }
  if (filename !== root && !filename.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(filename, (error, data) => { if (error) { res.writeHead(404).end(); return; } res.setHeader('Content-Type', mime[path.extname(filename)] || 'application/octet-stream'); res.end(data); });
});
const writeJSON = (filename, value) => fs.writeFileSync(filename, JSON.stringify(value, null, 2) + '\n');
async function inspect(page) {
  await page.evaluate(() => document.fonts.ready);
  return page.evaluate(() => ({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, overflow: document.documentElement.scrollWidth > innerWidth + 1, fontsLoaded: [...document.fonts].filter(font => font.status === 'loaded').length, vietnamese: document.body.innerText.includes('Việt') || document.body.innerText.includes('thảo'), title: document.title }));
}
async function capture(page, route, filename, width = 1440, fullPage = true) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(route, { waitUntil: 'networkidle' });
  const metrics = await inspect(page);
  await page.screenshot({ path: filename, fullPage, animations: 'disabled' });
  return metrics;
}
async function specimen(browser, base) {
  const page = await browser.newPage();
  const errors = []; page.on('pageerror', e => errors.push(e.message)); page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  const output = path.join(root, 'assets/specimen'); const route = base + '/assets/specimen/index.html';
  const views = {};
  for (const [name, suffix, width, full] of [['light-desktop','',1440,true],['dark-desktop','?theme=dark',1440,true],['light-mobile','',390,true],['dark-error','?theme=dark&dialog=error',1440,false]]) views[name] = await capture(page,route+suffix,path.join(output,name+'.png'),width,full);
  const checks = [];
  const test = async (name, fn) => { await fn(); checks.push({ name, passed:true }); };
  await page.goto(route); await page.setViewportSize({ width:390,height:900 });
  await test('mobile disclosure and Escape return', async () => { await page.locator('#menu-toggle').click(); assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'),'true'); await page.locator('#site-nav a').first().focus(); await page.keyboard.press('Escape'); assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'),'false'); assert.equal(await page.evaluate(()=>document.activeElement.id),'menu-toggle'); });
  await test('keyboard focus visible', async () => { await page.locator('#menu-toggle').focus(); await page.keyboard.press('Tab'); assert.equal(await page.locator('#theme-toggle').evaluate(el=>el.matches(':focus-visible')),true); assert.notEqual(await page.locator('#theme-toggle').evaluate(el=>getComputedStyle(el).outlineStyle),'none'); });
  await test('theme switch', async()=>{await page.locator('#theme-toggle').click();assert.equal(await page.locator('body').evaluate(el=>el.classList.contains('dark')),true);});
  await test('tab ArrowRight and Home',async()=>{await page.locator('#tab-items').focus();await page.keyboard.press('ArrowRight');assert.equal(await page.locator('#tab-history').getAttribute('aria-selected'),'true');assert.equal(await page.locator('#panel-history').isVisible(),true);await page.keyboard.press('Home');assert.equal(await page.locator('#tab-items').getAttribute('aria-selected'),'true');});
  await test('filter empty and recovery',async()=>{await page.locator('#filter').fill('zzzz');assert.equal(await page.locator('#no-results').isVisible(),true);await page.locator('#reset-filter').click();assert.equal(await page.locator('tbody tr:visible').count(),3);});
  await test('selection announces and clears',async()=>{await page.locator('tbody input').first().check();assert.match(await page.locator('#selection-status').innerText(),/1/);await page.locator('#clear-selection').click();assert.equal(await page.locator('tbody input:checked').count(),0);});
  await test('dialog failure preserves input and retry succeeds',async()=>{await page.locator('#open-editor').click();assert.equal(await page.evaluate(()=>document.activeElement.id),'edit-name');await page.locator('#edit-name').fill('Những khoảng thở trong thành phố');await page.locator('#save-name').click();assert.match(await page.locator('#save-status').innerText(),/Lỗi mạng mô phỏng/);assert.equal(await page.locator('#edit-name').inputValue(),'Những khoảng thở trong thành phố');await page.locator('#save-name').click();assert.match(await page.locator('#save-status').innerText(),/Đã lưu/);await page.keyboard.press('Escape');assert.equal(await page.evaluate(()=>document.activeElement.id),'open-editor');assert.equal(await page.locator('#project-title').innerText(),'Những khoảng thở trong thành phố');});
  await test('dialog traps Tab',async()=>{await page.locator('#open-editor').click();await page.locator('#save-name').focus();await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.id),'close-editor');await page.keyboard.press('Escape');});
  for (const width of [320,390,1440]) {await page.setViewportSize({width,height:900});await page.goto(route);views['width-'+width]=await inspect(page);assert.equal(views['width-'+width].overflow,false);}
  await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('.spinner').evaluate(el=>getComputedStyle(el).animationName),'none');checks.push({name:'reduced motion disables spinner',passed:true});
  const contrast = [];
  for (const theme of ['', '?theme=dark']) {
    await page.goto(route+theme);
    contrast.push(...await page.evaluate(()=>{
      const rgb = s => (s.match(/[\d.]+/g)||[]).slice(0,3).map(Number);
      const lum = c => c.map(x=>x/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
      return ['body','.opening-note .muted','.primary','.error','.complete'].map(selector=>{const el=document.querySelector(selector);let node=el,bg;while(node){const value=getComputedStyle(node).backgroundColor;if(!value.includes('rgba')&&value!=='transparent'){bg=value;break;}node=node.parentElement;}const foreground=getComputedStyle(el).color;const a=lum(rgb(foreground)),b=lum(rgb(bg));return{theme:document.body.classList.contains('dark')?'dark':'light',selector,foreground,background:bg,ratio:Number(((Math.max(a,b)+.05)/(Math.min(a,b)+.05)).toFixed(2))};});
    }));
  }
  assert(contrast.every(pair=>pair.ratio>=4.5));
  await page.goto(route);await page.setViewportSize({width:1440,height:900});
  await page.evaluate(()=>{const entries=[...document.querySelectorAll('body,body *')].map(el=>[el,parseFloat(getComputedStyle(el).fontSize)]);entries.forEach(([el,size])=>el.style.fontSize=size*2+'px');});
  const enlargement=await inspect(page); // Deliberate stress test, not browser zoom emulation.
  assert.equal(errors.length,0);assert(Object.values(views).every(v=>v.fontsLoaded>=2));
  writeJSON(path.join(output,'checks.json'),{generatedAt:new Date().toISOString(),browser:await browser.version(),views,checks,contrast,textEnlargement200Percent:enlargement,errors,limits:'Targeted checks. Enlarged computed text is not a browser zoom or screen reader audit. Static previews do not implement their example actions.'});
  await page.close();
}
async function maps(browser,base) {
  const page=await browser.newPage({viewport:{width:1100,height:1100}});
  for(const name of ['agency','motion','brand']){await page.goto(`${base}/assets/reference-maps/index.html?map=${name}`,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);await page.locator('#'+name).screenshot({path:path.join(root,'assets/reference-maps',name+'.png')});}
  await page.close();
}
async function pilots(browser,base) {
  const run=path.join(root,'evals/runs/2026-10-08');if(!fs.existsSync(run))return;
  const results=[];
  for(const variant of ['control-public','skill-public','control-app','skill-app']){
    const output=path.join(run,variant);if(!fs.existsSync(path.join(output,'index.html')))continue;
    const page=await browser.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});const route=`${base}/evals/runs/2026-10-08/${variant}/index.html`;const views={};const checks=[];
    for(const width of [1440,390])views['default-'+width]=await capture(page,route,path.join(output,`default-${width}.png`),width);
    const test=async(name,fn)=>{try{await fn();checks.push({name,passed:true});}catch(error){checks.push({name,passed:false,error:error.message});}};
    if(variant.endsWith('app')){
      for(const width of [1440,390])views['error-'+width]=await capture(page,route+'?view=detail&state=error',path.join(output,`error-${width}.png`),width);
      await page.goto(route);
      await test('filter detail failure retry return',async()=>{await page.getByTestId('queue-filter').selectOption('pending');await page.getByTestId('open-BT-042').focus();await page.keyboard.press('Enter');await page.getByTestId('assignee').selectOption('Thu Hà');await page.getByTestId('save').focus();await page.keyboard.press('Enter');await page.waitForFunction(()=>document.querySelector('[data-testid="save-status"]').textContent.includes('lỗi')||document.querySelector('[data-testid="save-status"]').textContent.includes('Lỗi')||document.querySelector('[data-testid="save-status"]').textContent.includes('chưa lưu'));assert.equal(await page.getByTestId('assignee').inputValue(),'Thu Hà');await page.getByTestId('save').focus();await page.keyboard.press('Enter');await page.waitForFunction(()=>document.querySelector('[data-testid="save-status"]').textContent.includes('Đã')||document.querySelector('[data-testid="save-status"]').textContent.includes('thành công'));await page.getByTestId('return-queue').click();assert.equal(await page.getByTestId('queue-filter').inputValue(),'pending');assert.match(await page.locator('body').innerText(),/Thu Hà/);assert.equal(await page.evaluate(()=>document.activeElement.dataset.testid),'open-BT-042');});
    }else{
      await page.goto(route);
      await test('mobile menu keyboard and Escape',async()=>{const menu=page.locator('button[aria-controls="navigation"]');await menu.focus();await page.keyboard.press('Enter');assert.equal(await menu.getAttribute('aria-expanded'),'true');await page.locator('nav a').first().focus();await page.keyboard.press('Escape');assert.equal(await menu.getAttribute('aria-expanded'),'false');assert.equal(await menu.evaluate(el=>el===document.activeElement),true);});
      await test('request feedback preserves fields',async()=>{const form=page.getByTestId('request-form');const name=form.locator('input[type=text],input:not([type])').first();await name.fill('Mai Anh');await form.locator('input[type=email]').fill('mai@example.test');await form.locator('textarea').fill('Bộ chữ tiếng Việt cho tiệm sách độc lập.');await page.getByTestId('submit-request').click();await page.getByTestId('request-status').waitFor({state:'visible'});assert.equal(await name.inputValue(),'Mai Anh');assert.match(await page.getByTestId('request-status').innerText(),/mô phỏng|thử|gửi/i);});
      await page.screenshot({path:path.join(output,'feedback-390.png'),fullPage:true,animations:'disabled'});
    }
    results.push({variant,views,checks,errors});await page.close();
  }
  writeJSON(path.join(run,'checks.json'),{generatedAt:new Date().toISOString(),browser:await browser.version(),results,limits:'Pilot only. Explicit invocation; no implicit activation or owner taste approval tested. Control artifacts kept without edits.'});
  assert(results.every(result => result.errors.length === 0 && result.checks.every(check => check.passed) && Object.values(result.views).every(view => !view.overflow && view.fontsLoaded >= 2)), 'Pilot checks failed; inspect checks.json.');
}
(async()=>{await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const base=`http://127.0.0.1:${server.address().port}`;let browser;try{browser=await chromium.launch({headless:true,...(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{channel:'chrome'})});const mode=process.argv[2]||'all';if(mode==='all'||mode==='specimen')await specimen(browser,base);if(mode==='all'||mode==='maps')await maps(browser,base);if(mode==='all'||mode==='pilots')await pilots(browser,base);console.log(`Review renders completed: ${mode}`);}finally{if(browser)await browser.close();await new Promise(resolve=>server.close(resolve));}})().catch(error=>{console.error(error);process.exitCode=1;});
