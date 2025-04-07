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