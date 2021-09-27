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
  let scrolled = Math.round(document.querySelector(".maincontent").scrollTop);
  console.log("Scrolled" + scrolled + "\n" + windowHeight);
  if (scrolled >= 0 && scrolled < windowHeight - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#15233a";
    document.getElementById("text_2").style.backgroundColor = "#15233a";
    document.getElementById("img_2").style.backgroundColor = "#0E131C";
  }
  if (scrolled >= windowHeight - 10 && scrolled < windowHeight * 2 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#0E103A";
    document.getElementById("text_2").style.backgroundColor = "#0E103A";
    document.getElementById("img_2").style.backgroundColor = "#151648";
    document.getElementById("text_3").style.backgroundColor = "#0E103A";
    document.getElementById("img_3").style.backgroundColor = "#151648";
  }
  if (scrolled >= windowHeight * 2 - 10 && scrolled < windowHeight * 3 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#4E27CE";
    document.getElementById("text_3").style.backgroundColor = "#4E27CE";
    document.getElementById("img_3").style.backgroundColor = "#1D0363";
    document.getElementById("text_4").style.backgroundColor = "#4E27CE";
    document.getElementById("img_4").style.backgroundColor = "#1D0363";
  }
  if (scrolled >= windowHeight * 3 - 10 && scrolled < windowHeight * 4 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#4623BF";
    document.getElementById("text_4").style.backgroundColor = "#4623BF";
    document.getElementById("img_4").style.backgroundColor = "#CDCBCF";
    document.getElementById("text_5").style.backgroundColor = "#4623BF";
    document.getElementById("img_5").style.backgroundColor = "#CDCBCF";
  }
  if (scrolled >= windowHeight * 4 - 10 && scrolled < windowHeight * 5 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#124AA3";
    document.getElementById("text_5").style.backgroundColor = "#124AA3";
    document.getElementById("img_5").style.backgroundColor = "#2ECCDC";
    document.getElementById("text_6").style.backgroundColor = "#124AA3";
    document.getElementById("img_6").style.backgroundColor = "#2ECCDC";
    document.getElementById("img_6").style.backgroundImage = "#2ECCDC";
  }
  if (scrolled >= windowHeight * 5 - 10 && scrolled < windowHeight * 6 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#022A91";
    document.getElementById("text_6").style.backgroundColor = "#022A91";
    document.getElementById("img_6").style.backgroundImage =
      "url('../assets/interior.jpg')";
    document.getElementById("img_6").style.backgroundRepeat = "no-repeat";
    document.getElementById("img_6").style.backgroundSize = "cover";
    document.getElementById("text_7").style.backgroundColor = "#022A91";
    document.getElementById(
      "img_7"
    ).style.backgroundImage = `url('../assets/interior.jpg')`;
    document.getElementById("img_7").style.backgroundSize = "cover";
    document.getElementById("img_7").style.backgroundRepeat = "no-repeat";
  }
  if (scrolled >= windowHeight * 6 - 10 && scrolled < windowHeight * 7 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#01824D";
    document.getElementById("text_7").style.backgroundColor = "#01824D";
    document.getElementById("img_7").style.backgroundColor = "#01B76A";
    document.getElementById("img_7").style.backgroundImage =
      "linear-gradient(to bottom, #01B76A 100%, #01B76A 100%)";
  }
}

// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({ triggerElement: "#text" })
//   // trigger a velocity opaticy animation
//   .setVelocity("#animate", { opacity: 0 }, { duration: 400 })
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller);
