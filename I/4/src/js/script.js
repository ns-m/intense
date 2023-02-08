window.addEventListener('load', function(){
	const divGet = document.querySelector('.some');
	const buttonGet = document.querySelector('.btnAddColor');
	const colorsForBtn = ['#f00', '#ff0', '#0f0'];

	divGet.addEventListener('mouseenter', function(){	
		let rdmNum = Math.floor(Math.random() * colorsForBtn.length);
		divGet.style.color = colorsForBtn[rdmNum];
	});

	buttonGet.addEventListener('click', function(){
		colorsForBtn.push('#f90');
	});
});