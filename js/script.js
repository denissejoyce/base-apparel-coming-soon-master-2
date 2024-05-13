'use strict';

const inputEmail = document.querySelector('#email-sub');
const userAlert = document.querySelector('#userAlert');

const checkInput = function () {
  const userEmail = document.querySelector('#email-sub').value;
  const verifyEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  console.log(userEmail);

  //   verifyEmail.test(userEmail) ? alert(`GTG!`) : alert(`Enter new email`);
  verifyEmail.test(userEmail) ? inputValid() : inputInvalid();
};

const inputValid = function () {
  inputEmail.value = ``;
  inputEmail.classList.remove('invalidEmail');
  userAlert.classList.remove('error');
  userAlert.textContent = `You are now included in our mailing list!`;
};

const inputInvalid = function () {
  inputEmail.value = ``;
  inputEmail.classList.add('invalidEmail');
  userAlert.classList.add('error');
  userAlert.textContent = `Please provide a valid email.`;
};

inputEmail.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') checkInput();
});
