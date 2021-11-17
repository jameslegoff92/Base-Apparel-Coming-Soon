function isEmailValid (email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = re.test(email);

  if (isValid) {
    const errorMsg = document.getElementById('error-msg');
    errorMsg.className = 'msg-off';

    const errorIcon = document.getElementById('error-icon');
    errorIcon.setAttribute('class', 'form__error-icon--off')

    const getSuccessMsg = document.getElementById('success-msg');
    getSuccessMsg.className = "msg-on--success";
    document.getElementById('input-value').value = "";
  } else {
    const getSuccessMsg = document.getElementById('success-msg');
    getSuccessMsg.className = "msg-off";

    const errorIcon = document.getElementById('error-icon');
    errorIcon.setAttribute('class', 'form__error-icon--on')

    const errorMsg = document.getElementById('error-msg');
    errorMsg.className = 'msg-on--error';
    document.getElementById('input-value').value = "";
  } 
}

export default isEmailValid;