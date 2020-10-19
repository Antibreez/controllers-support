(function () {
  const wrapper = document.querySelector('.equipment__wrapper');
  const container = document.querySelector('.equipment__container');

  if(!wrapper) {
    return;
  }

  const initSwiper = () => {
    return new Swiper('.equipment__container', {
      pagination: {
        el: '.equipment__pagination',
        type: 'bullets',
      },
      loop: true,
    });
  };

  const addSlideClass = (element) => {
    let items = element.querySelectorAll('.equipment__item');
    items.forEach((item) => {
      item.classList.add('swiper-slide');
    });
  };

  const renderSlider = () => {
    let fragment = document.createDocumentFragment();

    let wrapperNode = wrapper.cloneNode(true);
    wrapperNode.className = 'equipment__slide-wrapper';
    wrapperNode.classList.add('swiper-wrapper');

    let paginationNode = document.createElement('div');
    paginationNode.classList.add('equipment__pagination');
    paginationNode.classList.add('swiper-pagination');

    fragment.appendChild(wrapperNode);
    fragment.appendChild(paginationNode);

    container.appendChild(fragment);
    addSlideClass(container);

    initSwiper();
  };

  renderSlider();
})();
