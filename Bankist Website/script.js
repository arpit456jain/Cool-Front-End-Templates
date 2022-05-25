'use strict';

///////////////////////////////////////
// Modal window
const nav=document.querySelector('.nav');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const section1=document.querySelector('#section--1');
section1.scrollTo({behavior:'smooth'});




const randomInt=(min,max)=>Math.floor(Math.random()*(max-min+1)+min);
const randomColor=()=>`rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;




// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id=this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// })


document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
     const id=e.target.getAttribute('href');
     document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }});

const tabs=document.querySelectorAll('.operations__tab');
const tabsContainer=document.querySelector('.operations__tab-container');
const tabsContent=document.querySelectorAll('.operations__content');


tabsContainer.addEventListener('click',function(e){
  const clicked=e.target.closest('.operations__tab');

  if(!clicked){
    return;
  }
  tabs.forEach(function(t){
    t.classList.remove('operations__tab--active');
    tabsContent.forEach(function(c){
      c.classList.remove('operations__content--active');
    })
  })
  console.log(clicked.dataset.tab);
  clicked.classList.add('operations__tab--active');

 document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

})


///meu fade animation

const handleHover=function(e,opacity){
  if(e.target.classList.contains('nav__link')){
    const link=e.target;
    const sibblings=link.closest('.nav').querySelectorAll('.nav__link');
    const logo=link.closest('.nav').querySelector('img');
  sibblings.forEach(function(el){
    if(el!==link){
      el.style.opacity=opacity;
    }
  })
  logo.style.opacity=opacity;
  }
}


nav.addEventListener('mouseover',function(e){
  handleHover(e,0.5);
});
nav.addEventListener('mouseout',function(e){
  handleHover(e,1);
});



////sticky navigation
// const initial=section1.getBoundingClientRect();
// console.log(initial);
// window.addEventListener('scroll',function(){
//   console.log(window.scrollY);
//   if(window.scrollY>initial.top){
//     nav.classList.add('sticky');
//   }
//   else{
//     nav.classList.remove('sticky');
//   }
// })

// const obscallback=function(entries,observer){
//   entries.forEach(entry=>{
//     console.log(entry);
//   })
// }

// const options={
//   root:null,
//   threshold:,

// }
const header=document.querySelector('.header');

const stickynav=function(entries,observer){
  const [entry]=entries;
  // console.log(entry);
  if(!entry.isIntersecting)
  {
    nav.classList.add('sticky');
}
  else{
    nav.classList.remove('sticky');
  }
}

const headerObserver=new IntersectionObserver(stickynav,{
  root:null,
  threshold:0,
  rootMargin:'-90px'

});
headerObserver.observe(header);







////Lazy loading elements
const allSections=document.querySelectorAll('.section');
// ele.forEach(it=>{
//   it.classList.add('section--hidden');
// })

//Now we reveal sections
const revealsection=function(entries,observer)
{
  const [entry]=entries;
  if(!entry.isIntersecting)
  {return;}
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);

}

const sectionobserver=new IntersectionObserver(revealsection,{
  root:null,
  threshold:0.15,
});

allSections.forEach(function(section){
  sectionobserver.observe(section);
  section.classList.add('section--hidden');
})



///lazy loading images in js

const imgtargets=document.querySelectorAll('img[data-src]');


const loadingimg=function(entries,observer){
  const[entry]=entries;
console.log(entry);
  if(!entry.isIntersecting)return;


  //REplace src with data-scr attribute
  entry.target.src=entry.target.dataset.src;
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');

  })
  observer.unobserve(entry.target);
};


const imgobserver=new IntersectionObserver(loadingimg,{
  root:null,
  threshold:0,
  rootMargin:'-200px',
})
imgtargets.forEach(function(img){
  imgobserver.observe(img);
})





///This is slider working

let currentslide=0;

const slides=document.querySelectorAll('.slide');
slides.forEach(function(s,i){
  s.style.transform=`translateX(${100*i}%)`;
})
const slider=document.querySelector('.slider');
// slider.style.transform='scale(0.4) translateX(-800px)';
// slider.style.overflow='visible';


const maxslide=slides.length;

const btnleft=document.querySelector('.slider__btn--left');
const btnright=document.querySelector('.slider__btn--right');


const gotoslide=function(slide){
  slides.forEach(function(s,i){
    s.style.transform=`translateX(${100*(i-slide)}%)`})
}
// gotoslide(0);

const nextslide=function(){
  if(currentslide===maxslide-1){
    currentslide=0;
  }
  else{
    currentslide++;
}
gotoslide(currentslide);
activedot(currentslide)
}

const prevslide=function(){
  if(currentslide===0){
    currentslide=maxslide-1;
  }
  else{
    currentslide--;
  }
  gotoslide(currentslide);
  activedot(currentslide);
}

btnright.addEventListener('click',nextslide);
btnleft.addEventListener('click',prevslide);


document.addEventListener('keydown',function(e){
  if(e.key==='ArrowLeft') prevslide();
  e.key==='ArrowRight' && nextslide();
})


//Implementing dots
const dotcontainer=document.querySelector('.dots');

const dots=function(){
  slides.forEach(function(s,i){
    dotcontainer.insertAdjacentHTML('beforeend',`<button class="dots__dot" data-slide="${i}"></button>`)

  })

};
// dots()



const activedot=function(slide){
  document.querySelectorAll('.dots__dot').forEach(function(dot){
    dot.classList.remove('dots__dot--active');
  })

document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');

}
// activedot(0);

dotcontainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot'))
  {
    const {slide}=e.target.dataset;
    console.log(slide);
    gotoslide(slide);
    activedot(slide);
  }
})
const init=function(){
  gotoslide(0);
  dots()
  activedot(0);
}
init();