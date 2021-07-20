AOS.init({
	duration: 800
});


function setLightMode() {
	document.getElementsByClassName("dark-theme")[0].classList.add("light-theme")

	var cardBoxes = document.getElementsByClassName("card-box");
	for(var i = 0; i < cardBoxes.length; i++) {
		cardBoxes[i].classList.add("card-box-light");
	}

	var statsBoxes = document.getElementsByClassName("stats-box");
	for(var i = 0; i < statsBoxes.length; i++) {
		statsBoxes[i].classList.add("stats-box-light");
	}

	var h1 = document.querySelectorAll("h1");
	for(var i = 0; i < h1.length; i++) {
		h1[i].classList.add("h1-light");
	}

	var h3 = document.querySelectorAll("h3");
	for(var i = 0; i < h3.length; i++) {
		h3[i].classList.add("h3-light");
	}

	var h4 = document.querySelectorAll("h4");
	for(var i = 0; i < h4.length; i++) {
		h4[i].classList.add("h4-light");
	}

	var statsCounts = document.getElementsByClassName("stats-count");
	for(var i = 0; i < statsCounts.length; i++) {
		statsCounts[i].classList.add("stats-count-light");
	}
	
	document.getElementsByClassName("mode-box")[0].classList.add("mode-box-light");

}

function removeLightMode() {
	document.getElementsByClassName("dark-theme")[0].classList.remove("light-theme")

	var cardBoxes = document.getElementsByClassName("card-box");
	for(var i = 0; i < cardBoxes.length; i++) {
		cardBoxes[i].classList.remove("card-box-light");
	}

	var statsBoxes = document.getElementsByClassName("stats-box");
	for(var i = 0; i < statsBoxes.length; i++) {
		statsBoxes[i].classList.remove("stats-box-light");
	}

	var h1 = document.querySelectorAll("h1");
	for(var i = 0; i < h1.length; i++) {
		h1[i].classList.remove("h1-light");
	}

	var h3 = document.querySelectorAll("h3");
	for(var i = 0; i < h3.length; i++) {
		h3[i].classList.remove("h3-light");
	}

	var h4 = document.querySelectorAll("h4");
	for(var i = 0; i < h4.length; i++) {
		h4[i].classList.remove("h4-light");
	}

	var statsCounts = document.getElementsByClassName("stats-count");
	for(var i = 0; i < statsCounts.length; i++) {
		statsCounts[i].classList.remove("stats-count-light");
	}

	document.getElementsByClassName("mode-box")[0].classList.remove("mode-box-light");

}


var switchInput = document.getElementsByClassName("form-check-input")[0];
switchInput.addEventListener("click" , function(event) {
	if(event.target.checked === true) {
		removeLightMode();
	} else {
		setLightMode();
	}
});