 const projectsSlider = new Swiper('.projects__slider', {
   slidesPerView: 3,
   spaceBetween: 30,

   navigation: {
     nextEl: '.slider-btn__next',
     prevEl: '.slider-btn__prev',
   },

   pagination: {
     el: ".swiper-bullets",
     clickable: true,
   },

   breakpoints: {
     320: {
       slidesPerView: 1,
     },

     576: {
       slidesPerView: 2,
       spaceBetween: 20,
     },

         992: {
       slidesPerView: 3,
     }
   }

 });