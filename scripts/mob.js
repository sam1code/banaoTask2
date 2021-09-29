const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");

for (i = 1; i <= 1000; i++) {
  if (i % 7 === 1) {
    btn1.click();
    continue;
  }
  setTimeout(() => {
    if (i % 2 === 1) {
      btn1.click();
    }
  }, 3000);
}
