let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("active");
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("sliderInstalaciones");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000);
}

function plusSlides() {
  var i;
  var slides = document.getElementsByClassName("sliderInstalaciones");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    cover: true,
    heightRatio: 0.3,
    height: "500px",
    autoplay: true,
    type: "loop",
    pagination: false,
  });
  splide.on("autoplay:playing", function (rate) {
    // 0-1
  });

  splide.mount();
});
