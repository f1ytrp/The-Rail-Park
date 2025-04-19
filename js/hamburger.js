//Hamburger Menu

const menuBtn = document.getElementById("menuBtn");
const menuBtnOverlay = document.getElementById("menuBtnOverlay");
const hamburgerOverlay = document.getElementById("hamburgerOverlay");
const navBar = document.getElementById("navbar");
const closeBtn = document.getElementById("closeBtn");
const menuBtnMobile = document.getElementById("menuBtnMobile");

const groups = [
  document.querySelector(".hamburger1"),
  document.querySelector(".hamburger2"),
  document.querySelector(".hamburger3"),
  document.querySelector(".hamburger4"),
];

let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen;

  if (isOpen) {
    hamburgerOverlay.style.display = "block";
    document.body.style.overflow = "hidden";

    /* navBar.classList.add("fixed", "hide-elements"); */
    navBar.classList.add("hide-elements");

    menuBtn.classList.add("open");

    setTimeout(() => {
      menuBtnOverlay.classList.add("open");
    }, 30);

    setTimeout(() => {
      menuBtnMobile.classList.add("open");
    }, 30);
  
  } else {
    hamburgerOverlay.style.display = "none";
    document.body.style.overflow = "auto";

    /* navBar.classList.remove("fixed", "hide-elements"); */
    navBar.classList.remove("hide-elements");

    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");

    menuBtn.classList.remove("open");
    menuBtnOverlay.classList.remove("open");
    menuBtnMobile.classList.remove("open");
  }

  groups.forEach((group, i) => {
    if (!group) return;
    group.classList.remove("animate-in", `delay-${i + 1}`, "hamburger-animate");

    if (isOpen) {
      group.classList.add("hamburger-animate");
      void group.offsetWidth;
      group.classList.add("animate-in", `delay-${i + 1}`);
    }
  });
}
  

menuBtn.addEventListener("click", toggleMenu);
menuBtnOverlay.addEventListener("click", toggleMenu);
menuBtnMobile.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", () => {
  if (isOpen) toggleMenu();
});


window.addEventListener("DOMContentLoaded", () => {
  hamburgerOverlay.style.display = "none";
  document.body.style.overflow = "auto";

  navBar.classList.remove("fixed");
  navBar.classList.remove("hide-elements");
  menuBtn.classList.remove("open");
  menuBtnOverlay.classList.remove("open");

  isOpen = false;
});