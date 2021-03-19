// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// const b1 = document.querySelector("#b1"),
//   b2 = document.querySelector("#b2"),
//   b3 = document.querySelector("#b3"),
//   b4 = document.querySelector("#b4"),
//   b5 = document.querySelector("#b5"),
//   b6 = document.querySelector("#b6"),
//   b7 = document.querySelector("#b7"),
//   b8 = document.querySelector("#b8"),
//   b9 = document.querySelector("#b9"),
//   b0 = document.querySelector("#b0"),
//   plusbtn = document.querySelector("#plus"),
//   minusbtn = document.querySelector("#minus"),
//   equalbtn = document.querySelector("#equal"),
//   multibtn = document.querySelector("#multi"),
//   dividebtn = document.querySelector("#divide"),
//   answer = document.querySelector("#answer"),
const body = document.querySelector("body"),
calcuator = body.querySelector(".calculator");

const answer = document.querySelector("#answer");

const EQUATION = "equation";

function resetAll(){
  answer.innerHTML=0;
  localStorage.clear();
}

function makeNumber(value){
  let res = Number(answer.innerHTML);
  value = Number(value);
  if(res === 0)
  {
    answer.innerHTML = value;
  }else{
    answer.innerHTML = res*10+value;
  }
}

function saveEquation(operator){
  console.log("hello");
  const NUM = answer.innerHTML;
  const OPER = operator;
  localStorage.setItem(EQUATION,JSON.stringify({NUM, OPER}));
}

function clickHandler(event) {
  if(event.target.tagName!=="BUTTON")
  {
    return;
  }
  const value = event.target.innerHTML;

  if(value==='C')
  {
    resetAll();
    return;
  }
  const equation = localStorage.getItem(EQUATION);
  if(equation===null){
    if(value ==="+" | value ==="/" | value ==="*" |value ==="-"|value ==="="){
      if(value==="=" | answer.innerHTML==='0'){
        return;
      }else{
        saveEquation(value);
      }
    }else{
      makeNumber(value);
    }
  }else{
    const parsedEquation = JSON.parse(equation);
    console.log(parsedEquation);
    if(value ==="+" | value ==="/" | value ==="*" |value ==="-"){
      parsedEquation.OPER=value;
      
    }else{
      makeNumber(value);
    }
  }
}

function init() {
  localStorage.clear();
  calcuator.addEventListener("click", clickHandler);
}
init();
