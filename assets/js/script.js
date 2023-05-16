/* Creazione elementi nel DOM */

const body = document.querySelector("body");
const mainElement = document.createElement("main");
const footerElement = document.createElement("footer");

mainElement.classList.add("counter");
footerElement.classList.add('footer');
footerElement.textContent = "Made with ❤️ by Flavio";
body.prepend(mainElement);
mainElement.insertAdjacentElement('afterend', footerElement);

const divCounterNumber = document.createElement("div");
const divCounterButtons = document.createElement("div");

divCounterNumber.classList.add("counter__number");
divCounterButtons.classList.add("counter__buttons");

mainElement.append(divCounterNumber, divCounterButtons);

divCounterNumber.textContent = "0";

const buttonPlus = document.createElement("button");
const buttonReset = document.createElement("button");
const buttonMinus = document.createElement("button");

buttonPlus.classList.add("counter__button");
buttonReset.classList.add("counter__button");
buttonMinus.classList.add("counter__button");

buttonPlus.textContent = "+";
buttonReset.textContent = "Reset";
buttonMinus.textContent = "-";

divCounterButtons.append(buttonPlus, buttonReset, buttonMinus);

/* Interattività pulsanti */

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
  for (let i = 0; i < Math.abs(currentCount.innerText); i++) {
    setTimeout(() => {
      if (currentCount.innerText > 0) {
        currentCount.innerText--;
      }

      if (currentCount.innerText < 0) {
        currentCount.innerText++;
      }
    }, 30 * i);
  }
}
