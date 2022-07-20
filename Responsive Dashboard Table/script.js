

const menubtn =  document.getElementById("aps_nav_menubtn");
const sidebar = document.getElementById("aps_sidebar");
menubtn.addEventListener("click",()=>{
    sidebar.classList.toggle("active");
})