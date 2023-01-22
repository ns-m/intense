window.addEventListener('load', function(){
	
	const input1 = document.querySelector('.num1');
	const input2 = document.querySelector('.num2');
	const btnEquals = document.querySelector('.equals');
	const resultDiv = document.querySelector('.result');
	const operands = document.querySelector('.operands');

	btnEquals.addEventListener('click', function(){		
		this.classList.toggle('item-equals');
		
		switch (operands.value) {
			case '+':
				resultDiv.innerHTML = (parseInt(input1.value) + parseInt(input2.value));
				break;
			case '-':
				resultDiv.innerHTML = (parseInt(input1.value) - parseInt(input2.value));
				break;
			case '*':
				resultDiv.innerHTML = (parseInt(input1.value) * parseInt(input2.value));
				break;
			default:
				resultDiv.innerHTML = (parseInt(input1.value) / parseInt(input2.value));
				break;
		}
		
	});
		
});
