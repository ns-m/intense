window.addEventListener('load', function(){
	
	//const items = document.querySelectorAll('.box .item');
	const btnAddItem = document.querySelector('.btnAddItem');
	const box = document.querySelector('.box');

	// for (let index = 0; index < items.length; index++) {
	// 	items[index].addEventListener('click', changeColor);		
	// }

	box.addEventListener('click', function(e){
		
		if(e.target.classList.contains('item')){
			changeColor(e.target);
		}
		
	});

	btnAddItem.addEventListener('click', function(){

		let div = document.createElement('div');
		div.classList.add('item');
		div.innerHTML = 'Text ' + (box.children.length + 1);
		box.appendChild(div);
		
	});
	
});

function changeColor(el) {
	const colorsForBtn = ['#f00', '#ff0', '#0f0'];
	let rdmNum = Math.floor(Math.random() * colorsForBtn.length);
	el.style.color = colorsForBtn[rdmNum];
}