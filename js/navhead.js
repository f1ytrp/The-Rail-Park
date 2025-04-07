//navbar
const menuBtn = document.getElementById("menuBtn");
const hamburgerOverlay = document.getElementById("hamburgerOverlay");
const navBar = document.getElementById("navbar");

let isOpen = false;

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
        hamburgerOverlay.style.display = "block";
        document.body.style.overflow = "hidden";

        navBar.classList.add("fixed");
        navBar.classList.add("hide-elements");

        menuBtn.classList.add("open");
    } else {
        hamburgerOverlay.style.display = "none";
        document.body.style.overflow = "auto";

        navBar.classList.remove("fixed");
        navBar.classList.remove("hide-elements");

        menuBtn.classList.remove("open");
    }
});



const navbar = document.getElementById("navbar");
const navSpacer = document.getElementById("nav-spacer");

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop && currentScroll > 100) {
      navbar.classList.add("hidden");
  } else {
      navbar.classList.remove("hidden");
      navbar.classList.add("fixed");
      navSpacer.style.height = navbar.offsetHeight + "px";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});




//Parallax Effect
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const speed = 0.2;
  document.querySelector(".hero-text").style.transform = `translateY(${scrollY * speed}px)`;
});


window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const speed = -0.06;

  if (window.innerWidth >= 740) {
    document.querySelector(".viaduct-img").style.transform = `translateY(${scrollY * speed}px)`;
    document.querySelector(".thecut-img").style.transform = `translateY(${scrollY * speed}px)`;
    document.querySelector(".tunnel-img").style.transform = `translateY(${scrollY * speed}px)`;
  } else {
    document.querySelector(".viaduct-img").style.transform = `translateY(0px)`;
    document.querySelector(".thecut-img").style.transform = `translateY(0px)`;
    document.querySelector(".tunnel-img").style.transform = `translateY(0px)`;
  }
});
