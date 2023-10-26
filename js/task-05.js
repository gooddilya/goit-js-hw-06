const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", nameOutputChange);

function nameOutputChange(event) {
  if (
    (nameOutput.textContent =
      event.currentTarget.value.trim())
  ) {
    return nameOutput;
  }
  nameOutput.textContent = "Anonymous";
}
