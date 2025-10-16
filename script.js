//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
	  if(index==0&&!input.value){
		input[index].focus();
	  }
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