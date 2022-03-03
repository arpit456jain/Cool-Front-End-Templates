// animation keyframes for icons
(function() { //IIFE function and encapsulated function
    //this type of same technique is used by nodejs in modules
    let socials = document.querySelectorAll('.social div');
    socials.forEach(function(social, index) {
        social.style.animation = `movein .6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/7 + 0.2}s`; //using template strings to perform the delay
    })

    let rocketpieces = document.querySelectorAll('.rocket-body span');
    let rocket = document.querySelector('.rocket');
    let triggerStart = window.innerHeight / 5; //to delay the animation
    let rocketOffsetTop = rocket.offsetTop;
    // offset for below line on rocket
    let thirdOffsetTop = rocketpieces[2].offsetTop;
    document.addEventListener('scroll', () => {
        if (window.scrollY > rocketOffsetTop - triggerStart) {
            rocketpieces[0].classList.add('active');
            rocketpieces[1].classList.add('active');
        } else {
            rocketpieces[0].classList.remove('active');
            rocketpieces[1].classList.remove('active');
        }


        if (window.scrollY > (thirdOffsetTop - triggerStart)) {
            rocketpieces[2].classList.add('active');
        } else {
            rocketpieces[2].classList.remove('active');
        }
    })
}())