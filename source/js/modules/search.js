(function () {
  const placeholder = document.querySelector('.header__placeholder');
  const input = document.querySelector('.header__search');

  if (!input) {
    return;
  }

  const hide = () => {
    !placeholder.classList.contains('hide')
      placeholder.classList.add('hide');
  };

  const show = () => {
    placeholder.classList.contains('hide')
      placeholder.classList.remove('hide');
  };

  const onBlur = () => {
    if (input.value) {
      hide();
    } else {
      show();
    }
  };

  input.addEventListener('blur', onBlur);
})();
