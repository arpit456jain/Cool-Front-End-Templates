let root = document.documentElement
// let rs = getComputedStyle(r)
let hamburger = document.getElementById("hamburger_outer")
let links_outer = document.getElementById("links_outer")
let landing_page = document.getElementById('landing_page');
let links = document.querySelectorAll("#links")
let navbar = document.getElementById("navbar")
let catch_phrase = document.querySelectorAll(".catch_phrase")
let dark_mode_icons = document.getElementById("dark_mode_icons");
let dark_mode_icons1 = document.getElementById("dark_mode_another_icons")
let typing_area = document.getElementById("text1")
let counter = document.getElementById("counter")
let words = ["Drones", "Motors", "Gyroscopes"]
let count = 0
let index = 0
let text = ""
let alphabet = ""

function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("name_input").value,
        to_name: "Hysky Team",
        subject: document.getElementById("subject_input").value,
        email_name: document.getElementById("email_input").value,
        message: document.getElementById("message").value 
    }
    emailjs.send('service_uu0gs4g', 'template_236i1vl', tempParams)
    .then(function(res){
        console.log("success", res.status)
        res.status == 200 ? alert("Thank you, Email has been sent") : alert("There was a problem while sending the Email")
    })

}

hamburger.addEventListener("click", () =>{
    links_outer.classList.toggle("links_another")
    hamburger.classList.toggle("burger")

})

let type = () =>{
    if(count === words.length){
        count = 0
    }
    text = words[count]
    alphabet = text.slice(0, ++index)
    typing_area.innerHTML = alphabet
    if(alphabet.length === text.length){
        index = 0
        count++
    }
    setTimeout(type, 200)

}
type()

// let dark_mode = () =>{
//     if(dark_mode_icons.className == "far fa-moon"){
//         root.style.setProperty("--background_color", "#1C1522")
//         root.style.setProperty("--heading_color", "rgb(243, 240, 240)")
//         root.style.setProperty("--navbar_color", "#1C1522")
//         root.style.setProperty("--navbar_links", "rgb(243, 240, 240)")
//     }else{
//         root.style.setProperty("--background_color", "#F6F9F9")
//         root.style.setProperty("--heading_color", "#31343C")
//         root.style.setProperty("--navbar_color", "#white")
//         root.style.setProperty("--navbar_links", "blac")

//     }

//     dark_mode_icons.className == "far fa-moon" ? dark_mode_icons.className = "far fa-sun" : dark_mode_icons.className = "far fa-moon"

// }
let target = 222
let num = 0
let counting = () =>{
    if(+counter.innerHTML<target){
        counter.innerHTML = +counter.innerHTML + 12 
    }else{
    }
    setTimeout(counting, 50)
    
}
counting()

// dark_mode_icons.addEventListener("click", dark_mode);
// dark_mode_icons1.addEventListener("click", dark_mode)
