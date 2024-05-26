const textInputButton = document.querySelector('button[data-target="text-input"]');
const textInput = document.getElementById('text-input');

textInputButton.addEventListener('click', function() {
  textInput.value = "";
});

const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Simulate login (replace with actual validation/login logic)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === 'admin' && password === 'password') {
    loginMessage.textContent = "Login successful!";
  } else {
    loginMessage.textContent = "Invalid username or password.";
  }
});

const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownButton = document.querySelector('button[data-target="dropdown-menu"]');

dropdownButton.addEventListener('click', function() {
  dropdownMenu.value = "option2"; // Select option 2
});

const radioButtons = document.querySelectorAll('input[type="radio"]');
const radioButtonGroup = document.querySelector('button[data-target="radio-group"]');

radioButtonGroup.addEventListener('click', function() {
  radioButtons[1].checked = true; // Select radio button 2
});
