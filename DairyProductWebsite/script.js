const reviewBlock=document.querySelector('.ReviewContent');
console.log("helo wold");
const data=[
    {
        name:'Heather.J',
        headingReview:'Very pleased',
        text:'Everything from milk, lassi, ghee, butter, panner available at competitive prices with good quality. Hygeine is taken care of very specifically.',
    },
    {
        name:'Kimberly D',
        headingReview:'Great products',
        text:'Go for any milk product you dream of from lassi to butter and from chaaj to real milk just have it no questions asked.'
    },
    {
        name:'Louis D',
        headingReview:'Amazing price',
        text:'Good for fresh cheese,milk ,lassi and other milk products, you can try masala cheese and bada for dahi. Everything is in the right price'
    },
    {
        name:'Karen K',
        headingReview:'Healthy product',
        text:'Products here are very healthy and one can feel the healthiness while consuming it.I recommend everyone to have a taste atleast once'
    }
];


reviewBlock.innerHTML='';
data.forEach((data,index)=>{
    const html=`<div class="review1">
<div class="customer-name">${data.name}<img class="tickmark" src="correct.png" alt=""></div>
<div class="star">
    <img src="star.png" alt="">
    <img src="star.png" alt="">
    <img src="star.png" alt="">
    <img src="star.png" alt="">
    <img src="star.png" alt="">
</div>
<div class="headingReview">${data.headingReview}</div>
<p class="actualReview">${data.text}</p>
</div>`;

reviewBlock.insertAdjacentHTML('beforeend',html);
})