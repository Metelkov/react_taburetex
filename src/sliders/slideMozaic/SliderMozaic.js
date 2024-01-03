import Background01 from "../../pic/001.jpg";
import Background02 from "../../pic/002.jpg";
import Background03 from "../../pic/003.jpg";
import Background04 from "../../pic/004.jpg";
let allPic = 4;
let picStart = 1;
let backgroundPicPath = "";

export const ChangeSlide = (children, props) => {
  picStart !== allPic ? picStart+=1 : picStart = 1;
  //let Background = "Background0"+picStart+".jpg";
  //let Background = "../pic/00"+picStart+".jpg";
  //console.log("picStart= "+picStart);
  if (picStart===1) {
    backgroundPicPath=Background01;
    return backgroundPicPath;
  };
  
  if (picStart===2) {
    backgroundPicPath=Background02;
    return backgroundPicPath;
  };
  
  if (picStart===3) {
    backgroundPicPath=Background03;
    return backgroundPicPath;
  };
  if (picStart===4) {
    backgroundPicPath=Background04;
    return backgroundPicPath;
  };
  
};

setInterval(ChangeSlide, 2000);



/*
export const sliderMozaic = (() => {

})();
*/

/*

const slides = [
    document.getElementsByClassName('slide-00')[0],
    document.getElementsByClassName('slide-01')[0],
    document.getElementsByClassName('slide-02')[0],
    document.getElementsByClassName('slide-03')[0],
  ];
  
  function showSlideMosaic(slideNumber) {
    slides.forEach(function(slide, index) {
      slide.style.transition = 'transform 1s ease-out';
      slide.style.transform = 'translateX(calc(1440px * ' + (index - slideNumber) + '))';
    });
  }
  
  let currentSlide = 0;
  function changeSlide() {
    currentSlide++;
    showSlide(currentSlide % slides.length);
  
  }
  
   setInterval(changeSlide, 2000);
   */