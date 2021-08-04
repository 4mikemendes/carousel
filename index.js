const slides = document.getElementsByClassName('carousel-item');

let slidePosition = 0;
const totalSlides = slides.length;
document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide)
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide)

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}

function moveToNextSlide() {
  hideAllSlides()
 if (slidePosition === totalSlides - 1) {
  slidePosition = 0;
 }else {
  slidePosition++;
 }
  slides[slidePosition].classList.add("carousel-item-visible");

}

function moveToPrevSlide() {
  hideAllSlides()
 if (slidePosition === totalSlides + 1) {
  slidePosition = 0;
 }else {
  slidePosition++;
 }
  slides[slidePosition].classList.add("carousel-item-visible");

}


/*
    Smooth transitions
    - When a new slide appears that has the class name 'carousel-item-visible'
    we want to trigger an animation...

    1) Create a new '@keyframes' at the bottom of this file called 'fadeVisibility'
    - kind of like a JS function! '@keyframes fadeVisibility {}'
    2) Keyframes work in steps, so 0-100 on a range. Each step you supply changes
    the animation sequence, e.g. 0% could be hidden and have an opacity of 0, and
    100% could be showing the item by having an opacity of 1
    3) Our first keyframe step would be '0%' which sets the opacity to 0, remember
    that '0%' on our sequence step is not like a regular property/values, you have
    to use curly braces and then set your values inside there!
    4) Our second keyframe step within 'fadeVisibility' would be '100%', which
    sets the opacity to 1
    5) Add this keyframe animation to 'carousel-item-visible' by using the property
    'animation' and pass our keyframes, those keyframes being 'fadeVisibility'
    7) Lastly after we have added our property and value to 'carousel-item-visible',
    we need to pass a time value (i'm going to be using seconds), so after
    'animation: fadeVisibility' pass a time value. I'm going to use 0.5s -
    which should look like this: 'animation: fadeVisibility 0.5s'

    Info: So from 0% - 100% in our keyframes we wait 0.5 seconds and go from
    an opacity of 0, to an opacity of 1!

    More info: https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
*/

