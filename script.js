// Select elements
const textInputButton = document.querySelector('[data-target="text-input"]');
const textInput = document.getElementById('text-input');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownButton = document.querySelector('[data-target="dropdown-menu"]');
const radioButtons = document.querySelectorAll('input[type="radio"][name="radio-group"]'); // More specific radio selection
const radioButtonGroup = document.querySelector('[data-target="radio-group"]');
const agreeCheckbox = document.getElementById('agree');
const alertButtons = document.querySelectorAll('.alert-button');
const clockElement = document.getElementById('clock');
const progressBar = document.getElementById('progress');
const updateProgressButton = document.getElementById('update-progress');

// Text Input Clearing
textInputButton.addEventListener('click', () => {
  textInput.value = '';
});

// Login Form Handling
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Replace with your actual validation/login logic
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const isAuthenticated = username === 'admin' && password === 'password';

  loginMessage.textContent = isAuthenticated ? "Login successful!" : "Invalid username or password.";
});

// Dropdown Menu Selection
dropdownButton.addEventListener('click', () => {
  dropdownMenu.value = 'option2'; // Select option 2
});

// Radio Button Selection
radioButtonGroup.addEventListener('click', () => {
  radioButtons[1].checked = true; // Select radio button 2
});

// Checkbox State (example usage)
const isAgreed = agreeCheckbox.checked;
console.log('Agree checkbox checked:', isAgreed);

// Alert Creation
alertButtons.forEach(button => {
  button.addEventListener('click', () => {
    const alertType = button.dataset.alertType;
    createAlert(alertType);
  });
});

function createAlert(type) {
  const alert = document.createElement('div');
  alert.classList.add('alert', type);
  alert.textContent = `This is a ${type} alert!`;

  alert.addEventListener('transitionend', () => {
    if (alert.classList.contains('show')) {
      setTimeout(() => {
        alert.parentNode.removeChild(alert);
      }, 3000); // Hide alert after 3 seconds
    }
  });

  document.body.appendChild(alert);
  alert.classList.add('show');
}

// Clock Update
function updateClock() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  clockElement.textContent = formattedTime;
}

setInterval(updateClock, 1000);

// Progress Bar (Placeholder)
updateProgressButton.addEventListener('click', () => {
  // Update progress bar width here (e.g., progressBar.style.width = '50%')
  console.log('Update progress logic (implementation needed)');
});

// Table Population (Placeholder)
// You can use JavaScript or a library like DataTable to populate the table with data
