const navMenu= document.getElementById('navMenu'),
    sideNavbar= document.getElementById('sideNavbar'),
    navClose= document.getElementById('navClose');

    // showing menu
    sideNavbar.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
    })

    //hiding menu
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
    })