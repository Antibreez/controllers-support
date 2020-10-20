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
