function showPassword(passwordBox) {
       const showPasswordButton = passwordBox.querySelector('.fa-eye');
       const passwordInput = passwordBox.querySelector('.password');

       showPasswordButton.onclick = () => {
              passwordInput.type = passwordInput.type === 'password'
                     ? 'text'
                     : 'password';

              let buttonIcon = showPasswordButton.classList;
              buttonIcon.contains('fa-eye-slash')
                     ? buttonIcon.replace('fa-eye-slash', 'fa-eye')
                     : buttonIcon.replace('fa-eye', 'fa-eye-slash');
       }
}

function validatePassword (password) {
       
}

const passwordBoxes = document.querySelectorAll('.password__box');

passwordBoxes.forEach(showPassword)

const password = passwordBoxes[0].querySelector(".password");
const passwordRetype = passwordBoxes[1].querySelector(".password");
const submitButton = document.querySelector(".button__signup")

password.onblur = function() {

       let LowerCaseLetters = /[a-z]/g;
       let upperCaseLetters = /[A-Z]/g;
       let numbers = /[0-9]/g;

       let passwordProperties = {LowerCaseLetters, upperCaseLetters, numbers}
       let samaLength = password.value.length >= 8;
       
       console.log(password.value.length)
       if (!samaLength) {
              alert("Not match the format")
       } else {
              let i;

              for (i = 0; i < passwordProperties.length; i++) {
                     console.log("compare")
                     let matchTheFormat = password.value.match(passwordProperties[i])
                     if (!matchTheFormat) {
                            alert("Not match the required format")
                            break;
                     }

              }
       }
}

passwordRetype.onfocus = () => {
       submitButton.classList.remove("button__signup")
       submitButton.removeAttribute("disabled");

       submitButton.onclick = () => {
              console.log("validate")
              if (password.value === passwordRetype.value) {
                     null;
              }
              else {
                     alert("Not the same password")
              }

       }
};

