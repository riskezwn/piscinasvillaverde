let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("activeNav");
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    cover: true,
    focus: "center",
    width: "auto",
    heightRatio: 1,
    autoplay: true,
    type: "loop",
    pagination: false,
  });
  splide.on("autoplay:playing", function (rate) {
    // 0-1
  });

  splide.mount();
});
