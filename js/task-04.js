const decrementButton = document.querySelector(
  '[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  '[data-action="increment"]'
);
const counterValueEl = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
