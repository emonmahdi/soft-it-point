$(document).ready(function(){
    $(window).scroll(function(){
        if (window.scrollY > 20) {
          $('#myNavbar').addClass('stickynav');
        }else{
          $('#myNavbar').removeClass('stickynav');
        } 
      });

      $('.carousel').carousel({
        interval: 3000
      })
})