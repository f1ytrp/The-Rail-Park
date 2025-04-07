//Hamburger Menu


const closeBtn = document.getElementById("closeBtn");
const closeBtn2 = document.getElementById("closeBtn2");
const content = document.getElementById("content");

const groups = [
  document.querySelector(".hamburger1"),
  document.querySelector(".hamburger2"),
  document.querySelector(".hamburger3"),
  document.querySelector(".hamburger4"),
];

menuBtn.addEventListener("click", () => {
  hamburgerOverlay.style.display = "block";
  if (content) content.style.display = "none";
  document.body.style.overflow = "hidden";

  menuBtn.classList.add("open");

  groups.forEach((group, i) => {
    if (!group) return;

    group.classList.remove("animate-in", `delay-${i + 1}`);
    group.classList.add("hamburger-animate");

    void group.offsetWidth;

    group.classList.add("animate-in", `delay-${i + 1}`);
  });
});

closeBtn.addEventListener("click", () => {
  hamburgerOverlay.style.display = "none";
  if (content) content.style.display = "block";
  document.body.style.overflow = "auto";

  menuBtn.classList.remove("open");

  groups.forEach((group, i) => {
    if (!group) return;
    group.classList.remove("animate-in", `delay-${i + 1}`, "hamburger-animate");
  });
});

closeBtn2.addEventListener("click", () => {
  hamburgerOverlay.style.display = "none";
  if (content) content.style.display = "block";
  document.body.style.overflow = "auto";

  menuBtn.classList.remove("open");

  groups.forEach((group, i) => {
    if (!group) return;
    group.classList.remove("animate-in", `delay-${i + 1}`, "hamburger-animate");
  });
});


