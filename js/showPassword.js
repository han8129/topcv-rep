const passwordBoxes = document.querySelectorAll('.password__box');
passwordBoxes.forEach(showPassword)

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

const password = passwordBoxes[0].querySelector(".password");
const passwordRetype = passwordBoxes[1].querySelector(".password");
const submitButton = document.querySelector(".button__signup")


function validatePassword () {
       if (password.innerHTML == passwordRetype.innerHTML) {
              alert("Password not match!");
              return true
       }
       return false
};

passwordRetype.addEventListener("focus", function () {
       submitButton.classList.remove("button__signup")
       submitButton.disabled = "false"
});

submitButton.addEventListener("click", validatePassword)