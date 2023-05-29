var swiper = new Swiper(".mySwiper", {
    slidesPerView: "2",
    spaceBetween: 30,
    autoplay:{
      delay:2500,
      disableOnIteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper = new Swiper(".horizontalSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });