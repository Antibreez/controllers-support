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

  if (input.value) {
    hide();
  };

  input.addEventListener('blur', onBlur);
})();

(function () {
  const modelLinks = document.querySelectorAll('.model__link');
  const imageContainers = document.querySelectorAll('.model__image-container');

  if (!modelLinks[0]) {
    return;
  }

  const initSwiper = () => {
    return new Swiper('.model__swiper-container', {
      pagination: {
        el: '.model__swiper-container .model__pagination',
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

  imageContainers.forEach((container) => {
    const images = container.querySelectorAll('.model__image');

    if (images.length > 1) {
      container.classList.add('model__swiper-container');
    }
  });

  initSwiper();
})();

(function () {
  const wireButtons = document.querySelectorAll('.device__model-item');
  const popups = document.querySelectorAll('.device__wire-popup-mobile');
  const closeButtons = document.querySelectorAll('.device__wire-popup-close');
  const overlay = document.querySelector('.device__wire-popup-overlay');

  if (!wireButtons[0]) {
    return;
  }

  const closeAnyPopup = () => {
    popups.forEach((popup) => {
      if (popup.classList.contains('js--show')) {
        popup.classList.remove('js--show');
      }
    })
  };

  wireButtons.forEach((wireButton, idx) => {
    wireButton.addEventListener('click', (evt) => {
      if (wireButton.querySelector('.device__model-not-supported')) {
        return;
      }

      if (!evt.target.classList.contains('device__wire-popup-close')) {
        popups[idx].classList.add('js--show');
        overlay.classList.add('js--show');
      }
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

(function () {
  if (!document.getElementById('animation')) {
    return;
  }

  lottie.loadAnimation({
    container: document.getElementById('animation'), // the dom element that will contain the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json' // the path to the animation json
  });
})();

'use strict';

(function () {
  var ReqUrl = {
    GET: 'https://split.daichicloud.ru/brands/all',
    //POST: 'https://js.dump.academy/kekstagram'
  };

  var ReqMethod = {
    GET: 'GET',
    POST: 'POST'
  };

  var ReqStatus = {
    OK: 200,
    MULTIPLE_CHOICES: 300,
  };

  var TIMEOUT = 10000;

  var isErrorStatus = function (xhr) {
    return xhr.status < ReqStatus.OK
      || xhr.status > ReqStatus.MULTIPLE_CHOICES;
  };

  var createRequest = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.timeout = TIMEOUT;
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (isErrorStatus(xhr)) {
        onError('Данные не загрузились. Причина: ' + xhr.status + ' ' + xhr.statusText);
        return;
      }

      onLoad(xhr.response);
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    return xhr;
  };

  var removeElement = function (element) {
    element.remove();
  };

  var onAnyError = function (message) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
    window.setTimeout(removeElement, 2000, node);
  };

  window.backend = {
    load: function (onLoad, onError) {
      var req = createRequest(onLoad, onError || onAnyError);
      req.open(ReqMethod.GET, ReqUrl.GET);
      req.send();
    },

    // save: function (data, onLoad, onError) {
    //   var req = createRequest(onLoad, onError);
    //   req.open(ReqMethod.POST, ReqUrl.POST);
    //   req.send(data);
    // }
  };
})();





// $(document).ready(function() {
//   // $('.model-choice__brand-select').select2({
//   //   minimumResultsForSearch: -1,
//   // });

//   // $('.model-choice__series-select').select2({
//   //   minimumResultsForSearch: -1,
//   // });

//   function makeSelect(element) {
//     $(element).select2({
//       minimumResultsForSearch: -1,
//     });
//   };




//   window.makeSelect = makeSelect;

//   console.log(window.makeSelect);

// });


(function($) {
  // function makeSelect(elementClass) {
  //   $(elementClass).select2({
  //     minimumResultsForSearch: -1,
  //   });
  // };

  // window.makeSelect = makeSelect;
})(jQuery);

(function () {
  // const brandSelect = document.querySelector('.model-choice__brand-select');
  // const seriesSelects = document.querySelectorAll('.model-choice__series-select');
  // const hidingClass = 'select2-hidden-accessible';

  // let idx = -1;

  // const removeClass = (item) => {
  //   item.classList.remove(hidingClass);
  //   item.removeAttribute('aria-hidden');
  //   item.removeAttribute('tabindex');
  // };

  // const addClass = (item) => {
  //   item.classList.add(hidingClass);
  //   item.setAttribute('aria-hedden', 'true');
  //   item.setAttribute('tabindex', '-1');
  // };

  // const isMobile = () => {
  //   return  window.matchMedia('(max-width: 479px)').matches;
  // };

  // let isOutOfMobile = !isMobile;

  // const onResize = () => {
  //   if (isMobile() && isOutOfMobile) {
  //     isOutOfMobile = false;

  //     removeClass(brandSelect);

  //     if (idx !== -1) {
  //       removeClass(seriesSelects[idx]);
  //     }

  //     addEventListeners();
  //   }

  //   if (!isMobile() && !isOutOfMobile) {
  //     isOutOfMobile = true;

  //     addClass(brandSelect);

  //     if (idx !== -1) {
  //       addClass(seriesSelects[idx]);
  //     }

  //     removeEventListeners();
  //   }
  // }

  // const addEventListeners = () => {
  //   brandSelect.addEventListener('change', onBrandChange);
  // };

  // const removeEventListeners = () => {
  //   brandSelect.removeEventListener('change', onBrandChange);
  // };

  // const onBrandChange = (evt) => {
  //   if (idx !== -1) {
  //     addClass(seriesSelects[idx]);
  //   }

  //   idx = evt.target.selectedIndex;

  //   removeClass(seriesSelects[idx]);
  // };

  

  // window.Resize = {
  //   addListener: () => {
  //     window.addEventListener('resize', onResize);
  //   },

  //   init: () => {
  //     if (isMobile()) {
  //       removeClass(brandSelect);
  //       addEventListeners();
  //     }
  //   }
  // };

  
})();

(function () {
  // const splits = [
  //   {
  //     "id":7,
  //     "title":"Axioma",
  //     "series":[
  //       {
  //         "id":63,
  //         "title":"ASX_A"
  //       },
  //       {
  //         "id":62,
  //         "title":"ASX_AZ"
  //       }
  //     ]
  //   },
  //   {"id":6,"title":"Daichi","series":[{"id":45,"title":"Carbon DA_DVQ"},{"id":46,"title":"Everest DA_EVQ"},{"id":43,"title":"Peak DA_AVQS"},{"id":42,"title":"X-treme Peak DA_AVQS"}]},
  //   {"id":1,"title":"Daikin","series":[{"id":11,"title":"Comfora FTX-J\/GV"},{"id":26,"title":"Comfora FTXP-K3"},{"id":27,"title":"Comfora FTXP-L"},{"id":28,"title":"Comfora FTXP-M"},{"id":23,"title":"Emura FTXG-L"},{"id":18,"title":"Emura FTXJ-M"},{"id":20,"title":"FLXS-B"},{"id":16,"title":"FTXB-B"},{"id":65,"title":"FTXS-E"},{"id":64,"title":"FTXS-J\/G"},{"id":21,"title":"FVXM-F"},{"id":22,"title":"FVXS-F"},{"id":19,"title":"Nexura FVXG-K"},{"id":24,"title":"Perfera FTXM-N"},{"id":25,"title":"Perfera FTXS-K"},{"id":1,"title":"Sensira FTXB-C"}]},
  //   {"id":2,"title":"Kentatsu","series":[{"id":49,"title":"Bravo  KSGB_HFAN"},{"id":50,"title":"Bravo  KSGBA_HZAN"},{"id":56,"title":"KMGBA_HZAN"},{"id":57,"title":"KMGBB_HZAN"},{"id":52,"title":"Team  KSGT_HZAN"},{"id":47,"title":"Titan Genesis KSGX"},{"id":51,"title":"Turin KSGU_HZAN"}]},
  //   {"id":8,"title":"Midea","series":[{"id":61,"title":"Blanc MSMA"},{"id":60,"title":"Blanc MSMA ERP (MA)"},{"id":59,"title":"Mission MSMB (MB)"},{"id":58,"title":"Ultimate Comfort MSMT (MT)"}]}];


  //let seriesName = '';
  //let brandName = '';

  const brandList = document.querySelector('.model-choice__brand-list');
  const brandButton = document.querySelector('.model-choice__brand-choice');
  //const brandSelect = document.querySelector('.model-choice__select-brand');

  if (!brandList) {
    return;
  }

  //let currentBrandIdx = -1;
  //let currentOptionIdx = -1;

  //const brandSelect = document.querySelector('.model-choice__brand-select');
  //const seriesWrapper = document.querySelector('.model-choice__series-wrapper');
  //const seriesTemplate = document.querySelector('#series').content.querySelector('.model-choice__series-select');

  //const link = document.querySelector('.model-choice__link');

  // const getHref = (series) => {
  //   let href = '';

  //   PAGES.forEach((page) => {
  //     if (href === '') {
  //       if (series.toLowerCase().indexOf(page) !== -1) {
  //         href = page;
  //       }
  //     }
  //   });

  //   return href === '' ? '' : href + '.html';
  // };

  const onBrandClick = () => {
    if (!brandList.classList.contains('show')) {
      brandList.classList.add('show');
      brandButton.classList.add('opened');
      return;
    }

    if (brandList.classList.contains('show')) {
      brandList.classList.remove('show');
      brandButton.classList.remove('opened');
    }
    // jQuery('.model-choice__brand-list').mCustomScrollbar({
    //   setHeight: 189,
    //   autoHideScrollbar: false,
    //   theme: 'dark',
    //   mouseWheelPixels: 200,
    //   contentTouchScroll: true
    // });
  };

  // const onSeriesClick = () => {
  //   if (!seriesList.classList.contains('show')) {
  //     seriesList.classList.add('show');
  //     seriesButton.classList.add('opened');
  //     // console.log(seriesList.getBoundingClientRect().bottom - window.innerHeight);
  //     return;
  //   }

  //   if (seriesList.classList.contains('show')) {
  //     seriesList.classList.remove('show');
  //     seriesButton.classList.remove('opened');
  //   }
  // };

  const onOutsideClick = (evt) => {
    let target = evt.target;

    if (
      !target.classList.contains('model-choice__brand-choice')
      && !target.classList.contains('model-choice__brand-item')
      && !target.classList.contains('model-choice__brand-list')
      && brandList.classList.contains('show')
    ) {
      brandList.classList.remove('show');
      brandButton.classList.remove('opened');
    }

    // if (
    //   !target.classList.contains('model-choice__series-choice')
    //   && !target.classList.contains('model-choice__series-item')
    //   && !target.classList.contains('model-choice__series-list')
    //   && seriesList.classList.contains('show')
    // ) {
    //   seriesList.classList.remove('show');
    //   seriesButton.classList.remove('opened');
    // }
  };


    // let fragment = document.createDocumentFragment();
    // let i = 0;

    // arr.forEach((item) => {
    //   let node = document.createElement('li');
    //   node.textContent = item['title'];
    //   node.classList.add('model-choice__brand-item');
    //   node.setAttribute('data-id', i);
    //   i++;
    //   fragment.appendChild(node);

    //   // let seriesSelect = seriesTemplate.cloneNode(true);
    //   // seriesSelect.classList.add('hidden');
    //   // seriesSelect.setAttribute('name', item['title']);

    //   // item.series.forEach((serie) => {
    //   //   let node = document.createElement('option');
    //   //   node.setAttribute('value', serie['title']);
    //   //   node.textContent = serie['title'];
    //   //   seriesSelect.appendChild(node);
    //   // });

    //   // seriesWrapper.appendChild(seriesSelect);
    // });

    // brandList.appendChild(fragment);


    // let fragment1 = document.createDocumentFragment();
    // let j = 0;

    // arr.forEach((item) => {
    //   let node1 = document.createElement('option');
    //   node1.textContent = item['title'];
    //   node1.classList.add('model-choice__brand-option');
    //   node1.setAttribute('data-id', i);
    //   j++;
    //   fragment1.appendChild(node1);

    //   // let seriesSelect = seriesTemplate.cloneNode(true);
    //   // seriesSelect.classList.add('hidden');
    //   // seriesSelect.setAttribute('name', item['title']);

    //   // item.series.forEach((serie) => {
    //   //   let node = document.createElement('option');
    //   //   node.setAttribute('value', serie['title']);
    //   //   node.textContent = serie['title'];
    //   //   seriesSelect.appendChild(node);
    //   // });

    //   // seriesWrapper.appendChild(seriesSelect);
    // });

    // brandSelect.appendChild(fragment1);



    // const onBrandItemClick = (evt) => {
    //   let target = evt.target;
    //   let idx = +target.getAttribute('data-id');

    //   if (target.classList.contains('model-choice__brand-item')) {
    //     if (currentBrandIdx === idx) {
    //       brandList.classList.remove('show');
    //       brandButton.classList.remove('opened');
    //     }

    //     if (currentBrandIdx !== idx) {
    //       seriesList.innerHTML = '';

    //       seriesButton.textContent = 'Выбрать из списка';
    //       seriesButton.classList.remove('selected');

    //       let fragment = document.createDocumentFragment();
    //       let idx = +target.getAttribute('data-id');

    //       arr[idx].series.forEach((serie) => {
    //         let node = document.createElement('li');
    //         node.textContent = serie['title'];
    //         node.classList.add('model-choice__series-item');
    //         fragment.appendChild(node);
    //       });

    //       seriesList.appendChild(fragment);
    //       currentBrandIdx = idx;

    //       brandButton.textContent = target.textContent;
    //       brandName = target.textContent;
    //       if (!brandButton.classList.contains('selected')) {
    //         brandButton.classList.add('selected');
    //       }

    //       if (seriesButton.hasAttribute('disabled')) {
    //         seriesButton.removeAttribute('disabled');
    //       }

    //       brandList.classList.remove('show');
    //       brandButton.classList.remove('opened');

    //       link.classList.add('disabled');
    //       link.removeAttribute('href');
    //     }
    //   }
    // }

    // const onBrandChange = (evt) => {
    //   currentOptionIdx = evt.target.selectedIndex - 1;
    //   seriesSelect.innerHTML = '';

    //   seriesButton.textContent = 'Выбрать из списка';
    //   seriesButton.classList.remove('selected');

    //   let node = document.createElement('option');
    //   node.textContent = '';
    //   node.setAttribute('disabled', '');
    //   node.setAttribute('selected', '');
    //   node.style.display = 'none';

    //   seriesSelect.appendChild(node);

    //   let fragment = document.createDocumentFragment();

    //   if (seriesSelect.hasAttribute('disabled')) {
    //     seriesSelect.removeAttribute('disabled');
    //   }


    //   arr[currentOptionIdx].series.forEach((serie) => {
    //     let node = document.createElement('option');
    //     node.textContent = serie['title'];
    //     node.classList.add('model-choice__series-option');
    //     fragment.appendChild(node);
    //   });

    //   seriesSelect.appendChild(fragment);

    //   brandButton.textContent = evt.target.value;
    //   brandName = evt.target.value;
    //   if (!brandButton.classList.contains('selected')) {
    //     brandButton.classList.add('selected');
    //   }

    //   link.classList.add('disabled');
    //   link.removeAttribute('href');
    // }

    // const onSeriesItemClick = (evt) => {
    //   let target = evt.target;

    //   if (target.classList.contains('model-choice__series-item')) {
    //     seriesButton.textContent = target.textContent;
    //     if (!seriesButton.classList.contains('selected')) {
    //       seriesButton.classList.add('selected');
    //     }

    //     seriesList.classList.remove('show');
    //     seriesButton.classList.remove('opened');

    //     link.classList.remove('disabled');
    //     seriesName = target.textContent;
    //     link.setAttribute('href', getHref(seriesName));
    //   }
    // }

    // const onSeriesChange = (evt) => {
    //   seriesButton.textContent = evt.target.value;
    //   if (!seriesButton.classList.contains('selected')) {
    //     seriesButton.classList.add('selected');
    //   }

    //   link.classList.remove('disabled');
    //   seriesName = evt.target.value;
    //   link.setAttribute('href', getHref(seriesName));
    // }

    // const onLinkClick = (evt) => {
    //   evt.preventDefault();
    //   let href = evt.target.getAttribute('href');

    //   if (href === '') {
    //     alert('Инструкция по установке Wi-Fi контроллера для данной серии кондиционера в скором времени появится.');

    //     return;
    //   }

    //   document.location.href = href;
    // };

    //let splitsData = backend.load(getData);

    //brandSelect.appendChild(makeOptionNode(splits));
    //makeOptionNode(splits);
    //backend.load(makeOptionNode);


    // makeSelect(brandClass);
    // makeSelect(seriesClass);

    // jQuery(brandClass).select2('open');
    // jQuery(brandClass).select2('close');


    // const seriesSelects = document.querySelectorAll('.model-choice__series-select');


    // const hideSeries = () => {
    //   seriesSelects.forEach((select) => {
    //     if (!select.classList.contains('hidden')) {
    //       select.classList.add('hidden');
    //       select.removeAttribute('id');
    //     }
    //   })
    // };

    // const showSeries = (idx) => {
    //   seriesSelects[idx].classList.remove('hidden');
    //   seriesSelects[idx].setAttribute('id', 'series-select');
    // };

    // jQuery(brandClass).on('change', function (evt) {
    //   let idx = +jQuery('.model-choice__brand-select option:selected').attr('data-id');

    //   hideSeries();
    //   showSeries(idx + 1);

    //   jQuery('#series-select').select2('open');
    //   jQuery('#series-select').select2('close');

    //   jQuery('.model-choice__brand-select').addClass('selected');
    //   jQuery('.model-choice__series-select').removeClass('selected');
    // });

    // jQuery(seriesClass).on('change', function (evt) {
    //   if (link.classList.contains('disabled')) {
    //     link.classList.remove('disabled');
    //   }

    //   let value = jQuery(evt.target).children('option:selected').text();
    //   seriesName = value;


    //   link.setAttribute('href', seriesName);

    //   jQuery('.model-choice__series-select').addClass('selected');
    // });

    //Resize.init();
    //Resize.addListener();

    brandButton.addEventListener('click', onBrandClick);
    //seriesButton.addEventListener('click', onSeriesClick);
    // brandList.addEventListener('click', onBrandItemClick);
    // seriesList.addEventListener('click', onSeriesItemClick);
    // brandSelect.addEventListener('change', onBrandChange);
    // seriesSelect.addEventListener('change', onSeriesChange);
    // link.addEventListener('click', onLinkClick);
    document.addEventListener('mousedown', onOutsideClick);


  //backend.load(makeOptionNode);

})();

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
