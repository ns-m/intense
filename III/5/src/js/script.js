HTMLElement.prototype.onlyPetPrjDelegate = function onlyPetPrjDelegate(selector, eventName, handler) {
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
	let resultDiv = document.querySelector('.result');
	const operations = document.querySelector('.operations');
	const selectors = [input1, input2, operations];	
	const mathOperations = {
		'+' : (x, y) => x + y,
		'-' : (x, y) => x - y,
		'*' : (x, y) => x * y,
		'/' : (x, y) => x / y,
	};
	

	btnEquals.addEventListener('click', function(){		

		let resultNum1 = parseInt(input1.value);
		let resultNum2 = parseInt(input2.value);
					
		selectors.forEach(el => el.dataset.last = el.value);
		this.disabled = true;
		resultDiv.innerHTML = mathOperations[operations.value](resultNum1, resultNum2)
	});	

	calculator.onlyPetPrjDelegate('input, select', 'input', function(){
		btnEquals.disabled = false;
	});

	calculator.onlyPetPrjDelegate('.num1, .num2', 'input', function(){
		this.value = this.value.match(/-?[0-9]+\.?[0-9]*/g)[0];
	});
		
});
