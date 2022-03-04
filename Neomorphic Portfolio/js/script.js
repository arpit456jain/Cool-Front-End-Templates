let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-moon');
  if (themeToggler.classList.contains('fa-moon')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
}

var path = document.querySelector('#star-path');


var pathLength = path.getTotalLength();


path.style.strokeDasharray = pathLength + ' ' + pathLength;


path.style.strokeDashoffset = pathLength;


path.getBoundingClientRect();

// When the page scrolls...
window.addEventListener("scroll", function (e) {



  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;

  // When complete, remove the dash array, otherwise shape isn't quite sharp
  // Accounts for fuzzy math
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";

  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
  }

});

var preload = document.getElementById('loader');
function preloader() {
  preload.style.display = 'none';
}
function snap() {
  var thanos = [document.getElementById('about'), document.getElementById('projects'),]
  const newThanos = thanos.map((x) => { return x.classList.add('disap'); });
}


window.addEventListener('scroll', function(){
  var target=[document.querySelector('.parright'),document.querySelector('.parleft')];
  var i=0, len=target.length;
  for(i; i<len; i++){
      var pos=window.pageYOffset * target[i].dataset.rate;
      
      target[i].style.transform='translate('+pos+'px , 0px)';
  }
})