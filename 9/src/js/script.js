window.addEventListener('load', function(){
	
	const input1 = document.querySelector('.num1');
	const input2 = document.querySelector('.num2');
	const btnEquals = document.querySelector('.equals');
	const resultDiv = document.querySelector('.result');

	btnEquals.addEventListener('click', function(){
		resultDiv.innerHTML = (parseInt(input1.value) + parseInt(input2.value));
	});
		
});
