(function () {
  const $warning = $(".device__warning-icon");
  const $chip = $(".device__stroke-chip");
  const $popupCable = $(".device__stroke-popup");
  const $popupWarning = $(".device__warning-popup");

  $warning.on("mouseenter", function () {
    const $popup = $(this).next();
    const offset =
      $popup.offset().left + $popup.outerWidth() - $(window).outerWidth();

    if (offset > 0) {
      $popup.css("transform", "translateX(calc(-100% + 40px))");
    }
  });

  $warning.on("mouseleave", function () {
    const $popup = $(this).next();
    $popup.css("transform", "");
  });

  $chip.on("click", function () {
    const $popup = $(this).next();

    $popup.addClass("opened");
  });

  $popupCable.on("click", function (e) {
    if (
      $(e.target).hasClass("device__stroke-popup") ||
      $(e.target).hasClass("device__stroke-popup-close") ||
      $(e.target).parents(".device__stroke-popup-close").length > 0
    ) {
      $(this).removeClass("opened");
    }
  });

  $warning.on("click", function () {
    const $popup = $(this).next();

    $popup.addClass("opened");
  });

  $popupWarning.on("click", function (e) {
    if (
      $(e.target).hasClass("device__warning-popup") ||
      $(e.target).hasClass("device__stroke-popup-close") ||
      $(e.target).parents(".device__stroke-popup-close").length > 0
    ) {
      $(this).removeClass("opened");
    }
  });

  const swiper = new Swiper(".model__image-container", {
    pagination: {
      el: ".model__image-container .model__pagination",
      type: "bullets",
      clickable: true,
    },
    loop: true,
  });
})();
