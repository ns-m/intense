window.addEventListener('load', function(){
	
	const items = document.querySelectorAll('.box .item');
	const btnAddItem = document.querySelector('.btnAddItem');
	let box = document.querySelector('.box');

	for (let index = 0; index < items.length; index++) {
		items[index].addEventListener('click', changeColor);		
	}

	btnAddItem.addEventListener('click', function(){
		let div = document.createElement('div');
		div.classList.add('item');
		div.innerHTML = 'Text ' + (box.children.length + 1);
		div.addEventListener('click', changeColor); //that it is a bad practice
		box.appendChild(div);
	});
	
});

function changeColor() {
	const colorsForBtn = ['#f00', '#ff0', '#0f0'];
	let rdmNum = Math.floor(Math.random() * colorsForBtn.length);
	this.style.color = colorsForBtn[rdmNum];
}