window.addEventListener('load', function(){
	
	const items = document.querySelectorAll('.box .item');
	
	items.forEach(el => el.addEventListener('click', changeColor));
	
});

function changeColor() {
	this.style.color = this.dataset.color;
}