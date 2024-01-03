function showFirstSlide() {
    document.getElementsByClassName('slide-00')[0].style.transition = 'transform 2s ease-out';
    document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(0px)';
    document.getElementsByClassName('slide-01')[0].style.transition = '';
    document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(1440px)';
    document.getElementsByClassName('slide-02')[0].style.transition = '';
    document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
    document.getElementsByClassName('slide-03')[0].style.transition = '';
    document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(-1440px)';
  
    document.getElementsByClassName('slider-dot-00')[0].style.background = '#E80000';
    document.getElementsByClassName('slider-dot-01')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-02')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-03')[0].style.background = '#E8C300';
  }
  
  function showSecondSlide() {
    document.getElementsByClassName('slide-00')[0].style.transition = 'transform 2s ease-out';
    document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(-1440px)';
    document.getElementsByClassName('slide-01')[0].style.transition = 'transform 2s ease-out';
    document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(0px)';
    document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(1440px)';
    document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
  
    document.getElementsByClassName('slider-dot-00')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-01')[0].style.background = '#E80000';
    document.getElementsByClassName('slider-dot-02')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-03')[0].style.background = '#E8C300';
  }
  
  function showThreeSlide() {
    document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(-1440px)';
    document.getElementsByClassName('slide-01')[0].style.transition = 'transform 2s ease-out';
    document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(-1440px)';
    document.getElementsByClassName('slide-02')[0].style.transition = 'transform 2s ease-out';
    document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(0px)';
    document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(1440px)';
  
    document.getElementsByClassName('slider-dot-00')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-01')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-02')[0].style.background = '#E80000';
    document.getElementsByClassName('slider-dot-03')[0].style.background = '#E8C300';
  }
  
  function showQuadSlide() {
    document.getElementsByClassName('slide-00')[0].style.transform = 'translateX(1440px)';
    document.getElementsByClassName('slide-00')[0].style.transition = '';
    document.getElementsByClassName('slide-01')[0].style.transform = 'translateX(-1440px)';
    document.getElementsByClassName('slide-02')[0].style.transition = 'transform 2s ease-out';
    document.getElementsByClassName('slide-02')[0].style.transform = 'translateX(-1440px)';
    document.getElementsByClassName('slide-03')[0].style.transition = 'transform 2s ease-out';
    document.getElementsByClassName('slide-03')[0].style.transform = 'translateX(0px)';
  
    document.getElementsByClassName('slider-dot-00')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-01')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-02')[0].style.background = '#E8C300';
    document.getElementsByClassName('slider-dot-03')[0].style.background = '#E80000';
  }
  
  let currentSlide = 0;
  function changeSlide() {
      if (currentSlide == 0) {
        showFirstSlide();
      }
  
      if (currentSlide == 1) {
        showSecondSlide();
      }
  
      if (currentSlide == 2) {
        showThreeSlide();
      }
  
      if (currentSlide == 3) {
        showQuadSlide();
      }
  
      currentSlide += 1;
        if (currentSlide == 4) {
          currentSlide = 0;
      }
  }
  
  let timerId = setInterval(changeSlide, 3500);
  
  for (button of document.querySelectorAll('.slider-dots__common')) {
    button.addEventListener('click', function(event) {
      clearInterval(timerId);
      timerId = setInterval(changeSlide, 3500);
  
      switch (event.target.className) {
        case 'slider-dot-00':
            currentSlide = 0;
            showFirstSlide();
        break;
        case 'slider-dot-01':
            currentSlide = 1;
            showSecondSlide();
        break;
        case 'slider-dot-02':
           currentSlide = 2;
           showThreeSlide();
        break;
        case 'slider-dot-03':
           currentSlide = 3;
           showQuadSlide();
        break;
        }
    });
  }