(function () {
  const emailInput = document.querySelector("input[name='email']");
  const brandInput = document.querySelector("input[name='brand']");
  const modelInput = document.querySelector("input[name='model']");
  const fileInput = document.querySelector("input[type='file']");

  const progress = document.querySelector('.add-model__file-progress');
  const bar = document.querySelector('.add-model__bar-current');

  const fileResult = document.querySelector('.add-model__file-result');
  const fileImg = document.querySelector('.add-model__file-image');
  const fileName = document.querySelector('.add-model__file-name');
  const fileClear = document.querySelector('.add-model__file-close');

  if (!emailInput) {
    return;
  }

  const addClassName = (element, className) => {
    if (!element.classList.contains(className)) {
      element.classList.add(className);
    }
  };

  const removeClassName = (element, className) => {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  };

  const onTextFocus = (evt) => {
    const input = evt.target;

    addClassName(input, 'fill');

    if (input.value === '') {
      addClassName(input, 'mask');
    }
  };

  const onTextBlur = (evt) => {
    const input = evt.target;

    if (!input.value) {
      removeClassName(input, 'fill');
    }

    removeClassName(input, 'mask');
  }

  const onTextInput = (evt) => {
    const input = evt.target;

    if (input.value === '') {
      addClassName(input, 'mask');
    }

    if (input.value !== '') {
      removeClassName(input, 'mask');
    }
  }

  const image = document.getElementById('file-image');

  const readUrl = (input) => {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onloadstart = function (e) {
        progress.classList.add('show');
      }

      reader.onprogress = function (e) {
        console.log(Math.round(e.loaded / e.total * 100));
        bar.style.width = Math.round(e.loaded / e.total * 100) + '%';
      }

      reader.onload = function (e) {
        fileImg.setAttribute('src', e.target.result);
        fileName.textContent = input.files[0].name;
        !fileResult.classList.contains('show') && fileResult.classList.add('show');

        progress.classList.remove('show');
        bar.style.width = 0;
      }

      reader.readAsDataURL(input.files[0]);
    }
  }

  const onFileClear = () => {
    fileInput.value = '';

    if(!/safari/i.test(navigator.userAgent)){
      fileInput.type = '';
      fileInput.type = 'file';
    }

    fileResult.classList.remove('show');
    fileName.textContent = '';
    fileImg.removeAttribute('src');
  }

  const onFileChange = (evt) => {
    readUrl(evt.target);
    console.log(evt.target);
  }

  emailInput.addEventListener('focus', onTextFocus);
  emailInput.addEventListener('blur', onTextBlur);
  emailInput.addEventListener('input', onTextInput);

  brandInput.addEventListener('focus', onTextFocus);
  brandInput.addEventListener('blur', onTextBlur);
  brandInput.addEventListener('input', onTextInput);

  modelInput.addEventListener('focus', onTextFocus);
  modelInput.addEventListener('blur', onTextBlur);
  modelInput.addEventListener('input', onTextInput);

  fileInput.addEventListener('change', onFileChange);
  fileClear.addEventListener('click', onFileClear);
  // textInputs.forEach((input, idx) => {
  //   input.addEventListener('focus', () => {
  //     addClassName(textLabels[idx], 'fill');

  //     if (input.value === '') {
  //       addClassName(input, 'mask');
  //     }
  //   });

  //   input.addEventListener('blur', (evt) => {
  //     if (!evt.target.value) {
  //       removeClassName(textLabels[idx], 'fill');
  //     }

  //     removeClassName(input, 'mask');
  //   });

  //   input.addEventListener('input', () => {
  //     if (input.value === '') {
  //       addClassName(input, 'mask');
  //     }

  //     if (input.value !== '') {
  //       removeClassName(input, 'mask');
  //     }
  //   })
  // })
})();
