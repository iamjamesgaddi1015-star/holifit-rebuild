const {chromium}=require('../../../playwright-tests/node_modules/playwright');
const fs=require('node:fs/promises');
(async()=>{
 await fs.mkdir('../../../audits/holifit-rebuild/reference',{recursive:true});
 const browser=await chromium.launch({headless:true});
 try{
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 await page.goto('https://holifit.ph/',{waitUntil:'networkidle',timeout:60000});
 await page.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=800){scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}scrollTo(0,0);});
 await page.waitForTimeout(1500);
 await page.screenshot({path:'../../../audits/holifit-rebuild/reference/home-desktop.png',fullPage:true});
 await page.screenshot({path:'../../../audits/holifit-rebuild/reference/home-top.png'});
 await page.evaluate(()=>scrollTo(0,2600));
 await page.screenshot({path:'../../../audits/holifit-rebuild/reference/home-programs.png'});
 await page.evaluate(()=>scrollTo(0,0));
 const data=await page.evaluate(()=>({title:document.title,links:[...document.querySelectorAll('header a')].map(a=>({label:a.textContent.trim(),href:a.href})),elements:[...document.querySelectorAll('h1,h2,h3,header,section,.elementor-section')].map(e=>{const c=getComputedStyle(e),r=e.getBoundingClientRect();return {tag:e.tagName,text:e.textContent.trim().slice(0,120),width:r.width,height:r.height,x:r.x,y:r.y+scrollY,font:c.fontFamily,size:c.fontSize,weight:c.fontWeight,color:c.color,background:c.backgroundColor,image:c.backgroundImage,padding:c.padding};}),styles:[...document.styleSheets].map(s=>s.href).filter(Boolean)}));
 await fs.writeFile('../../../audits/holifit-rebuild/reference/home-layout.json',JSON.stringify(data,null,2));
 await fs.writeFile('../../../audits/holifit-rebuild/reference/home.html',await page.content());
 await page.setViewportSize({width:390,height:844});
 await page.screenshot({path:'../../../audits/holifit-rebuild/reference/home-mobile.png',fullPage:true});
 console.log(JSON.stringify({title:data.title,styles:data.styles,elements:data.elements.length}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e.message);process.exitCode=1;});
