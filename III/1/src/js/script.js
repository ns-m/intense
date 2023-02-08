window.addEventListener('load', function(){
		
	const box = document.querySelector('.box');
	
	box.addEventListener('click', function(e){
		
		const elem = e.target.closest('.item');

		if(elem !== null && box.contains(elem)){
			changeColor(elem);
		}	
	
	});
});

function changeColor(el) {
	const colorsForBtn = ['#f00', '#ff0', '#0f0'];
	let rdmNum = Math.floor(Math.random() * colorsForBtn.length);
	el.style.color = colorsForBtn[rdmNum];
};