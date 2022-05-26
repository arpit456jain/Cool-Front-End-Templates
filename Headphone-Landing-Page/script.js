const toggleButton = document.getElementsByClassName("toggle-button")[0];

const menu = document.getElementsByClassName("menu")[0];
toggleButton.addEventListener('click', ()=>{
    menu.classList.toggle('active');
})