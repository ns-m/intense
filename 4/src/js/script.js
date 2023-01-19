window.addEventListener ('load', function() {	
	const divGet = document.querySelector('.some');
	const buttonGet = document.querySelector('.btnAddColor');

	// divGet.addEventListener('click', function(){
	// 	divGet.innerHTML += -1;
	// });

	divGet.addEventListener('click', function(){
		const colorsForBtn = ['#f00', '#ff0', '#0f0'];
		let rdmNum = Math.floor(Math.random() * colorsForBtn.length)
		divGet.style.colorsForBtn = colorsForBtn[rdmNum];
	});
	
});
