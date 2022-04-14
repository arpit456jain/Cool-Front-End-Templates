

const body = document.body;
const content = document.querySelector('.js-content');
const blocks = document.querySelectorAll('.block');

const updateOffset = () => {
  requestAnimationFrame(updateOffset);
  body.style.setProperty('--y', content.scrollTop);
  updateProps();
};

const updateProps = () => {
  let i = -1;

  for (let block of blocks) {
    i += 1;
    let top = blocks[i].getBoundingClientRect().top;

    if (top < window.innerHeight * 1.3 && top > window.innerHeight * -1.3) {
      body.style.setProperty(`--yBlock-${i + 1}`, top);
    } else {
      body.style.setProperty(`--yBlock-${i + 1}`, 0);
    }
  }
};

updateProps();
updateOffset();
