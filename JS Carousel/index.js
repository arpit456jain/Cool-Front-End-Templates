let nextBtn = document.getElementById("btnNext");
let prevBtn = document.getElementById("btnPrev");
let autoBtn = document.getElementById("btnAuto");

let slides = document.querySelectorAll(".slides");
slides.forEach((element, index) => {
  element.style.left = `${index * 100} %`;
});

let count = 0;

// --------Autometic Sliding ---------
// autoBtn.addEventListener("toggle" , ()=>{
//     setInterval(() => {
//         count++;
//         changingSildes();
//     }, 1500);
//     console.log("toggle");
// });

function autoFunc() {
  console.log("toggle");
  setInterval(() => {
    count++;
    changingSildes();
  }, 1500);
}

// ---------  Manual sliding  ---------
nextBtn.addEventListener("click", () => {
  console.log(count);
  count++;
  changingSildes();
});

prevBtn.addEventListener("click", () => {
  console.log(count);
  count--;
  changingSildes();
});

function changingSildes() {
  if (count === slides.length) {
    count = 0;
  }
  if (count < 0) {
    count = slides.length - 1;
  }
  slides.forEach((e) => {
    e.style.transform = `translateX(-${count * 100}%)`;
  });
}
