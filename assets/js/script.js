let currentCount = document.querySelector(".counter__number");

document.querySelectorAll(".counter__button").forEach((btn) => {
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
      currentCount.innerText = 0;
      break;
  }
}