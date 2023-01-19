window.addEventListener ('load', function() {	
	const divGet = document.querySelector('.some');

	divGet.addEventListener('click', function(){
		divGet.innerHTML += -1;
	});

	divGet.addEventListener('click', function(){
		divGet.innerHTML += -22;
	});
	}
);
