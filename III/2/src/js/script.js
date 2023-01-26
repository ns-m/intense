window.addEventListener('load', function(){
		
	const box = document.querySelector('.box');
	
	// box.addEventListener('click', function(e){
		
	// 	const elem = e.target.closest('.item');

	// 	if(elem !== null && box.contains(elem)){
	// 		changeColor(elem);
	// 	}	
	
	// });
	delegate(box, '.item', 'click', function(){
		const colorsForBtn = ['#f00', '#ff0', '#0f0'];
		let rdmNum = Math.floor(Math.random() * colorsForBtn.length);
		this.style.color = colorsForBtn[rdmNum];
	});
});

// function changeColor(el) {
// 	const colorsForBtn = ['#f00', '#ff0', '#0f0'];
// 	let rdmNum = Math.floor(Math.random() * colorsForBtn.length);
// 	this.style.color = colorsForBtn[rdmNum];
// };

function delegate(container, selector, eventName, handler) {
	container.addEventListener(eventName, function(e){
		
		const elem = e.target.closest(selector);

		if(elem !== null && box.contains(elem)){
			//handler(elem);
			handler.call(elem, e);
		}	
	
	});
}