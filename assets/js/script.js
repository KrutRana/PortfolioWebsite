'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const rotatingWords = [
    "Python",
    "AI & Machine Learning",
    "Data Analytics",
    "Business Analytics",
    "UI/UX Designs"
  ];

  let currentIndex = 0;
  const textElement = document.getElementById("rotating-text");

  function showNextWord() {
    textElement.style.opacity = 0;

    setTimeout(() => {
      textElement.textContent = rotatingWords[currentIndex];
      textElement.style.opacity = 1;
      currentIndex = (currentIndex + 1) % rotatingWords.length;
    }, 500); // wait for opacity transition
  }

  // Initial display
  showNextWord();

  // Change word every 2 seconds
  setInterval(showNextWord, 2500);

