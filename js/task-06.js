const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const length = parseInt(validationInput.dataset.length);
  const value = validationInput.value.trim();

  if (value.length === length) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});