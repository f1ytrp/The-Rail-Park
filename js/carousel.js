//Carousel

const buttons = document.querySelectorAll("[data-carousel-button]");
const images = document.querySelectorAll(".carousel-image");
const heroPara = document.querySelector("[data-carousel-text]");

const heroTexts = [
  {
    heading: "Phase One is free & open daily",
    para: "Plan your visit →"
  },
  {
    heading: "Turning historic tracks into an unparalleled park.",
    para: "See the full vision →"
  }
];

let currentIndex = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const direction = button.dataset.carouselButton === "next" ? 1 : -1;
    const oldIndex = currentIndex;
    const newIndex = (currentIndex + direction + images.length) % images.length;

    const oldImage = images[oldIndex];
    const newImage = images[newIndex];

    oldImage.classList.add("arc-exit");

    oldImage.addEventListener("animationend", function handler() {
      oldImage.classList.remove("arc-exit", "show");
      oldImage.removeAttribute("data-active");

      newImage.classList.add("show", "arc-enter");
      newImage.setAttribute("data-active", "");

      updateHeroText(newIndex);

      newImage.addEventListener("animationend", function enterHandler() {
        newImage.classList.remove("arc-enter");
        newImage.removeEventListener("animationend", enterHandler);
      });

      oldImage.removeEventListener("animationend", handler);
    });

    currentIndex = newIndex;
  });
});

function updateHeroText(index) {
  const { heading, para } = heroTexts[index];
  heroPara.innerHTML = `
    <h3>${heading}</h3>
    <p>${para}</p>
  `;
}



// Page Loading Aniamtion

window.addEventListener("load", () => {
  const initialImage = document.querySelector(".carousel-image.show");
  initialImage.classList.remove("loading-hidden");
  initialImage.classList.add("load-arc-enter");

  initialImage.addEventListener("animationend", function handler() {
    initialImage.classList.remove("load-arc-enter");
    initialImage.removeEventListener("animationend", handler);
  });
});



window.addEventListener("load", () => {
  const therail = document.querySelector(".therail");
  const park = document.querySelector(".park");

  requestAnimationFrame(() => {
    therail.classList.add("animate-in");
    park.classList.add("animate-in");
  });
});





// Hovering over Video

const sectionMain = document.querySelector(".noble-entrance");
const image = document.querySelector(".noble-img");
const video3 = document.querySelector(".noble-video");

sectionMain.addEventListener("mouseenter", () => {
    image.style.display = "none";
    video3.style.display = "block";
    video3.play();
});

sectionMain.addEventListener("mouseleave", () => {
    video3.pause();
    video3.currentTime = 0;
    video3.style.display = "none";
    image.style.display = "block";
});


const sectionMain2 = document.querySelector(".callowhill");
const image2 = document.querySelector(".callow-img");
const video2 = document.querySelector(".callow-video");

sectionMain2.addEventListener("mouseenter", () => {
    image2.style.display = "none";
    video2.style.display = "block";
    video2.play();
});

sectionMain2.addEventListener("mouseleave", () => {
    video2.pause();
    video2.currentTime = 0;
    video2.style.display = "none";
    image2.style.display = "block";
});
