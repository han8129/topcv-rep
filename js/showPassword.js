const passwordBoxes = document.querySelectorAll('.show-password');
passwordBoxes.forEach(showPassword)

function showPassword(passwordBox) {
       const showPasswordButton = passwordBox.querySelector('.fa-eye');
       const passwordInput = passwordBox.querySelector('.password');

       console.log(showPasswordButton)

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