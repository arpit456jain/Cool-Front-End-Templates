$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#Move-topBtn').fadeIn();
    } else{
      $('#Move-topBtn').fadeOut();
    }
  });

  $("#Move-topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},800);
  });
});
