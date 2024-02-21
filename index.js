function validate(){
  const firstNameInput = document.getElementById('first_name');
  const lastNameInput = document.getElementById('last_name');
  const phoneInput = document.getElementById('phone_number');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('user_password');
  const confirmInput = document.getElementById('confirm_password');

  const firstNameError = document.getElementById('first_name_error');
  const lastNameError = document.getElementById('last_name_error');
  const phoneError = document.getElementById('telephone_error');
  const emailError = document.getElementById('email_error');
  const passwordError = document.getElementById('password_error');
  const confirmError = document.getElementById('confirm_password_error');
  
  var flag = true; // becomes fa
  firstNameError.textContent = '';
  lastNameError.textContent = '';
  phoneError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  confirmError.textContent = '';

  // console.log(firstNameInput.value);
  // console.log(lastNameInput.value);
  // console.log(phoneInput.value);
  // console.log(emailInput.value);
  // console.log(passwordInput.value);
  // console.log(confirmInput.value);

  if (firstNameInput.value.length < 1){
    firstNameError.textContent = 'first name must be at least one character!';
    firstNameError.style.color = "red";
    flag = false;
    // console.log('a');
  }
  else if (firstNameInput.value.length > 25){
    firstNameError.textContent = 'first name is too long!';
    firstNameError.style.color = "red";
    // console.log('b');
    flag = false;
  }

  if (lastNameInput.value.length < 1){
    lastNameError.textContent = 'last name must be at least one character!';
    lastNameError.style.color = "red";
    // console.log('c');
    flag = false;
  }
  else if (lastNameInput.value.length > 25){
    lastNameError.textContent = 'last name is too long!';
    lastNameError.style.color = "red";
    // console.log('e');
    flag = false;
  }

  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneInput.value)){
    phoneError.textContent = "Invalid phone number!";
    phoneError.style.color = "red";
    // console.log('f');
    flag = false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)){
    emailError.textContent = "Invalid email!";
    emailError.style.color = 'red';
    // console.log('g');
    flag = false;
  }

  if (passwordInput.value.length < 6){
    passwordError.textContent += 'password too short!';
    passwordError.style.color = 'red';
    console.log('h');
    flag = false;
  }
  if (!hasCapital(passwordInput.value)){
    passwordError.textContent += 'password must have a capital in it!';
    passwordError.style.color = 'red';
    console.log('i');
    flag = false;
  }
  if (!hasNumber(passwordInput.value)){
    passwordError.textContent +=  'password must have a number in it!';
    passwordError.style.color = 'red';
    console.log('j');
    flag = false;
  }

  if (passwordInput.value !== confirmInput.value){
    confirmError.textContent = 'password does not match!';
    confirmError.style.color = 'red';
    // console.log('k');
    flag = false;
  }
  return flag;
}

function hasCapital(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
      return true; // Found a capital letter
    }
  }
  return false; // No capital letter found
}

function hasNumber(word) {
  return /\d/.test(word);
}

function isClicked(){
  const button = document.getElementById('submit');
  button.style.backgroundColor = "grey";
  setTimeout(function() {
    button.style.backgroundColor = ''; // Revert to default color
  }, 50);
}