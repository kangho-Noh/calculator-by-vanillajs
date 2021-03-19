// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const body = document.querySelector("body"),
  calcuator = body.querySelector(".calculator");

const answer = document.querySelector("#answer");

let left = 0;
let operator = "";
let reset_text = false;

function resetAll() {
  left = 0;
  operator = "";
  answer.innerHTML = 0;
}

function makeNumber(value) {
  let res = Number(answer.innerHTML);
  value = Number(value);
  answer.innerHTML = res * 10 + value;
}

function doOperation() {
  if (operator === "+") {
    left = left + Number(answer.innerHTML);
  } else if (operator === "-") {
    left = left - Number(answer.innerHTML);
  } else if (operator === "*") {
    left = left * Number(answer.innerHTML);
  } else if (operator === "/") {
    left = left / Number(answer.innerHTML);
  }
  answer.innerHTML = left;
}

function clickHandler(event) {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const value = event.target.innerHTML;
  console.log(value);

  if (value === "C") {
    resetAll();
  } else if (value === "=") {
    if ((left > 0) & (operator != "")) {
      doOperation();
      operator = "";
    }
  } else if (
    (value === "-") |
    (value === "+") |
    (value === "/") |
    (value === "*")
  ) {
    if ((operator != "") & (left != 0)) {
      doOperation();
    }
    reset_text = true;

    operator = value;
    if (left == 0) {
      left = answer.innerHTML;
    }
    //equal연산 후 operator 교체
  } else {
    if (reset_text === true) {
      answer.innerHTML = "0";
      reset_text = false;
    }
    makeNumber(value);
  }
}

function init() {
  calcuator.addEventListener("click", clickHandler);
}

init();
