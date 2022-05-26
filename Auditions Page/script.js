
let count = 0; // A variable which will store the no. of times the button was clicked

function changeBackground() {
    
    count++; // Every time the button is clicked this function is called and the value of count variable is increased by 1

    if (count == 1) {
        document.getElementById('Change-Background-Image').style.backgroundImage = "url('https://i.pinimg.com/originals/4e/30/c9/4e30c95dc885f880a2c2797fdee0e042.gif')";                     // Here first we get the element by its id i.e Change-Background-Image (The Body Tag's Id)
        count++;
    }
    if (count == 2) {
        document.getElementById('Change-Background-Image').style.backgroundImage = "url('https://i.pinimg.com/originals/bc/55/51/bc5551ac237a9ef4d8e9575662f2e106.gif')";
    }
    if (count == 3) {
        document.getElementById('Change-Background-Image').style.backgroundImage = "url('https://i.pinimg.com/originals/30/2b/df/302bdf53ac8fb5022480fd2fe37f1904.gif')";
    }
    if (count == 4) {
        document.getElementById('Change-Background-Image').style.backgroundImage = "url('https://i.pinimg.com/originals/30/b8/17/30b8174c6f1a07e0af9bcf41fec3a5f5.gif')";
    }
    if (count == 5) {
        document.getElementById('Change-Background-Image').style.backgroundImage = "url('https://i.pinimg.com/originals/88/15/c1/8815c1530ba8b997d50d365e5875d1d7.gif')";
    }
    if (count == 6) {
        document.getElementById('Change-Background-Image').style.backgroundImage = "url('https://i.pinimg.com/originals/7d/3d/f2/7d3df21a320ecac33bfedce6d85ec42c.gif')";
    }
    if (count == 7) {
        document.getElementById('Change-Background-Image').style.backgroundImage = "url('https://i.pinimg.com/originals/be/b2/61/beb261df0f3be74622ef82adecaf461d.gif')";
    }

    if (count == 8) {
        document.getElementById('Change-Background-Image').style.backgroundImage = "url('https://i.pinimg.com/originals/0f/88/3e/0f883e6f5db348671c1e26a7dfd2e5f3.gif')";
        count=0; //To restart the loop
    }
}