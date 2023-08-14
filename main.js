//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
"use strict";
const $joinButton = document.querySelector("#join-button");
const $form = document.querySelector("#form");

$joinButton.onclick = function () {
  validateForm(event);
  hideErrorAlert();
  return false;
};

function validateForm(event) {
  const name = $form.name.value;
  const surname = $form.surname.value;
  const mail = $form.mail.value;
  const age = $form.age.value;

  const nameError = validateName(name);
  const surnameError = validateSurname(surname);
  const mailError = validateMail(mail);
  const ageError = validateAge(age);

  const errors = {
    name: nameError,
    surname: surnameError,
    mail: mailError,
    age: ageError,
  };

  const esSucess = handlingErrors(errors) === 0;
  if (esSucess) {
    console.log(errors);
    $form.className = "hide";
    document.querySelector("#errors").className = "hide";
    var sucess = document.querySelector("#results");
    sucess.className = "alert alert-success";
    sucess.textContent = `Thanks ${name.toUpperCase()} ${surname.toUpperCase()} we wait for you`;
  }
  event.preventDefault();
}

function handlingErrors(errors) {
  const keys = Object.keys(errors);
  const $errors = document.querySelector("#errors");
  let cantidadDeErrores = 0;

  keys.forEach(function (key) {
    const error = errors[key];

    if (error) {
      cantidadDeErrores++;
      $form[key].className = "error";
      const $error = document.createElement("li");
      $error.innerText = error;
      $error.className = "alert alert-danger";
      $errors.appendChild($error);
    } else {
      $form[key].className = "";
    }
  });
  return cantidadDeErrores;
}

function hideErrorAlert() {
  const password = document.querySelector("#form");

  password.addEventListener("focus", (event) => {
	  document.querySelector("#errors").innerHTML = "";
  }, true);

}

function validateName(name) {
  if (name.length === 0) {
    return "This field is required";
  }
  return "";
}

function validateSurname(surname) {
  if (surname.length === 0) {
    return "This field is required";
  }
  return "";
}

function validateMail(mail) {
  if (mail.length === 0) {
    return "Mail required";
  }
  return "";
}

function validateAge(age) {
  if (age.length === 0) {
    return "This field is required";
  }
  return "";
}

function updateDate() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  const year = currentDate.getFullYear();

  const dateString = day + '/' + month + '/' + year;

  document.getElementById('current-date').textContent = dateString;
}

updateDate();
