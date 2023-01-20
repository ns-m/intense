window.addEventListener('load', function(){
	
	const items = document.querySelectorAll('.box .item');

	items.forEach(el => el.addEventListener('click', changeState));
	
	
});

function changeState() {
	this.classList.toggle('item-active');
}


/*

	HTMLElement
		classlist
			.add(classname)
			.remote(classname)
			.contains(classname)
			.toggle(classname)

		if(contains(classname))
			remote(classname)
		else
			add(classname)

*/