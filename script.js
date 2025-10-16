//your JS code here. If required.
const inputs = document.querySelectorAll('.code-container');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});