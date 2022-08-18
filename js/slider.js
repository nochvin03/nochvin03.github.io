let slideNumber = 1;
const tags = ['HTML', 'CSS', 'JAVASCRIPT', 'SOME SIMPLE TG BOTS', 'I WORKS WELL IN MICROSOFT PROGRAMS, SUCH AS EXCEL, WORD AND POWERPOINT'];

const sliderImgs = document.querySelector('.slides__imgs');
const sliderImg = document.createElement('img');
sliderImgs.prepend(sliderImg);

const sliderText = document.querySelector('.slider__text');
const sliderCaption = document.createElement('p');
sliderText.prepend(sliderCaption);

slider(slideNumber);

function slider(n) {
   if (n == 1) {
      document.querySelector('.slider__btn_prev > img').style.opacity = '0.5';
   } else if (n == 2 || n ==3 || n == 4) {
      document.querySelector('.slider__btn_prev > img').style.opacity = '1';
      document.querySelector('.slider__btn_next > img').style.opacity = '1';
   } else {
      document.querySelector('.slider__btn_next > img').style.opacity = '0.5';
   }
   sliderImg.src = `./img/slide${n}.jpg`;
   
   sliderCaption.innerText = tags[n-1];
}

function prevSlide() {
   if (slideNumber != 1) {
      slideNumber -= 1;
      slider(slideNumber);
   }
}

function nextSlide() {
   if (slideNumber != 5) {
      slideNumber += 1;
      slider(slideNumber);
   }
}