document.getElementById('year').textContent=new Date().getFullYear();
const buttons=document.querySelectorAll('.filters button'),cards=document.querySelectorAll('.video-card');
buttons.forEach(b=>b.onclick=()=>{buttons.forEach(x=>x.classList.remove('on'));b.classList.add('on');const f=b.dataset.f;cards.forEach(c=>c.classList.toggle('hide',f!=='all'&&!c.dataset.c.split(' ').includes(f)))});
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
