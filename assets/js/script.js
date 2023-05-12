let currentCount = document.querySelector(".counter__number");
let buttons = document.querySelectorAll(".counter__button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    operationHandler(btn);
  });
});

/******** FUNCTIONS ********/
function operationHandler(btn) {
  switch (btn.innerText) {
    case "+":
      currentCount.innerText = parseInt(currentCount.innerText) + 1;
      break;
    case "-":
      currentCount.innerText = parseInt(currentCount.innerText) - 1;
      break;
    case "Reset":
      resetHandler();
      break;
  }
}

function resetHandler() {

  for(let i = 0; i < Math.abs(currentCount.innerText); i++) {
    setTimeout(() => {
      if (currentCount.innerText > 0) {
        currentCount.innerText--
      }

      if(currentCount.innerText < 0) {
        currentCount.innerText++
      }
    }, 30 * i);
  }
}