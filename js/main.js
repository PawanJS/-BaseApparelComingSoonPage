"use strict";

const form = document.getElementById("form");
const email = document.querySelector(".js-email");
const error = document.querySelector(".js-error");

// Checking email validity
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Errors Message
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("active", "active-icon");
  error.innerText = message;
}

// Success Message
function setSuccessFor(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove("active-icon");
  formControl.classList.add("active");
  error.innerText = message;
  input.value = "";
}

// Checking Inputs
function checkInputs() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be Blank!");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email!");
  } else {
    setSuccessFor(email, "Your Email is Successfully Submitted.");
  }
}

// Event Handlers
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
