window.addEventListener('load', function(){
	
	const input1 = document.querySelector('.num1');
	const input2 = document.querySelector('.num2');
	const btnEquals = document.querySelector('.equals');
	const resultDiv = document.querySelector('.result');
	const operands = document.querySelector('.operands');	
	

	btnEquals.addEventListener('click', function(){		

		let resultNum1 = parseInt(input1.value);
		let resultNum2 = parseInt(input2.value);
		
		switch (operands.value) {
			case '+':
				resultDiv.innerHTML = (resultNum1 + resultNum2);
				break;
			case '-':
				resultDiv.innerHTML = (resultNum1 - resultNum2);
				break;
			case '*':
				resultDiv.innerHTML = (resultNum1 * resultNum2);
				break;
			default:
				resultDiv.innerHTML = (resultNum1 / resultNum2);
				break;
		}

		[input1, input2, operands].forEach(el => el.dataset.last = el.value);
		this.disabled = true;
		
	});	

	function clearNumber() {
		//this.value = this.value.replace(/[^0-9]/g, '');
		this.value = this.value.match(/-?[0-9]+\.?[0-9]*/g)[0];
	}

	function changeExample() {
		btnEquals.disabled = (
			[input1.dataset.last, input2.dataset.last, operands.dataset.last] === 
			[input1.value, input2.value, operands.value]
		);
	}

	[input1, input2].forEach(el => el.addEventListener('input', clearNumber));

	[input1, input2, operands].forEach(el => el.addEventListener('input', changeExample));
	
		
});
