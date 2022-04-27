const bars = document.querySelector(".navbar-mobile");
const linkList = document.querySelector("[data-linkList]")
const btnShorten = document.querySelector("[data-shorten]");
const localStorageLink = JSON.parse(localStorage.getItem("links"));
let allLinks = localStorage.getItem("links") !== null ? localStorageLink : [];


const validateInput = (inputValue) => {
	const pattern = new RegExp('^(https?:\\/\\/)?'+ 
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
    '(\\?[;&a-z\\d%_.~+=-]*)?'+
    '(\\#[-a-z\\d_]*)?$','i');
	
	
    const isValid = inputValue !== "" && !!pattern.test(inputValue);

    return isValid;
}

const addClassInvalid = (input, textError) => {
	input.classList.add("invalid-input");
    textError.classList.add("message-erro");
}


const removeClassInvalid = (input, textError) => {
	if(input.classList.contains("invalid-input")){
		input.classList.remove("invalid-input");
		textError.classList.remove("message-erro");
	}
}


const createLinkItem = (original_link, short_link) => {
	const linkList = document.querySelector("[data-linkList]");
    const link = `
					<li class="url-listItem flex">
						<p class="url-original">${original_link}</p>
						<div>
							<p class="url-shortened" data-shortLink=${short_link}>${short_link}<button type="button" class="btn-medium">Copy</button></p>
						</div>
					</li>
                `	
	linkList.innerHTML += link;
}


const addLinkOnSession = (original_link, short_link) => {
	const newLink = {
		original_link,
		short_link
	} 
	
	allLinks.push(newLink);
	updateLocalStorage()
}

const updateLocalStorage = () => localStorage.setItem("links", JSON.stringify(allLinks));

const removeLocalStorage = () => {
	const linkList = document.querySelector("[data-linkList]");
	document.querySelectorAll("lista")
	const removeLink = linkList.children[0];
	
	if(allLinks.length === 5){
		linkList.removeChild(removeLink);
		allLinks.shift();
		updateLocalStorage();
	}
	
}

const handleMenu = (event) => {
    const navbar = document.querySelector(".navbar");
    const isActive = navbar.classList.contains("active");
    console.log(event)
   
    if(event.type === "touchstart"){
        event.preventDefault();
    }
    
    event.currentTarget.setAttribute("aria-expanded", isActive? false : true)
    navbar.classList.toggle("active");
}


const init = () => {
	window.addEventListener("load", () => {
		if(allLinks.length > 0){
			allLinks.map(({ original_link, short_link }) => {
			createLinkItem(original_link, short_link);
		})
	}
	});
	
	bars.addEventListener("click", handleMenu);
	bars.addEventListener("touchstart", handleMenu, { passive: false });

	linkList.addEventListener("click", (element) => {
		const copyBtn = element.target;
	
		if(copyBtn.type === "button"){
			const shortLink = copyBtn.parentElement.getAttribute("data-shortLink");
			const input = document.createElement("input");
			copyBtn.innerHTML = "Copied!";
			copyBtn.classList.add("copied")
			input.value = shortLink;
			navigator.clipboard.writeText(input.value)
			.then(() => console.log("successfully copied"))
			.catch(err => console.log("Something went wrong", err))
		}
		
	})
	btnShorten.addEventListener("click", (event) => {
		const urlInput = document.querySelector("[data-urlInput]");
		const formTips = document.querySelector("[data-formTips]");
		event.preventDefault();
	
		if(!validateInput(urlInput.value)){
			addClassInvalid(urlInput, formTips)
			return
		}
		removeClassInvalid(urlInput, formTips)
	
		fetch(`https://api.shrtco.de/v2/shorten?url=${urlInput.value}`)
		.then(data => data.json(data)
			.then(({ result: {short_link} } = response) => {	
	
				addLinkOnSession(urlInput.value, short_link);
				removeLocalStorage();
				createLinkItem(urlInput.value, short_link);	
				urlInput.value = "";
			}
			)
		)
		
	})
	
}

init()

