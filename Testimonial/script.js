const quoteOne = document.querySelector('.quote__one');
const quoteTwo = document.querySelector('.quote__two');
const portraitOne = document.querySelector('.portrait__one');
const portraitTwo = document.querySelector('.portrait__two');
const prevBtn = document.querySelector('.arrow_left');
const nextBtn = document.querySelector('.arrow_right');

prevBtn.addEventListener('click', () => {
  quoteOne.classList.toggle('active');
  quoteTwo.classList.toggle('active');
  portraitOne.classList.toggle('active');
  portraitTwo.classList.toggle('active');
});

nextBtn.addEventListener('click', () => {
  quoteOne.classList.toggle('active');
  quoteTwo.classList.toggle('active');
  portraitOne.classList.toggle('active');
  portraitTwo.classList.toggle('active');
});
