document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".slider__btn-next",
      prevEl: ".slider__btn-prev",
    },
    loop: false,
  });
});
