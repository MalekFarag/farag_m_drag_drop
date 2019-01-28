(() => {
	console.log('js is ok')
	// set up the puzzle pieces and boards
	// 
	//document.querySelector('h1').textContent = 'bonjour' (this changes the text)
	
	function changeHeadline() {
		document.querySelector('h1').textContent = 'bonjour';
		document.querySelector('p').textContent = 'oh no you dingus!yall just got CLICKED';
	}
		

	const theButton = document.querySelector('#buttonHolder img', changeHeadline) //this targets 'theButton' ID and links it to the function


	theButton.addEventListener('click', changeHeadline); //plays function fter 'loading page' or after event listener happens


	
})();
