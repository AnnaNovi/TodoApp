document.addEventListener('DOMContentLoaded', switchers);
const signUpBtn = document.querySelector('.btn-signup');
signUpBtn.addEventListener('click', comparePasswords);
const loginTestBtn = document.querySelector('.btn-test-login');
loginTestBtn.addEventListener('click', FillTestLogin);

function switchers(){
  const switchers = [...document.querySelectorAll('.switcher')]

  switchers.forEach(item => {
    item.addEventListener('click', function() {
      switchers.forEach(item => item.parentElement.classList.remove('is-active'))
      this.parentElement.classList.add('is-active')
    })
  })

}

function comparePasswords(event){
  const signUpPassword = document.querySelector('#signup-password');
  const signUpPasswordConfirm = document.querySelector('#signup-password-confirm');
  if (signUpPassword.value !== signUpPasswordConfirm.value) {
    alert('Passwods are not equal!');
    event.preventDefault();
  }
}

function FillTestLogin(event){
  /* event.preventDefault(); */
  const loginEmail = document.querySelector('#login-email');
  const loginPassword = document.querySelector('#login-password');
  loginEmail.value = 'newUser@gmail.com';
  loginPassword.value = 'newUser';
  return;
}