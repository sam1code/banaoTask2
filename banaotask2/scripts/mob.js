const slide = document.querySelector(".maincontent");
const divs = document.querySelectorAll(".pages");

const yobro = document.querySelector(".yobro");

let counter = 1;
const size = window.innerWidth;

slide.style.transfrom = 'translateX("-size* counter)+ "px)';
yobro.addEventListener("click", () => {
  slide.style.transition = "transform 0.4s ease-in-out";
});
