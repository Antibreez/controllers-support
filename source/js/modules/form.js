(function () {
  const form = document.querySelector('.add-model__form');

  const emailInput = document.querySelector("input[name='email']");
  const emailError = document.querySelector('.add-model__email-error');

  const brandInput = document.querySelector("input[name='brand']");
  const brandError = document.querySelector('.add-model__brand-error');

  const modelInput = document.querySelector("input[name='model']");
  const modelError = document.querySelector('.add-model__model-error');

  const fileInput = document.querySelector("input[type='file']");

  const checkbox = document.querySelector('.add-model__agreement-input');

  const submit = document.querySelector('.add-model__submit');

  const progress = document.querySelector('.add-model__file-progress');
  const bar = document.querySelector('.add-model__bar-current');

  const fileLabel = document.querySelector('.add-model__file-label');
  const fileDropArea = document.querySelector('.add-model__file-wrap');

  const fileResult = document.querySelector('.add-model__file-result');
  const fileImg = document.querySelector('.add-model__file-image');
  const fileName = document.querySelector('.add-model__file-name');
  const fileClear = document.querySelector('.add-model__file-close');

  if (!emailInput) {
    return;
  }

  // Сбрасываем стандартные события при перетаскивании файла

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    fileDropArea.addEventListener(eventName, preventDefaults, false)
  });

  function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
  };

  // Добавляем стили при перетаскивании файла над нужной областью

  ['dragenter', 'dragover'].forEach(eventName => {
    fileDropArea.addEventListener(eventName, highlight, false)
  });

  ['dragleave', 'drop'].forEach(eventName => {
    fileDropArea.addEventListener(eventName, unhighlight, false)
  })

  function highlight(e) {
    fileLabel.classList.add('highlight');
  };

  function unhighlight(e) {
    fileLabel.classList.remove('highlight');
  };

  //

  fileDropArea.addEventListener('drop', handleDrop, false)

  function handleDrop(e) {
    let dt = e.dataTransfer
    let files = dt.files

    if (fileInput.files && fileInput.files[0]) {
      fileInput.value = '';

      if(!/safari/i.test(navigator.userAgent)){
        fileInput.type = '';
        fileInput.type = 'file';
      }

      fileResult.classList.remove('show');
      fileName.textContent = '';
      fileImg.removeAttribute('src');
    }

    fileInput.files = files;
    onFileChange();

    //handleFiles(files)
  };

  function preventDefaults (e) {
    e.preventDefault()
    e.stopPropagation()
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

  const enableButton = () => {
    submit.hasAttribute('disabled') && submit.removeAttribute('disabled');
  };

  const disableButton = () => {
    !submit.hasAttribute('disabled') && submit.setAttribute('disabled', '');
  };

  const isFormFilled = () => {
    return emailInput.validity.valid
      && brandInput.value !== ''
      && modelInput.value !== ''
      && checkbox.checked
  };

  const checkForm = () => {
    if (isFormFilled()) {
      enableButton();
    } else {
      disableButton();
    }
  };

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

  const onEmailInput = (evt) => {
    const input = evt.target;

    // if (input.value === '') {
    //   addClassName(input, 'mask');
    //   addClassName(input, 'error');
    // }

    if (!emailInput.validity.valid) {
      addClassName(emailError, 'show');
      addClassName(emailInput, 'error');
    }

    if (emailInput.validity.valid) {
      removeClassName(input, 'error');
      removeClassName(emailError, 'show');
    }

    if (input.value === '') {
      addClassName(input, 'mask');
    }

    if (input.value !== '') {
      removeClassName(input, 'mask');
    }

    checkForm();
  }

  const onBrandInput = (evt) => {
    const input = evt.target;

    if (input.value === '') {
      addClassName(input, 'mask');
      addClassName(input, 'error');
      addClassName(brandError, 'show');
    }

    if (input.value !== '') {
      removeClassName(input, 'mask');
      removeClassName(input, 'error');
      removeClassName(brandError, 'show');
    }

    checkForm();
  }

  const onModelInput = (evt) => {
    const input = evt.target;

    if (input.value === '') {
      addClassName(input, 'mask');
      addClassName(input, 'error');
      addClassName(modelError, 'show');
    }

    if (input.value !== '') {
      removeClassName(input, 'mask');
      removeClassName(input, 'error');
      removeClassName(modelError, 'show');
    }

    checkForm();
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

  const onFileChange = () => {
    readUrl(fileInput);
  }

  const onCheckboxClick = () => {
    !checkbox.checked
      ? addClassName(checkbox, 'error')
      : removeClassName(checkbox, 'error');

    checkForm();
  }

  const onSubmit = (evt) => {
    evt.preventDefault();

    form.submit();
  }

  emailInput.addEventListener('focus', onTextFocus);
  emailInput.addEventListener('blur', onTextBlur);
  emailInput.addEventListener('input', onEmailInput);

  brandInput.addEventListener('focus', onTextFocus);
  brandInput.addEventListener('blur', onTextBlur);
  brandInput.addEventListener('input', onBrandInput);

  modelInput.addEventListener('focus', onTextFocus);
  modelInput.addEventListener('blur', onTextBlur);
  modelInput.addEventListener('input', onModelInput);

  fileInput.addEventListener('change', onFileChange);
  fileClear.addEventListener('click', onFileClear);

  checkbox.addEventListener('click', onCheckboxClick);

  submit.addEventListener('click', onSubmit);
})();
