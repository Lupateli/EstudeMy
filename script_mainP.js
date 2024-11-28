new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1
        },
        512:{
            slidesPerView: 2
        },
        768:{
            slidesPerView: 3
        },
        1024:{
            slidesPerView: 4
        },
    }
  });