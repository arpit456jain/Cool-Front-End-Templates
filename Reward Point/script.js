// awards container
var awards = document.querySelector(".awards--1-item-hidden");
// list of new items
var newAwardItem = document.querySelector(".award-item--hidden");
var awardAmountText = document.querySelector(".award-amount-text");


// where the magic happens
function animateFill(points) {
  // initial points to animate to
  var numPoints = Math.min(points, 500);
  // derive percentage from numPoints
  var percent = numPoints / 500;
  // more points = more duration
  var duration = Math.min(Math.max(2, percent * 2), 4);
  // calc leftover points
  var remainder = (points - numPoints) % 500;

  // animate red fill to target amount
  TweenMax.to("#red-fill", duration - 0.5, {
    delay: 0.5,
    rotation: 180 * percent,
    transformOrigin: "center",
    ease: Quint.easeInOut });


  // animate textual content
  TweenMax.to("#points-meter-text", duration, {
    delay: 0.5,
    textContent: points,
    roundProps: ["textContent"],
    transformOrigin: "center",
    ease: Power2.easeInOut,
    // trigger award after animation complete
    onComplete: points > 500 ? resetPoints : null,
    onCompleteParams: [remainder] });


  if (points > 500) {
    awardAmountText.textContent = Math.floor(points / 500) * 5;
  }
}

// handle award achievement
function triggerAward() {
  // add modifier to awards container
  awards.classList.add("awards--new-items");

  // add modifiers to new award item
  newAwardItem.classList.add("award-item--new");



}


function resetPoints(remainder) {
  // trigger award
  triggerAward();

  // delay animating red fill to reset
  TweenMax.to("#red-fill", 1.5, {
    delay: 1.5,
    rotation: 360 + remainder / 500 * 180,
    transformOrigin: "center",
    ease: Quint.easeInOut });


  // delay animating text content to reset
  TweenMax.to("#points-meter-text", 1.5, {
    delay: 1.5,
    textContent: remainder,
    roundProps: ["textContent"],
    transformOrigin: "center",
    ease: Power2.easeInOut });

}


// Animate fill to any value less than 500  
// animateFill(200);

// Handle past 500 points with reset logic 
animateFill(1200);