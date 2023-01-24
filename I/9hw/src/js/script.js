window.addEventListener('load', function(){
	
	const input1 = document.querySelector('.num1');
	const input2 = document.querySelector('.num2');
	const btnEquals = document.querySelector('.equals');
	const resultDiv = document.querySelector('.result');
	const operands = document.querySelector('.operands');
	const selectors = [input1, input2, operands];	
	

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

		selectors.forEach(el => el.dataset.last = el.value);
		this.disabled = true;
		
	});	

	function clearNumber() {
		//this.value = this.value.replace(/[^0-9]/g, '');
		this.value = this.value.match(/-?[0-9]+\.?[0-9]*/g)[0];
	}

	function changeExample() {
		btnEquals.disabled = selectors.every(el => el.dataset.last === el.value)
	}

	selectors.slice(0,2).forEach(el => el.addEventListener('input', clearNumber));

	selectors.forEach(el => el.addEventListener('input', changeExample));
	
		
});
