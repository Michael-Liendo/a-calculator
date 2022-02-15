let input = document.querySelector("#input");

let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".eight");
let plus = document.querySelector(".plus");

let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let less = document.querySelector(".less");

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let x = document.querySelector(".x");

let zero = document.querySelector(".zero");
let point = document.querySelector(".point");
let AC = document.querySelector(".AC");
let division = document.querySelector(".division");

function handlerFunction(button) {
  if (button === "AC") {
    input.value = "";
    return;
  }

  if (button === "=") {
    input.value = eval(input.value);
    console.log(eval(input.value));
    if (input.value.endsWith("=")) {
      return;
    }
  }
  input.value += button;
}
