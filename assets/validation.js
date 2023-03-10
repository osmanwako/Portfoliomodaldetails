const errorlabel = document.querySelector('#errorlabelid');
const email = document.querySelector('#email');

function showerror() {
  email.style.border = '3px solid red';
  errorlabel.textContent = 'Email should be only lowercase.*';
  errorlabel.style.display = 'inline-block';
  return false;
}

function checkform(event) {
  const text = email.value;
  const n = text.search('[A-Z]+');
  if (n < 0) return true;
  event.preventDefault();
  return showerror();
}

const form = document.querySelector('#contactformid');
form.addEventListener('submit', checkform);
