(function () {
  //const wrapper = document.querySelector('.equipment__wrapper');
  const container = document.querySelectorAll(".equipment__container");

  if (!container) {
    return;
  }

  const initSwiper = (item) => {
    return new Swiper(item, {
      pagination: {
        el: ".equipment__pagination",
        type: "bullets",
      },
      loop: true,
    });
  };

  const addSlideClass = (element) => {
    let items = element.querySelectorAll(".equipment__item");
    items.forEach((item) => {
      item.classList.add("swiper-slide");
    });
  };

  const renderSlider = () => {
    container.forEach((item) => {
      let fragment = document.createDocumentFragment();

      let wrapperNode = item.parentNode
        .querySelector(".equipment__wrapper")
        .cloneNode(true);
      wrapperNode.className = "equipment__slide-wrapper";
      wrapperNode.classList.add("swiper-wrapper");

      let paginationNode = document.createElement("div");
      paginationNode.classList.add("equipment__pagination");
      paginationNode.classList.add("swiper-pagination");

      fragment.appendChild(wrapperNode);
      fragment.appendChild(paginationNode);

      item.appendChild(fragment);
      addSlideClass(item);

      initSwiper(item);
    });
  };

  renderSlider();
})();
