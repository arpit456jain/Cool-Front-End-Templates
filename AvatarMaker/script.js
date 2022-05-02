const documentElement = document.documentElement;
const skinTone = document.querySelector("#skin-tone");
const bodySize = document.querySelector("#body-size");
const hairColor = document.querySelector("#hair-color");
const clothingColor = document.querySelector("#clothing-color");
const hair = document.querySelector(".hair");
const hairBehind = document.querySelector(".hair-behind");
const hairStyle = document.querySelector("#hair-style");
const hairStyles = [...document.querySelector(".hair-styles").children];
const hairColors = ["#fff", "#efab48", "#e91e5d", "#090161"];
const clothingColors = ["#feb0ae", "#e82459", "#4e51fe", "#251aa8", "#09005d"];

hairStyles.map((element, index) => {
  hairStyles[index] = element.id;
});

//min="0.9" max="1.2"
gsap.set(".sizeable", {
  scaleX: 1,
  transformOrigin: "center" });

bodySize.setAttribute("value", Math.random() * 0.2 + 1);

//min="20" max="85"
skinTone.setAttribute("value", Math.random() * 65 + 20);

hairStyle.setAttribute("max", hairStyles.length);
hairStyle.setAttribute("value", Math.round(hairStyles.length * Math.random()));

hairColor.setAttribute("max", hairColors.length - 1);
var hairIndex = Math.round(hairColors.length * Math.random());
hairColor.setAttribute("value", hairIndex);

clothingColor.setAttribute("max", clothingColors.length - 1);
var clothingIndex = Math.round(clothingColors.length * Math.random());
clothingColor.setAttribute("value", clothingIndex);

documentElement.style.setProperty("--hair-color", hairColors[hairIndex]);
documentElement.style.setProperty(
"--clothing-color",
clothingColors[clothingIndex]);


const update = () => {
  documentElement.style.setProperty(
  "--skin-lightness",
  `${Math.round(skinTone.value)}%`);

  hair.setAttribute("href", `#${hairStyles[hairStyle.value - 1]}`);
  hairBehind.setAttribute("href", `#${hairStyles[hairStyle.value - 1]}-behind`);
  gsap.set(".sizeable", {
    scaleX: bodySize.value });

  gsap.to("html", {
    "--hair-color": hairColors[Number(hairColor.value)],
    ease: "power2.inOut" });

  console.log(hairColors[Number(hairColor.value)]);

  gsap.to("html", {
    "--clothing-color": clothingColors[Number(clothingColor.value)],
    ease: "power2.inOut" });

};

update();

function blink() {
  var blinkDuration = 0.15;
  gsap.to(".eye", {
    scaleY: 0.15,
    duration: blinkDuration,
    ease: "power2.out",
    transformOrigin: "center" });

  gsap.to(".eye", {
    scaleY: 1,
    delay: blinkDuration,
    duration: blinkDuration,
    ease: "power2.in",
    onComplete: () => {
      setTimeout(blink, Math.random() * 2000 + 1000);
    } });

}

blink();

window.addEventListener("mousemove", e => {
  gsap.to(".eyes", {
    x: (e.offsetX / window.innerWidth - 0.5) * 1.5,
    y: (e.offsetY / window.innerHeight - 0.5) * 0.6 });

});

var soundAllowed = function (stream) {
  window.persistAudioStream = stream;
  var audioContent = new AudioContext();
  var audioStream = audioContent.createMediaStreamSource(stream);
  var analyser = audioContent.createAnalyser();
  audioStream.connect(analyser);
  analyser.fftSize = 1024;

  var frequencyArray = new Uint8Array(analyser.frequencyBinCount);

  var doDraw = function () {
    requestAnimationFrame(doDraw);
    analyser.getByteFrequencyData(frequencyArray);
    var adjustedLength;
    var value = 0;
    for (var i = 0; i < 100; i++) {
      value += frequencyArray[i];
    }
    var average = value / 100;
    var percent = Math.min((average - 10) / 180, 1);
    var scale = Math.max(percent, 0.15);

    gsap.set(".mouth", {
      scaleY: scale,
      transformOrigin: "center",
      visibility: scale > 0.15 ? "visible" : "hidden" });


    gsap.set(".smile", {
      transformOrigin: "center",
      visibility: scale <= 0.15 ? "visible" : "hidden" });

  };
  doDraw();
};

var soundNotAllowed = function (error) {};

navigator.getUserMedia({ audio: true }, soundAllowed, soundNotAllowed);
var ease = "power2.inOut";

var waveAnimation = gsap.timeline({ paused: true });

waveAnimation.to(
".arm-right",
{
  rotation: -40,
  transformOrigin: "4 8",
  duration: 0.4,
  ease: ease },

"0");

waveAnimation.to(
".forearm-right",
{
  rotation: -165,
  transformOrigin: "6.5 6",
  duration: 0.4,
  ease: ease },

"0");

waveAnimation.to(
".hand-right",
{
  rotation: -10,
  transformOrigin: "6 2",
  duration: 0.4,
  ease: ease },

"0");


waveAnimation.to(
".arm-right",
{
  rotation: -35,
  duration: 0.4,
  ease: ease },

"0.4");

waveAnimation.to(
".forearm-right",
{
  rotation: -145,
  duration: 0.4,
  ease: ease },

"0.4");

waveAnimation.to(
".hand-right",
{
  rotation: 15,
  duration: 0.4,
  ease: ease },

"0.4");


waveAnimation.to(
".arm-right",
{
  rotation: -40,
  duration: 0.4,
  ease: ease },

"0.8");

waveAnimation.to(
".forearm-right",
{
  rotation: -165,
  duration: 0.4,
  ease: ease },

"0.8");

waveAnimation.to(
".hand-right",
{
  rotation: -10,
  duration: 0.4,
  ease: ease },

"0.8");


waveAnimation.to(
".arm-right",
{
  rotation: -35,
  duration: 0.4,
  ease: ease },

"1.2");

waveAnimation.to(
".forearm-right",
{
  rotation: -145,
  duration: 0.4,
  ease: ease },

"1.2");

waveAnimation.to(
".hand-right",
{
  rotation: 15,
  duration: 0.4,
  ease: ease },

"1.2");


waveAnimation.to(
".arm-right",
{
  rotation: -40,
  duration: 0.4,
  ease: ease },

"1.6");

waveAnimation.to(
".forearm-right",
{
  rotation: -165,
  duration: 0.4,
  ease: ease },

"1.6");

waveAnimation.to(
".hand-right",
{
  rotation: -10,
  duration: 0.4,
  ease: ease },

"1.6");


waveAnimation.to(
".arm-right",
{
  rotation: 0,
  duration: 0.4,
  ease: ease },

"2");

waveAnimation.to(
".forearm-right",
{
  rotation: 0,
  duration: 0.4,
  ease: ease },

"2");

waveAnimation.to(
".hand-right",
{
  rotation: 0,
  duration: 0.4,
  ease: ease },

"2");


waveAnimation.timeScale(1.9);

function wave() {
  waveAnimation.restart();
}