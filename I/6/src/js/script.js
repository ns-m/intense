window.addEventListener('load', function(){
	
	const items = document.querySelectorAll('.box .item');

	for (let index = 0; index < items.length; index++) {
		items[index].addEventListener('click', changeColor);
		
	}
	
});

function changeColor() {
	const colorsForBtn = ['#f00', '#ff0', '#0f0'];
	let rdmNum = Math.floor(Math.random() * colorsForBtn.length);
	this.style.color = colorsForBtn[rdmNum];
}