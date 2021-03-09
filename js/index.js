function showHideMenu() {
    var x = document.getElementById("links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function tapToHideMenu() {
   var x = document.getElementById("links");
   if (x.style.display === "block"); {
    x.style.display = "none";
   } 
}

var slideIndex = 0;
showSlides();

function showSlides() {
       var i;
       var slides = document.getElementsByClassName("sliderInstalaciones");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,8000);
}

function plusSlides() {
  var i;
  var slides = document.getElementsByClassName("sliderInstalaciones");
  for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
}