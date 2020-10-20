(function () {
  const initSwiper = () => {
    return new Swiper('.model__image-container', {
      pagination: {
        el: '.model__pagination',
        type: 'bullets',
        clickable: true,
      },
      loop: true,
    });
  };

  initSwiper();
})();
