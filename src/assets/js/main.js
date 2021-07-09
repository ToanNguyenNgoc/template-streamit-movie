function bellRing(){
    document.querySelector('.nav-right__list-notifi').classList.toggle('notifi-bell-ring')
}
// setInterval(()=>{
//     bellRing();
// }, 1000)

window.addEventListener('scroll', function(){
    let navScroll= document.querySelector('.nav');
    let backToTop= document.querySelector('.back-top');
    let windowPosition = window.scrollY > 0;
    navScroll.classList.toggle('nav-bg-c', windowPosition);
    backToTop.classList.toggle('back-top-active', windowPosition);
})


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// Mobile
function showMenuNav(){
    document.querySelector('.nav-center').classList.toggle('nav-center-show');
}

function showUserNav(){
  document.querySelector('.nav-right__list').classList.toggle('nav-right-active')
}
//intro start
let intro= document.querySelector('.intro');
let logo= document.querySelector('.logo-header');
let logoSpan= document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        })
    })
})
var hideIntro= function(){
  document.querySelector('.intro').classList.add('hide');
}
setTimeout(function(){
  hideIntro();
}, 3200)