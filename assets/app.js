document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(button=>button.addEventListener('click',()=>{
 const year=button.dataset.year;
 document.querySelectorAll('.filter').forEach(item=>item.classList.toggle('on',item===button));
 document.querySelectorAll('.release-card').forEach(card=>card.hidden=Boolean(year)&&card.dataset.year!==year);
}));
