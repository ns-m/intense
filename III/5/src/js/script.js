HTMLElement.prototype.delegate = function delegate(selector, eventName, handler) {
	const container = this;
	container.addEventListener(eventName, function(e){		
		const elem = e.target.closest(selector);
		if(elem !== null && container.contains(elem)){			
			handler.call(elem, e);
		}		
	});
}

window.addEventListener('load', function(){
	
	const calculator = document.querySelector('.calculator');
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

	calculator.delegate('input, select', 'input', function(){
		btnEquals.disabled = false;
	});

	calculator.delegate('.num1, .num2', 'input', function(){
		this.value = this.value.match(/-?[0-9]+\.?[0-9]*/g)[0];
	});
		
});
