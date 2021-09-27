// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   console.log("Scrolled" + Math.round(document.documentElement.scrollTop));
// }
const windowHeight = window.innerHeight;
document.querySelector(".maincontent").onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  console.log(
    "Scrolled" +
      Math.round(document.querySelector(".maincontent").scrollTop) +
      "\n" +
      windowHeight
  );
}

// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({ triggerElement: "#text" })
//   // trigger a velocity opaticy animation
//   .setVelocity("#animate", { opacity: 0 }, { duration: 400 })
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
