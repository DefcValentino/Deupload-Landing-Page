
const menuNav = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list')
const iconBtn = document.querySelector('.icon');

iconBtn.addEventListener ('click', ()=>{
  menuList.classList.toggle ('active');
})

