import isEmailValid from "./js/emailValidation.js";

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {  

  e.preventDefault();
  const input = document.getElementById('input-value').value;
  isEmailValid(input);
  
})