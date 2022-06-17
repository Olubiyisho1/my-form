const myForm = document.querySelector('.my-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const password2Input = document.querySelector('#password2');

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs(){
// get the value from the input
const usernameValue = username.value.trim();
const emailValue = email.value.trim();
const passwordValue = password.value.trim();
const Password2Value = password2.value.trim();

if(usernameValue === '' || username.length<3) {
  setErrorFor(username, 'Username must at least have 3 character');
}else {
  setSuccessFor(username);
   }
  

  if(emailValue === '') {
    setErrorFor(email, 'Email is not valid');
  }else {
    setSuccessFor(email);
  }

  if(passwordValue === '') {
    setErrorFor(password, 'Password must be atleast 6 character');
  }else{
    setSuccessFor(password);
  }

  if(Password2Value === '') {
    setErrorFor(password2, 'Password2 is required');
  }else {
  setSuccessFor(password2);
  }

function setErrorFor(input, message) {
  const formControl = input.parentElement;//form-control
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
 }
}
