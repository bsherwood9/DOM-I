const startBtn = document.createElement("button");
startBtn.textContent = "Start";

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
const div = document.createElement("div");
body.append(div);
const clock = document.querySelector(".digits");
div.prepend(startBtn);
startBtn.onclick = runSeconds();

const secondTens = document.querySelector("#secondTens");
console.log(secondTens);

function runSeconds() {
  setInterval(add(), 1000);
}

function add() {
  count = 0;
  secondTens.textContent = count;
  function counter() {
    ++count;
  }
  counter();
}
