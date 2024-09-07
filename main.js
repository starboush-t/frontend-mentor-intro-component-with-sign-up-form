const form = document.querySelector("form");
const formControl = document.querySelectorAll(".form_control");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

let errorMsg = document.querySelector(".error_msg");
let errorImg = document.querySelector(".error_img");

const submitBtn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error_msg");

  errorDisplay.innerHTML = message;

  inputControl.classList.add("error_msg");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error_msg");
  errorDisplay.innerHTML = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error_msg");
};

function formValidation() {
  const firstNameInputValue = firstNameInput.value.trim();
  const lastNameInputValue = lastNameInput.value.trim();
  const emailInputValue = emailInput.value.trim();
  const passwordInputValue = passwordInput.value.trim();

  const regex = /[^A-Za-z]/;

  if (firstNameInputValue === "") {
    setError(firstNameInput, "First Name cannot be empty !");
    errorImg.style.display = "block";
  } else if (firstNameInputValue.length < 2) {
    setError(firstNameInput, "Must be greater than 2 character !");
    errorImg.style.display = "block";
  } else if (regex.test(firstNameInputValue)) {
    setError(
      firstNameInput,
      "String must not contains special characters or numbers !"
    );
  } else {
    setSuccess(firstNameInput);
    errorImg.style.display = "none";
  }

  if (lastNameInputValue === "") {
    setError(lastNameInput, "Last Name cannot be empty !");
    errorImg.style.display = "block";
  } else if (lastNameInputValue.length < 2) {
    setError(lastNameInput, "Must be greater than 2 character !");
    errorImg.style.display = "block";
  } else if (regex.test(lastNameInputValue)) {
    setError(
      lastNameInput,
      "String must not contains special characters or numbers !"
    );
  } else {
    setSuccess(lastNameInput);
    errorImg.style.display = "none";
  }

  if (emailInputValue === "") {
    setError(emailInput, "Email cannot be empty !");
    errorImg.style.display = "block";
  } else if (emailInputValue.length < 2) {
    setError(emailInput, "Must be greater than 2 character !");
    errorImg.style.display = "block";
  } else if (!validateEmail(emailInputValue)) {
    setError(emailInput, "Please provide a valid email !");
  } else {
    setSuccess(emailInput);
    errorImg.style.display = "none";
  }

  if (passwordInputValue === "") {
    setError(passwordInput, "Password cannot be empty !");
    errorImg.style.display = "block";
  } else if (passwordInputValue.length < 8) {
    setError(passwordInput, "Must be greater than 8 character !");
    errorImg.style.display = "block";
  } else if (!regex.test(passwordInputValue)) {
    setError(
      passwordInput,
      "String must have contains special characters and numbers !"
    );
  } else {
    setSuccess(passwordInput);
    errorImg.style.display = "none";
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
