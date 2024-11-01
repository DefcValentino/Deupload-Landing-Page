
const menuList = document.querySelector('.nav-list')
const iconBtn = document.querySelector('.navBar');

iconBtn.addEventListener ('click', ()=>{
  menuList.classList.toggle ('active');

})




// SWIPER SLIDE INTEGRATION
// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: "auto",
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//   });


  //  SPLIDE JS IMAGE SLIDER

  // var splide = new Splide( '.splide', {
  //   type: 'slide',
  //   type:'loop',
  //   arrows:true,
  //   perPage: 3,
  //   autoplay: true,
  //   breakpoints:{
  //     640:{
  //       perPage: 2,
  //     },
  //   },
  // } );