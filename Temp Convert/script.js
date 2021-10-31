var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input', function () {
    let celValue = this.value;
    let fahValue = (celValue * 9 / 5) + 32;
    if (!Number.isInteger(fahValue)) {
        // No. of Digits we want after decimal
        fahValue = fahValue.toFixed(4);
    }
    fah.value = fahValue;
});

fah.addEventListener('input', function () {
    let fahValue = this.value;
    let celValue = (fahValue - 32) * 5 / 9;
    if (!Number.isInteger(celValue)) {
        celValue = celValue.toFixed(4);
    }
    cel.value = celValue;
});



function select() { }