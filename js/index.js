let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let navLinks = document.querySelectorAll(".nav-links");

navBarToggle.addEventListener("click", function () {
  mainNav.classList.toggle("activeNav");
});
navLinks.forEach((el) =>
  el.addEventListener("click", (event) => {
    if (mainNav.classList.contains("activeNav")) {
      setTimeout(() => {
        mainNav.classList.toggle("activeNav");
      }, 300);
    }
  })
);

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
};

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    cover: true,
    focus: "center",
    
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
