$(document).ready(function(){
    
    $('.mover').click(function(){
        $('body, html').animate({
            scrollTop: '1200px';
        }, 1500);
    });