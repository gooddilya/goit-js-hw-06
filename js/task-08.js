const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (
    emailInput.value !== "" &&
    passwordInput.value !== ""
  ) {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log(formData);
    return event.currentTarget.reset();
  }
  return alert("Всі поля повинні бути заповнені");
});
