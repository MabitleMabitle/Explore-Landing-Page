const container = document.querySelector(".container");
const menuIcon = document.querySelector(".menu-icon");
const headingRight = document.querySelector(".main-heading-right");
const headingLeft = document.querySelector(".main-heading-left");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("toggle");
});

const responsiveDesign = () => {
  if (window.innerWidth <= 700) {
    headingRight.style.display = "none";
    headingLeft.textContent = "Explore";
  } else {
    headingRight.style.display = "block";
    headingLeft.textContent = "Exp";
  }
};

window.addEventListener("resize", () => {
  responsiveDesign();
});

responsiveDesign();
