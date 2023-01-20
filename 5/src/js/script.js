window.addEventListener('load', function(){
	const some = document.querySelector('.some');
	const other = document.querySelector('.other');	

	some.addEventListener('mouseenter', changeColor);
	other.addEventListener('click', changeColor);
	
});

function changeColor() {
	const colorsForBtn = ['#f00', '#ff0', '#0f0'];
	let rdmNum = Math.floor(Math.random() * colorsForBtn.length);
	this.style.color = colorsForBtn[rdmNum];
}