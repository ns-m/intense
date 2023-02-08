window.onload = function () {
	
	const divGet = document.querySelector('.some');

	divGet.onclick = function(){
		divGet.innerHTML += 1;
	}

	divGet.onclick = function(){
		divGet.innerHTML += -22;
	}
}
