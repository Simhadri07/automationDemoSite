const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const targetId = this.dataset.target;
    const targetElement = document.getElementById(
