let timer;
let min = 5;
let sec = 0;
let runner = false;

function stopTime() {
  if (runner === false) {
    timer = setInterval(updateTimer, 1000);
    runner = true;
    console.log("setTime is runnning");
  } else {
    clearInterval(timer);
    runner = false;
    console.log("set Time else condition");
  }
}
function resetTimer() {
  clearInterval(timer);
  min = 5;
  sec = 0;
  runner = false;
  updateDisplay();
}
function updateTimer() {
  if (min === 0 && sec === 0) {
    min = 5;
    sec = 0;
    runner = false;
    resetTimer();
  } else {
    if (sec === 0) {
      min--;
      sec = 59;
    } else {
      sec--;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  let minDisplay;
  let secDisplay;
  if (min < 10) {
    minDisplay = "0" + min;
  } else {
    minDisplay = min.toString();
  }

  if (sec < 10) {
    secDisplay = "0" + sec;
  } else {
    secDisplay = sec.toString();
  }
  document.getElementById("timer").innerText = minDisplay + ":" + secDisplay;
}

document.getElementById("open-new-page").addEventListener("click", function () {
  let newtab = window.open("./Index.html", "_self");
  newtab.focus();
});
