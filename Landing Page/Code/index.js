let dropDownMenu = document.getElementsByClassName('dropDown-Menu')[0];
let dropDownBtn = document.getElementById('dropDown');
let menuBtn = document.getElementsByClassName('menuBtn')[0];
let navMenu = document.getElementsByClassName('navLinks')[0];
let hideMenu = document.getElementsByClassName('hideMenu')[0];
dropDownBtn.addEventListener('mouseover', ()=>{
    dropDownMenu.classList.add('show');
})
dropDownBtn.addEventListener("mouseout", ()=>{
    dropDownMenu.classList.remove('show');
})
menuBtn.addEventListener("click" , ()=>{
    navMenu.setAttribute('style', 'display:flex;');
})
hideMenu.addEventListener('click', ()=>{
    navMenu.removeAttribute('style');
})