document.querySelectorAll(".counter__button").forEach((btn) => {
  btn.addEventListener("click", () => {
    operationHandler(btn);
  });
});

/******** FUNCTIONS ********/
function operationHandler(btn) {
  switch (btn.innerText) {
    case "+":
      document.querySelector(".counter__number").innerText = parseInt(currentCount.innerText) + 1;
      break;
    case "-":
      document.querySelector(".counter__number").innerText = parseInt(currentCount.innerText) - 1;
      break;
    case "Reset":
      document.querySelector(".counter__number").innerText = 0;
      break;
  }
}