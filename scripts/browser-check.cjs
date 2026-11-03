const {mkdir,writeFile}=require('node:fs/promises');
const path=require('node:path');
let chromium;
try{({chromium}=require('playwright'));}catch{({chromium}=require('../../../playwright-tests/node_modules/playwright'));}
const assert=require('node:assert/strict');
(async()=>{
 const artifacts=path.resolve(__dirname,'../../../../audits/holifit-rebuild');await mkdir(artifacts,{recursive:true});
 const browser=await chromium.launch({headless:true});
 const errors=[];const failures=[];
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failures.push(`${r.status()} ${r.url()}`);});
  await page.goto('http://127.0.0.1:4173/',{waitUntil:'networkidle'});
  await page.screenshot({path:path.join(artifacts,'home-desktop.png'),fullPage:true});
  await page.getByRole('button',{name:'Services'}).click();
  await page.getByRole('link',{name:'Team Building',exact:true}).first().click();
  await page.waitForURL('**/team-building-philippines/');
  assert.equal(await page.locator('h1').textContent(),'Corporate Team Building Organizer in the Philippines');
  await page.getByRole('button',{name:'Services'}).click();await page.keyboard.press('Escape');
  assert.equal(await page.getByRole('button',{name:'Services'}).getAttribute('aria-expanded'),'false');
  await page.locator('summary').first().click();assert.equal(await page.locator('details').first().getAttribute('open'),'');
  await page.goto('http://127.0.0.1:4173/contact-us/');
  await page.getByRole('button',{name:'Prepare email inquiry'}).click();
  assert.equal(await page.locator('#firstName').getAttribute('aria-invalid'),'true');
  assert.equal(await page.evaluate(()=>document.activeElement.id),'firstName');
  for(const [id,value] of Object.entries({firstName:'Example',lastName:'Visitor',company:'Demo organization',email:'visitor@example.com',message:'Please share program options.'}))await page.locator(`#${id}`).fill(value);
  await page.getByRole('button',{name:'Prepare email inquiry'}).click();
  assert.match(await page.locator('#form-status').textContent(),/Nothing has been sent/);
  assert.match(await page.locator('#form-status a').getAttribute('href'),/^mailto:/);
  // Mock an optional integration; no real inquiry leaves the local browser.
  await page.evaluate(()=>document.querySelector('#contact-form').dataset.endpoint='/mock-inquiry');
  await page.route('**/mock-inquiry',route=>route.abort('failed'));
  await page.getByRole('button',{name:'Prepare email inquiry'}).click();
  await page.waitForFunction(()=>document.querySelector('#form-status').textContent.includes('could not confirm'));
  assert.equal(await page.locator('#firstName').inputValue(),'Example');
  await page.unroute('**/mock-inquiry');
  await page.route('**/mock-inquiry',route=>route.fulfill({status:200,contentType:'application/json',body:'{}'}));
  await page.getByRole('button',{name:'Prepare email inquiry'}).click();
  await page.waitForFunction(()=>document.querySelector('#form-status').textContent==='Your inquiry was sent.');
  assert.equal(await page.locator('#firstName').inputValue(),'');
  await page.screenshot({path:path.join(artifacts,'contact-desktop.png'),fullPage:true});
  await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:4173/');
  await page.getByRole('button',{name:'Menu'}).click();assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'true');
  await page.getByRole('button',{name:'Services'}).click();await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'Fitness Classes',exact:true}).click();await page.waitForURL('**/fitness-classes-philippines/');
  await page.getByRole('button',{name:'Menu'}).click();await page.keyboard.press('Escape');assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');
  await page.goto('http://127.0.0.1:4173/');
  for(const width of [320,390,768,1024,1440]){await page.setViewportSize({width,height:900});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`No horizontal overflow at ${width}px`);}
  await page.setViewportSize({width:390,height:844});await page.screenshot({path:path.join(artifacts,'home-mobile.png'),fullPage:true});
  await page.goto('http://127.0.0.1:4173/free-tools/');
  await page.getByRole('button',{name:'Calculate my estimate'}).click();
  assert.match(await page.locator('#calculator-result').textContent(),/1,971 kcal/);
  await page.locator('#calc-mode').selectOption('known');
  await page.locator('[name=bmr]').fill('1500');
  await page.getByRole('button',{name:'Calculate my estimate'}).click();
  assert.match(await page.locator('#calculator-result').textContent(),/1,800 kcal/);
  await page.locator('[name=bmr]').fill('0');
  await page.getByRole('button',{name:'Calculate my estimate'}).click();
  assert.match(await page.locator('#calculator-result').textContent(),/Enter a BMR/);
  await page.goto('http://127.0.0.1:4173/');
  await page.locator('.catalog-form button').click();
  assert.match(await page.locator('.catalog-status').textContent(),/Enter your first name/);
  await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
  const response=await page.goto('http://127.0.0.1:4173/nonexistent/');assert.equal(response.status(),404);assert.match(await page.locator('h1').textContent(),/back on track/);
  assert.deepEqual(errors,[]);assert.equal(failures.filter(f=>!f.includes('/nonexistent/')).length,0,failures.join('\n'));
  const result={passed:true,checks:['desktop navigation','service menu Escape and focus','FAQ disclosure','contact validation and first-error focus','email inquiry preparation','mock integration failure preserves input and successful retry resets','mobile menu navigation','320/390/768/1024/1440px overflow','local TDEE and known-BMR arithmetic','calculator invalid-input state','catalog validation without transmission','reduced motion','404 handling','no unexpected HTTP or JS errors']};
  await writeFile(path.join(artifacts,'verification.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
