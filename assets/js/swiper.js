$(function () {
  //   initBanner();
});

function initBanner() {
  $(".swiper").each(function () {
    const id = "#" + $(this).attr("id");
    new Swiper(id, {
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      spaceBetween: 0,
      pagination: {
        el: `${id} .swiper-pagination`,
        clickable: true,
      },
      navigation: {
        nextEl: `${id} .swiper-button-next`,
        prevEl: `${id} .swiper-button-prev`,
      },
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      lazy: true,
    });
  });
}
