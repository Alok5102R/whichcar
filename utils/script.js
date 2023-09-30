let carListContainer = document.getElementById("carList");
let suggestionHeading = document.getElementsByClassName("suggestions")[0];
let noresult_textContainer =
  document.getElementsByClassName("noresult_text")[0];

let cars = {};

// ==== Function to fetch data from json ====
fetch("../utils/cardata.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    cars = data;
  });
// ==== Function to fetch data from json ====

function getFilteredCars() {
  resetFields();
  var fPrice = document.getElementById("fPrice").value;
  var tPrice = document.getElementById("tPrice").value;

  var seatsDrpDwn = document.getElementById("Seats");
  var minseats = seatsDrpDwn.options[seatsDrpDwn.selectedIndex].text;
  minseats = minseats.substring(0, 1);

  var typesDrpDwn = document.getElementById("Types");

  var type = typesDrpDwn.options[typesDrpDwn.selectedIndex].text;

  let selectedCars = [];
  for (let i = 0; i < cars.length; i++) {
    if (
      cars[i]["price"] >= fPrice &&
      cars[i]["price"] <= tPrice &&
      cars[i]["type"] == type &&
      cars[i]["seat"] >= minseats
    ) {
      let carObj = {
        car:
          cars[i]["car"] +
          " : Rs. " +
          cars[i]["price"] +
          " lacs " +
          " | " +
          cars[i].colr,
        link: cars[i]["link"],
      };
      selectedCars.push(carObj);
    }
  }
  if (selectedCars.length > 0) {
    suggestionHeading.style.display = "block";
    carListContainer.innerHTML = "";
    noresult_textContainer.style.display = "none";
  } else {
    noresult_textContainer.style.display = "block";
    noresult_textContainer.classList.remove("noresult_text");
    void noresult_textContainer.offsetWidth;
    noresult_textContainer.classList.add("noresult_text");
    console.log("trigered!");
  }
  for (let i = 0; i < selectedCars.length; i++) {
    let carLink = document.createElement("a");
    carLink.innerText = selectedCars[i].car;
    carLink.href = selectedCars[i].link;
    carLink.target = "_blank";
    carLink.classList.add(
      "carLink",
      "text-base",
      "font-medium",
      "text-gray-500",
      "bg-gray-50",
      "hover:text-gray-900",
      "hover:bg-gray-100",
      "dark:text-gray-400",
      "dark:bg-gray-800",
      "dark:hover:bg-gray-700",
      "dark:hover:text-white"
    );
    carListContainer.appendChild(carLink);
  }
}

function resetFields() {
  suggestionHeading.style.display = "none";
  carListContainer.innerHTML = "";
}

// toggle button starts

localStorage.clear();
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  toggle_light_mode();
});

//Dark mode c
window.addEventListener(
  "storage",
  function () {
    if (localStorage.lightMode == "light") {
      app.setAttribute("light-mode", "light");
    } else {
      app.setAttribute("light-mode", "dark");
    }
  },
  false
);
var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "light") {
  app.setAttribute("light-mode", "light");
}

function toggle_light_mode() {
  console.log("clikced");
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "light") {
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
  } else {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
  }
}

// toggle button ends

const handleRegisterUser = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let btn = document.getElementById("submitBtn");
  let spinner = document.getElementById("spinner");

  fetch("../img/spinner.svg")
    .then((response) => response.text())
    .then((svgData) => {
      btn.style.display = "none";
      spinner.style.display = "";
      spinner.innerHTML = svgData;
    });

  console.log({ name, email, password, confirmPassword });

  // validation
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

  let isNameValid = false;
  let isEmailValid = false;
  let isPasswordValid = false;
  let isPasswordMatch = false;

  if (nameRegex.test(name)) {
    isNameValid = true;
  } else {
    nameError.textContent = "Enter a valid name !";
  }

  if (emailRegex.test(email)) {
    isEmailValid = true;
  } else {
    emailError.textContent = "Enter a valid email !";
  }

  if (passwordRegex.test(password)) {
    isPasswordValid = true;
  } else {
    passwordError.textContent =
      "Password  must contain at least 8 characters, 1 digit and 1 symbol !";
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match!";
  } else {
    isPasswordMatch = true;
  }

  if (isNameValid && isEmailValid && isPasswordValid && isPasswordMatch) {
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    // api call
    console.log("calling signUp api");
  } else {
    setTimeout(() => {
      btn.style.display = "";
      spinner.style.display = "none";
    }, 500);
  }

  // after successful signup
  // window.location.href = "/index.html";
};
