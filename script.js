// Navbar Toggling starts

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Navbar Toggling end

// scroll to top starts
var scrolltop = $("#scroll-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 80) {
    scrolltop.addClass("active");
  } else {
    scrolltop.removeClass("active");
  }
});

scrolltop.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "200");
});
// scroll to top ends

fetch("style_links.json")
  .then((response) => response.json())
  .then((data) => {
    let links = data;

    for (let i = 0; i < links.length; i++) {
      console.log(links.length);
      console.log(links);
      let StyleBoxDiv = document.createElement("div");
      StyleBoxDiv.innerHTML = `<div class="stylebox">
            <div class="image">
                 <img src="https://raw.githubusercontent.com/arpit456jain/Cool-Front-End_Templates/master/${links[i].name}/preview.png" alt="">
             </div>
            <p>${links[i].name}</p>
      
         <div class="btn-group">
            <a target="_blank" href="${links[i].link}">View</a>
        </div>
        
           

            </div>`;
      document.getElementById("styles").appendChild(StyleBoxDiv);
    }
  });

//<a target="_blank" href="https://github.com/arpit456jain/Cool-Front-End-Templates/tree/master/${links[i].name}" class="code">Code</a>
