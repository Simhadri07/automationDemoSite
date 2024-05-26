const form = document.getElementById('user-form');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate data (optional, add checks as needed)
  if (!username || !email || !message) {
    responseDiv.textContent = "Please fill in all fields.";
    return
