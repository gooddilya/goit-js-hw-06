const inputEl = document.querySelector("#validation-input");
const inputLength = document.querySelector(
  'input[data-length="6"]'
);

inputEl.addEventListener("blur", (event) => {
  const inputValuedLength =
    event.currentTarget.value.length;
  const dataLength = Number(inputEl.dataset.length);

  if (inputValuedLength === dataLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
