function processInit(){
	var resizeInputs=document.querySelectorAll("input[data-resize-input]");
	for(var i=0;i<resizeInputs.length;i++){
		var resizeInput = resizeInputs[i];
		resizeInput.addEventListener("change",onInputChange);
	}
	window.addEventListener("resize",onResize);
	function onInputChange(e){
		var label = e.target.parentElement.querySelector("label");
		var elements = label.querySelectorAll("*[data-resize-element]");
		for(var i = 0;i<elements.length;i++){
			var element = elements[i];
			var targetHeight=e.target.checked?element.scrollHeight+"px":0;
			element.style.maxHeight=targetHeight;
		}
	}
	function onResize(){
		for(var i=0;i<resizeInputs.length;i++){
			var resizeInput = resizeInputs[i];
			onInputChange({target:resizeInput});
		}
	}
}

processInit();