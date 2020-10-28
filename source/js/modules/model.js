(function () {
  const modelLinks = document.querySelectorAll('.model__link');

  if (!modelLinks[0]) {
    return;
  }

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

  // modelLinks.forEach((link) => {
  //   link.addEventListener('click', (evt) => {

  //     console.log(evt.target.tagName);
  //     if (evt.target.tagName.toLowerCase() === 'img') {
  //       evt.preventDefault();
  //     }
  //   })
  // });

  modelLinks.forEach((link) => {
    link.addEventListener('mousedown', (evt) => {
      let isDraged = false;

      const onMouseMove = () => {
        isDraged = true;
      };

      const onMouseUp = (evt) => {
        if (isDraged) {
          evt.preventDefault();
        }

        isDraged = false;
        link.removeEventListener('mousemove', onMouseMove);
        link.removeEventListener('mouseup', onMouseUp);
      }

      link.addEventListener('mousemove', onMouseMove);
      link.addEventListener('mouseup', onMouseUp);
    });

    link.addEventListener('toushstart', (evt) => {
      let isDraged = false;

      const onTouchMove = () => {
        isDraged = true;
      };

      const onTouchEnd = (evt) => {
        if (isDraged) {
          evt.preventDefault();
        }

        isDraged = false;
        link.removeEventListener('touchmove', onTouchMove);
        link.removeEventListener('touchend', onTouchEnd);
      }

      link.addEventListener('touchmove', onTouchMove);
      link.addEventListener('touchend', onTouchEnd);
    });
  });

  initSwiper();
})();
