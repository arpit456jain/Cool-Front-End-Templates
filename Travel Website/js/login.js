$(".txtb input").on("focus",function(){
    $(this).addClass("focus");
});

$(".txtb input").on("blur",function(){
    if($(this).val() == "")
    $(this).removeClass("focus");
});

const log = document.getElementById('formss');
const reg = document.getElementById('reg-formss');

const logbtn = document.getElementById('log-toggle');
const regbtn = document.getElementById('reg-toggle');

logbtn.addEventListener('click', function handleClick() {
    reg.style.display = 'block';
    log.style.display = 'none';
});

regbtn.addEventListener('click', function handleClick() {
    log.style.display = 'block';
    reg.style.display = 'none';
});