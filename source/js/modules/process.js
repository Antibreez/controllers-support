(function () {
  const wrapper = document.querySelector('.process__wrapper');
  const container = document.querySelector('.process__container');

  if (!wrapper) {
    return;
  }

  const initSwiper = () => {
    return new Swiper('.process__container', {
      pagination: {
        el: '.process__pagination',
        type: 'bullets',
      },
      loop: true,
    });
  };

  const addSlideClass = (element) => {
    let items = element.querySelectorAll('.process__item');
    items.forEach((item) => {
      item.classList.add('swiper-slide');
    });
  };

  const addNumbering = (swiper) => {
    const numberField = container.querySelector('.process__number');

    swiper.on('slideChange', () => {
      numberField.textContent = swiper.realIndex + 1;
    });
  };

  const renderSlider = () => {
    let fragment = document.createDocumentFragment();

    let wrapperNode = wrapper.cloneNode(true);
    wrapperNode.className = 'process__slide-wrapper';
    wrapperNode.classList.add('swiper-wrapper');

    let paginationNode = document.createElement('div');
    paginationNode.classList.add('process__pagination');
    paginationNode.classList.add('swiper-pagination');

    let numberNode = document.createElement('div');
    numberNode.className = 'process__number';
    numberNode.textContent = 1;

    fragment.appendChild(wrapperNode);
    fragment.appendChild(paginationNode);
    fragment.appendChild(numberNode);

    container.appendChild(fragment);
    addSlideClass(container);

    const processSwiper = initSwiper();
    addNumbering(processSwiper);
  };

  renderSlider();
})();
