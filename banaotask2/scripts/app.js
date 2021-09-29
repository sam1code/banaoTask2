gsap.registerPlugin(ScrollTrigger);
const windowHeight = window.innerHeight;
document.querySelector(".maincontent").onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  let scrolled = Math.round(document.querySelector(".maincontent").scrollTop);
  console.log("Scrolled" + scrolled + "\n" + windowHeight);

  const animation = () => {
    gsap.to(".h1", {
      scrollTrigger: {
        trigger: ".h1",
        toggleActions: "restart pause reverse pause",
        markers: true,
        start: "20% 80%",
        // end: "60% 40%",
        // scrub: true,
      },
      y: -40,
      duration: 1,
    });
    setTimeout(() => {
      gsap.to(".h1", {
        scrollTrigger: {
          trigger: ".h1",
          toggleActions: "restart pause reverse pause",
          markers: true,
          start: "20% 80%",
          // end: "60% 40%",
          // scrub: true,
        },
        y: 10,
        duration: 0,
      });
    }, 1000);
  };

  if (scrolled <= windowHeight) {
    document.getElementById("h1").innerText = "ABC 456";
  }
  if (scrolled >= windowHeight && scrolled <= windowHeight * 2 - 100) {
    setTimeout(() => {
      gsap.to(".h1", {
        scrollTrigger: {
          trigger: ".h1",
          toggleActions: "restart pause reverse pause",
          markers: true,
          start: "20% 80%",
        },
        y: -10,
        duration: 0.5,
      });
      gsap.to(".follow", {
        scrollTrigger: {
          trigger: ".h1",
          toggleActions: "restart pause reverse pause",
          markers: true,
          start: "20% 80%",
        },
        y: -10,
        duration: 0.5,
      });
      document.getElementById("h1").innerText = "ABC 345";
    }, 900);
  }
  if (scrolled >= windowHeight * 2 - 10 && scrolled <= windowHeight * 3 - 100) {
    setTimeout(() => {
      gsap.to(".h1", {
        scrollTrigger: {
          trigger: ".h1",
          toggleActions: "restart pause reverse pause",
          markers: true,
          start: "20% 80%",
        },
        y: -20,
        duration: 0.5,
      });
      document.getElementById("h1").innerText = "ABC 234";
    }, 900);
  }
  if (scrolled >= windowHeight * 3 - 10 && scrolled <= windowHeight * 4 - 10) {
    setTimeout(() => {
      gsap.to(".h1", {
        scrollTrigger: {
          trigger: ".h1",
          toggleActions: "restart pause reverse pause",
          markers: true,
          start: "20% 80%",
        },
        y: -10,
        duration: 0.5,
      });

      document.getElementById("h1").innerText = "ABC 123";
    }, 900);
  }
  if (scrolled >= windowHeight * 4 - 10 && scrolled <= windowHeight * 5 - 100) {
    setTimeout(() => {
      gsap.to(".h1", {
        scrollTrigger: {
          trigger: ".h1",
          toggleActions: "restart pause reverse pause",
          markers: true,
          start: "20% 80%",
        },
        y: -20,
        duration: 0.5,
      });
      document.getElementById("h1").innerText = "ABC 567";
    }, 900);
  }
  if (scrolled >= windowHeight * 5 - 10 && scrolled <= windowHeight * 6 - 100) {
    setTimeout(() => {
      gsap.to(".h1", {
        scrollTrigger: {
          trigger: ".h1",
          toggleActions: "restart pause reverse pause",
          markers: true,
          start: "20% 80%",
        },
        y: -20,
        duration: 0.5,
      });
      document.getElementById("h1").innerText = "ABC 678";
    }, 900);
  }
  if (scrolled >= windowHeight * 6 - 10 && scrolled <= windowHeight * 7 - 100) {
    setTimeout(() => {
      gsap.to(".h1", {
        scrollTrigger: {
          trigger: ".h1",
          toggleActions: "restart pause reverse pause",
          markers: true,
          start: "20% 80%",
        },
        y: -20,
        duration: 0.5,
      });
      document.getElementById("h1").innerText = "ABC 23478";
    }, 900);
  }

  if (scrolled >= 0 && scrolled < windowHeight - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#15233a";
    document.getElementById("text_2").style.backgroundColor = "#15233a";
    document.getElementById("img_2").style.backgroundColor = "#0E131C";
    document.getElementById("blue_2").style.fill = "#fff";
  }
  if (scrolled >= windowHeight - 10 && scrolled < windowHeight * 2 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#0E103A";
    document.getElementById("text_2").style.backgroundColor = "#0E103A";
    document.getElementById("img_2").style.backgroundColor = "#151648";
    document.getElementById("text_3").style.backgroundColor = "#0E103A";
    document.getElementById("img_3").style.backgroundColor = "#151648";
    document.getElementById("blue_2").style.fill = "#0092ff";
    document.getElementById("blue_3").style.fill = "#fff";
    animation();
  }
  if (scrolled >= windowHeight * 2 - 10 && scrolled < windowHeight * 3 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#4E27CE";
    document.getElementById("text_3").style.backgroundColor = "#4E27CE";
    document.getElementById("img_3").style.backgroundColor = "#1D0363";
    document.getElementById("text_4").style.backgroundColor = "#4E27CE";
    document.getElementById("img_4").style.backgroundColor = "#1D0363";
    document.getElementById("blue_3").style.fill = "#0092ff";
    document.getElementById("blue_4").style.fill = "#fff";
    animation();
  }
  if (scrolled >= windowHeight * 3 - 10 && scrolled < windowHeight * 4 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#6211A7";
    document.getElementById("text_4").style.backgroundColor = "#6211A7";
    document.getElementById("img_4").style.backgroundColor = "#CDCBCF";
    document.getElementById("text_5").style.backgroundColor = "#4623BF";
    document.getElementById("img_5").style.backgroundColor = "#CDCBCF";
    document.getElementById("blue_4").style.fill = "#0092ff";
    document.getElementById("blue_5").style.fill = "#fff";
    animation();
  }
  if (scrolled >= windowHeight * 4 - 10 && scrolled < windowHeight * 5 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#124AA3";
    document.getElementById("text_5").style.backgroundColor = "#124AA3";
    document.getElementById("img_5").style.backgroundColor = "#2ECCDC";
    document.getElementById("text_6").style.backgroundColor = "#124AA3";
    document.getElementById("img_6").style.backgroundColor = "#2ECCDC";
    document.getElementById("img_6").style.backgroundImage = "#2ECCDC";
    document.getElementById("blue_5").style.fill = "#0092ff";
    document.getElementById("blue_6").style.fill = "#fff";
    animation();
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
    document.getElementById("blue_6").style.fill = "#0092ff";
    document.getElementById("blue_7").style.fill = "#fff";
    animation();
  }
  if (scrolled >= windowHeight * 6 - 10 && scrolled < windowHeight * 7 - 10) {
    document.getElementById("svg_mid").style.backgroundColor = "#01824D";
    document.getElementById("text_7").style.backgroundColor = "#01824D";
    document.getElementById("img_7").style.backgroundColor = "#01B76A";
    document.getElementById("img_7").style.backgroundImage =
      "linear-gradient(to bottom, #01B76A 100%, #01B76A 100%)";
    document.getElementById("blue_7").style.fill = "#0092ff";
    animation();
  }
}
