(function () {
  //const wrapper = document.querySelector('.process__wrapper');
  const container = document.querySelectorAll(".process__container");

  if (!container) {
    return;
  }

  const initSwiper = (item) => {
    return new Swiper(item, {
      pagination: {
        el: ".process__pagination",
        type: "bullets",
      },
      loop: true,
    });
  };

  const addSlideClass = (element) => {
    let items = element.querySelectorAll(".process__item");
    items.forEach((item) => {
      item.classList.add("swiper-slide");
    });
  };

  const addNumbering = (swiper, el) => {
    const numberField = el.querySelector(".process__number");

    swiper.on("slideChange", () => {
      numberField.textContent = swiper.realIndex + 1;
    });
  };

  const renderSlider = () => {
    container.forEach((item) => {
      let fragment = document.createDocumentFragment();

      let wrapperNode = item.parentNode
        .querySelector(".process__wrapper")
        .cloneNode(true);
      wrapperNode.className = "process__slide-wrapper";
      wrapperNode.classList.add("swiper-wrapper");

      let paginationNode = document.createElement("div");
      paginationNode.classList.add("process__pagination");
      paginationNode.classList.add("swiper-pagination");

      let numberNode = document.createElement("div");
      numberNode.className = "process__number";
      numberNode.textContent = 1;

      fragment.appendChild(wrapperNode);
      fragment.appendChild(paginationNode);
      fragment.appendChild(numberNode);

      item.appendChild(fragment);
      addSlideClass(item);

      const processSwiper = initSwiper(item);
      addNumbering(processSwiper, item);
    });
  };

  renderSlider();
})();
