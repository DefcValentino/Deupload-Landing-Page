
const menuNav = document.querySelector('.menu');
const menuList = document.querySelector('.menu-list')
const iconBtn = document.querySelector('.icon');

iconBtn.addEventListener ('click', ()=>{
  menuList.classList.toggle ('active');
})



// SWIPER SLIDE INTEGRATION
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "auto",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });