const errorlabel = document.querySelector('#errorlabelid');
const email = document.querySelector('#email');

function showerror() {
  email.style.border = '3px solid red';
  errorlabel.textContent = 'Email should be only lowercase.*';
  errorlabel.style.display = 'inline-block';
  return false;
}
