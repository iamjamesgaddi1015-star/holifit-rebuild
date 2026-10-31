const menuButton = document.querySelector('.menu-toggle');
document.querySelectorAll('.logo-carousel').forEach(carousel=>{
 const track=carousel.querySelector('.logo-track');
 carousel.querySelectorAll('[data-slide]').forEach(button=>button.addEventListener('click',()=>track.scrollBy({left:Number(button.dataset.slide)*Math.max(150,track.clientWidth*.7),behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})));
});
document.querySelectorAll('.catalog-form').forEach(catalog=>catalog.addEventListener('submit',event=>{
 event.preventDefault();const inputs=[...catalog.querySelectorAll('input')],status=catalog.querySelector('.catalog-status');
 const invalid=inputs.filter(input=>!input.validity.valid||!input.value.trim());
 inputs.forEach(input=>input.setAttribute('aria-invalid',String(invalid.includes(input))));
 if(invalid.length){status.textContent='Enter your first name, phone number and a valid email address.';invalid[0].focus();return;}
 status.textContent='Catalog delivery is not connected yet. Contact the team to request a copy. Your details have not been sent.';
}));
const calculator=document.querySelector('#tdee-form');
if(calculator){
 const mode=calculator.elements.mode,units=calculator.elements.units,result=document.querySelector('#calculator-result');
 units.addEventListener('change',()=>{const metric=units.value==='metric';document.querySelector('#weight-label').textContent=metric?'Weight (kg)':'Weight (lb)';document.querySelector('#height-label').textContent=metric?'Height (cm)':'Height (in)';const w=calculator.elements.weight,h=calculator.elements.height;w.value=String(Math.round(Number(w.value)*(metric?.45359237:2.20462262)*10)/10);h.value=String(Math.round(Number(h.value)*(metric?2.54:1/2.54)*10)/10);result.textContent='';});
 mode.addEventListener('change',()=>{const known=mode.value==='known';calculator.querySelector('.known-bmr').hidden=!known;['age','weight','height','fat','sex'].forEach(name=>calculator.elements[name].disabled=known);result.textContent='';});
 calculator.addEventListener('submit',event=>{event.preventDefault();const values=new FormData(calculator);let bmr;
 if(mode.value==='known'){bmr=Number(values.get('bmr'));if(bmr<500||bmr>5000){result.textContent='Enter a BMR between 500 and 5,000 kcal/day.';calculator.elements.bmr.focus();return;}}
 else{const age=Number(values.get('age')),weight=Number(values.get('weight'))*(units.value==='metric'?1:.45359237),height=Number(values.get('height'))*(units.value==='metric'?1:2.54),fat=values.get('fat');
 if(age<18||age>100||weight<20||weight>400||height<90||height>250||fat!==''&&(Number(fat)<2||Number(fat)>65)){result.textContent='Check the values: age 18–100, weight 20–400 kg, height 90–250 cm, optional body fat 2–65%.';result.focus();return;}
 bmr=fat!==''?370+21.6*weight*(1-Number(fat)/100):10*weight+6.25*height-5*age+(values.get('sex')==='male'?5:-161);}
 const tdee=Math.round(bmr*Number(values.get('activity')));result.replaceChildren();const title=document.createElement('h3');title.textContent=`Estimated daily energy: ${tdee.toLocaleString()} kcal`;const detail=document.createElement('p');detail.textContent=`Estimated BMR: ${Math.round(bmr).toLocaleString()} kcal/day. Activity factor: ${values.get('activity')}.`;result.append(title,detail);result.focus();
 });
}
const nav = document.querySelector('#main-nav');
const resourceMenu=document.querySelector('.resource-nav');
document.addEventListener('click',event=>{if(resourceMenu&&!event.target.closest('.resource-nav'))resourceMenu.open=false;});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&resourceMenu?.open){resourceMenu.open=false;resourceMenu.querySelector('summary').focus();}});
const servicesButton = document.querySelector('.services-toggle');
const servicesMenu = document.querySelector('#service-menu');
function closeServices() { servicesButton.setAttribute('aria-expanded','false'); servicesMenu.hidden = true; }
function closeNav() { menuButton.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); closeServices(); }
menuButton.addEventListener('click',()=>{ const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded',String(open)); nav.classList.toggle('is-open',open); if(!open) closeServices(); });
servicesButton.addEventListener('click',()=>{ const open = servicesButton.getAttribute('aria-expanded') !== 'true'; servicesButton.setAttribute('aria-expanded',String(open)); servicesMenu.hidden = !open; });
document.addEventListener('click',event=>{ if(!event.target.closest('.nav-group')) closeServices(); if(!event.target.closest('.header-inner')) closeNav(); });
document.addEventListener('keydown',event=>{ if(event.key==='Escape') { if(servicesButton.getAttribute('aria-expanded')==='true'){closeServices();servicesButton.focus();} else if(menuButton.getAttribute('aria-expanded')==='true'){closeNav();menuButton.focus();} } });
nav.addEventListener('focusout',()=>{setTimeout(()=>{if(!nav.contains(document.activeElement))closeServices();},0);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
matchMedia('(min-width: 1100px)').addEventListener('change',closeNav);
const video = document.querySelector('.hero video');
const videoToggle = document.querySelector('.video-toggle');
if(video && videoToggle){const reduced=matchMedia('(prefers-reduced-motion: reduce)');const sync=()=>{videoToggle.textContent=video.paused?'Play background video':'Pause background video';videoToggle.setAttribute('aria-pressed',String(video.paused));};if(reduced.matches)video.pause();video.addEventListener('play',sync);video.addEventListener('pause',sync);videoToggle.addEventListener('click',()=>video.paused?video.play().catch(()=>{}):video.pause());sync();}
const form=document.querySelector('#contact-form');
if(form){
 const status=document.querySelector('#form-status');
 const fields=[...form.querySelectorAll('[required]')];
 function validate(field){let message='';if(!field.value.trim())message='Please complete this field.';else if(field.type==='email'&&!field.validity.valid)message='Enter a valid email address.';field.setAttribute('aria-invalid',String(!!message));document.getElementById(`${field.id}-error`).textContent=message;return !message;}
 fields.forEach(field=>field.addEventListener('input',()=>{if(field.hasAttribute('aria-invalid'))validate(field);status.textContent='';}));
 form.addEventListener('submit',async event=>{
  event.preventDefault();const validity=fields.map(validate);if(validity.includes(false)){fields[validity.indexOf(false)].focus();status.textContent='Please check the highlighted fields.';return;}
  const values=Object.fromEntries(new FormData(form));const submit=form.querySelector('button[type="submit"]');
  if(!form.dataset.endpoint){const body=`Name: ${values.firstName} ${values.lastName}\nCompany: ${values.company}\nEmail: ${values.email}\nPhone: ${values.phone}\nInterested in: ${values.service || 'Help me choose'}\n\n${values.message}`;const link=document.createElement('a');link.href=`mailto:${encodeURIComponent(form.dataset.email)}?subject=${encodeURIComponent('Corporate wellness inquiry')}&body=${encodeURIComponent(body)}`;link.className='text-link';link.textContent='Open inquiry in your email app →';status.replaceChildren(document.createTextNode('Your inquiry is ready. Nothing has been sent. '),link);return;}
  submit.disabled=true;submit.setAttribute('aria-busy','true');status.textContent='Sending your inquiry…';
  try{const response=await fetch(form.dataset.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(values),signal:AbortSignal.timeout(15000)});if(!response.ok)throw Error('Request failed');status.textContent='Your inquiry was sent.';form.reset();fields.forEach(f=>f.removeAttribute('aria-invalid'));}catch{status.textContent='We could not confirm delivery. Your details are still here. Please contact the team by email before retrying.';}finally{submit.disabled=false;submit.removeAttribute('aria-busy');}
 });
}
