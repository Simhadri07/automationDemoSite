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

const agreeCheckbox = document.getElementById('agree');

// You can use the checkbox state for your automation logic
console.log('Agree checkbox checked:', agreeCheckbox.checked);

const alertButtons = document.querySelectorAll('.alert-button');

alertButtons.forEach(button => {
  button.addEventListener('click', function() {
    const alertType = this.dataset.alertType;
    createAlert(alertType);
  });
});

function createAlert(type) {
  const alert = document.createElement('div');
  alert.classList.add('alert', type);
  alert.textContent = `This is a ${type} alert!`;

  alert.addEventListener('transitionend', function() {
    if (alert.classList.contains('show')) {
      setTimeout(() => {
        alert.parentNode.removeChild(alert);
      }, 3000); // Hide alert after 3 seconds
    }
  });

  document.body.appendChild(alert);
  alert.classList.add('show');
}

// Clock functionality (update every second)
function updateClock() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  document.getElementById('clock').textContent = formattedTime;
}

setInterval(updateClock, 1000);

// Progress bar functionality (placeholder, update logic needed)
const progressBar = document.getElementById('progress');
const updateProgressButton = document.getElementById('update-progress');

updateProgressButton.addEventListener('click', function() {
  // Update progress bar width here (e.g., progressBar.style.width = '50%')
  console.log('Update progress logic (implementation needed)');
});

// Table population (placeholder, add data dynamically)
// You can use JavaScript or a library like DataTable to populate the table with data
