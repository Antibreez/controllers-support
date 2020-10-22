(function () {
  const wireButtons = document.querySelectorAll('.device__wire-dote span');
  const popups = document.querySelectorAll('.device__wire-popup-mobile');
  const closeButtons = document.querySelectorAll('.device__wire-popup-close');
  const overlay = document.querySelector('.device__wire-popup-overlay');

  const closeAnyPopup = () => {
    popups.forEach((popup) => {
      if (popup.classList.contains('js--show')) {
        popup.classList.remove('js--show');
      }
    })
  };

  wireButtons.forEach((wireButton, idx) => {
    wireButton.addEventListener('click', () => {
      popups[idx].classList.add('js--show');
      overlay.classList.add('js--show');
    });
  });

  closeButtons.forEach((closeButton, idx) => {
    closeButton.addEventListener('click', () => {
      popups[idx].classList.remove('js--show');
      overlay.classList.remove('js--show');
    });
  });

  overlay.addEventListener('click', () => {
    closeAnyPopup();
    overlay.classList.remove('js--show');
  });
})();
