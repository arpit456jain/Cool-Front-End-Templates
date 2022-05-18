'use strict'
let col=document.querySelector('.longtext');
let bigbar=document.querySelector('.bar');
col.addEventListener('click',function()
{
    bigbar.classList.toggle("change");
});

// let muk=document.querySelector('.mukar');
// let value=0;
// let phat=document.querySelector('.phati');
// let halcho=document.querySelector(".move");
// console.log(halcho);
// muk.addEventListener('click',function()
// {
//     if(value<4501)
//     {
//     value=value+1500;
//     halcho.style.marginLeft=`-${value}px`;
//     halcho.style.transition='1s';
//     console.log(value);
//     }
//     if(value===6000)
//     {
//         value=0;
//          halcho.style.marginLeft=`-${value}px`;
//         halcho.style.transition='0s';
//     }

// })
// phat.addEventListener('click', function()
//   { 
//     if(value===0)
//     {
//         value=6000;
//         value=value-1500;
//         halcho.style.marginLeft=`-${value}px`;
//         halcho.style.transition='0s';
//         console.log(value);
        
//     }
//     else if(value<=6000)
//     {
//         value=value-1500;
//         halcho.style.marginLeft=`-${value}px`;
//         halcho.style.transition='1s';
//     }

// })
// setInterval(myfun,5000);
// function myfun()
// {
//     if(value<4501)
//     {
//     value=value+1500;
//     halcho.style.marginLeft=`-${value}px`;
//     halcho.style.transition='1s';
//     console.log(value);
//     }
//     if(value===6000)
//     {
//         value=0;
//          halcho.style.marginLeft=`-${value}px`;
//         halcho.style.transition='0s';
//     }
// }

const first=document.querySelector('.one');
const second=document.querySelector('.two');
const third=document.querySelector('.three');
const fourth=document.querySelector('.four');
const left=document.querySelector('.mukar');
const right=document.querySelector('.phati');

let iter=0;
let value=0;
let arr=[first,second,third,fourth];
const myfun=function()
{
    value=value+100;
    value=value%400;
    arr[iter].style.transform=`translateX(-${value}%)`;
    arr[iter+1].style.transform=`translateX(-${value}%)`;
    arr[iter+2].style.transform=`translateX(-${value}%)`;
    arr[iter+3].style.transform=`translateX(-${value}%)`;

}
setInterval(myfun,5000);

left.addEventListener('click',function(e){
    myfun();
})

right.addEventListener('click',function(e){
    if(value===0)
    {
        console.log("Execute it\n");
        arr[iter].style.transform=`translateX(-300%)`;
        arr[iter+1].style.transform=`translateX(-300%)`;
        arr[iter+2].style.transform=`translateX(-300%)`;
        arr[iter+3].style.transform=`translateX(-300%)`;
        value=300;
    }
    else{
        value=value-100;
        arr[iter].style.transform=`translateX(-${value}%)`;
        arr[iter+1].style.transform=`translateX(-${value}%)`;
        arr[iter+2].style.transform=`translateX(-${value}%)`;
        arr[iter+3].style.transform=`translateX(-${value}%)`;
    }

})