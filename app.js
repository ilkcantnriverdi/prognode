
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'))}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open'));
});

const billingBtns=document.querySelectorAll('.billing button');
function setBilling(mode){
  billingBtns.forEach(b=>b.classList.toggle('active',b.dataset.billing===mode));
  document.querySelectorAll('[data-monthly][data-yearly]').forEach(el=>{
    el.textContent=mode==='yearly'?el.dataset.yearly:el.dataset.monthly;
  });
  document.querySelectorAll('.year-note').forEach(el=>{
    el.style.visibility=mode==='yearly'?'visible':'hidden';
  });
}
billingBtns.forEach(b=>b.addEventListener('click',()=>setBilling(b.dataset.billing)));
setBilling('monthly');


// V3 interactive dashboard tabs
document.querySelectorAll('.demo-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.demo-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.demo-view').forEach(v=>v.classList.remove('active'));
    tab.classList.add('active');
    const view=document.querySelector('#demo-'+tab.dataset.view);
    if(view) view.classList.add('active');
  });
});
