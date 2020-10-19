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
