//validate form js
const form = document.getElementsByClassName("form")[0];
const username = document.querySelector(".username");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");
const phoneNumber = document.querySelector(".phoneNumber");
const container = document.querySelector(".container");
const nameError = document.getElementById("name-error");
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate(email, [required, validateEmail]);
  validate(username, [required]);
  validate(password, [required, validatePassword]);
  validate(confirmPassword, [required, validateconfirmPassword]);
  validate(phoneNumber, [required, validatePhoneNumber]);
});
const textError = {
  email: "Vui lòng nhập địa chỉ email hợp lệ",
  required: "Vui lòng không để trống",
  password: "Password không hợp lệ",
  confirmPassword: "Password khong trung khop",
  phoneNumber: "Số điện thoại không hợp lệ",
};
function validateEmail(email, element) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!re.test(String(email).toLowerCase())) {
    element.innerHTML = textError.email;
    return false;
  } else {
    element.innerHTML = "";
    return true;
  }
}

function validatePassword(password, element) {
  const re = /^[a-zA-Z0-9]{6,12}$/;
  if (!re.test(password) || password.length < 8) {
    element.innerHTML = textError.password;
    return false;
  } else {
    element.innerHTML = " ";
    return true;
  }
}
function required(value, element) {
  element.innerHTML = textError.required;
  return Boolean(value);
}

function validateconfirmPassword(confirmPassword, element) {
  if (confirmPassword != password) {
    element.innerHTML = textError.confirmPassword;
    return false;
  } else {
    element.innerHTML = " ";
    return true;
  }
}
function validatePhoneNumber(phoneNumber, element) {
  const re = /^\d{10}$/;
  if (!re.test(phoneNumber)) {
    element.innerHTML = textError.phoneNumber;
    return false;
  } else {
    element.innerHTML = " ";
    return true;
  }
}
function validate(element, arrayRule) {
  const value = element.value;
  const parent = element.parentElement;
  const error = parent.querySelector(".error-message");

  for (const rule of arrayRule) {
    if (!rule(value, error)) {
      error.classList.add("show");
      break;
    }
  }
}
