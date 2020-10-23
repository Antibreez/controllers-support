(function () {
  const modelLinks = document.querySelectorAll('.model__link')

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

  modelLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {

      console.log(evt.target.tagName);
      if (evt.target.tagName.toLowerCase() === 'img') {
        evt.preventDefault();
      }
    })
  });

  initSwiper();
})();
