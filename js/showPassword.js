const showPasswordButton = document.querySelector('#show-password');
const showPasswordIcon = showPasswordButton.querySelector('.fa-eye');
const passwordInput = document.querySelector('#password');

showPasswordButton.onclick = () => {
       passwordInput.type = passwordInput.type === 'password'
              ? 'text'
              : 'password';

       let showPasswordIconToken = showPasswordIcon.classList;
       showPasswordIconToken.contains('fa-eye-slash')
              ? showPasswordIconToken.replace('fa-eye-slash', 'fa-eye')
              : showPasswordIcon.classList.replace('fa-eye', 'fa-eye-slash');
}