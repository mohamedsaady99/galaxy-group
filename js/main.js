$(document).ready(function(){
    
    $('nav .dropdown').mouseenter(function(){
        $('nav .dropdown .dropdown-menu').css('display','flex')
    });
    $('nav .dropdown .dropdown-menu').mouseleave(function(){
        $('nav .dropdown .dropdown-menu').css('display','none')
    });
    $('nav .dropdown ').mouseleave(function(){
        setTimeout(function(){
            $('nav .dropdown .dropdown-menu').css('display','none')
        },10000);
    });
// Start Customers
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        dotsEach:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsiveClass:true,
         tagePadding: 90,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:1,
            },
            767:{
                items:2,
            },
            1000:{
                items:5,
                loop:true
            }
        }
     });
    // End Customers
    // Start Team
    $('.team .card-1 ').mouseenter (function(){
        $('.team .card-1 .card-body').css({
            'transition':'1.5s',
            'color':'white',
            'backgroundColor':'#f48024',
            'paddingTop':'25px',
            'paddingBottom':'25px',
        });
        $('.team .card-1 .card-body .media').css({
            'display':'block'
            });
        $('.team .card-1 .card-body h6').css({
            'color':'lightgray'
            });
    });
    $('.team .card-1 ').mouseleave (function(){
        $('.team .card-1 .card-body').css({
            'color':'#006a6e',
            'backgroundColor':'white',
            'paddingTop':'10px',
            'paddingBottom':'10px',
            'transition':'2s',
        });
        $('.team .card-1 .card-body .media').css({
            'display':'none'
            });
        $('.team .card-1 .card-body h6').css('color','#f48024');
    });
    
    $('.team .card-2 ').mouseenter (function(){
        $('.team .card-2 .card-body').css({
            'color':'white',
            'backgroundColor':'#f48024',
            'paddingTop':'25px',
            'paddingBottom':'25px',
            'transition':'1.5s',
        });
        $('.team .card-2 .card-body .media').css({
            'display':'block'
            });
        $('.team .card-2 .card-body h6').css({
            'color':'lightgray'
            });
    });
    $('.team .card-2 ').mouseleave (function(){
        $('.team .card-2 .card-body').css({
            'color':'#006a6e',
            'backgroundColor':'white',
            'paddingTop':'10px',
            'paddingBottom':'10px',
            'transition':'2s',
        });
        $('.team .card-2 .card-body .media').css({
            'display':'none'
            });
        $('.team .card-2 .card-body h6').css('color','#f48024');
    });
    $('.team .card-3 ').mouseenter (function(){
        $('.team .card-3 .card-body').css({
            'color':'white',
            'backgroundColor':'#f48024',
            'paddingTop':'25px',
            'paddingBottom':'25px',
            'transition':'1.5s',
        });
        $('.team .card-3 .card-body .media').css({
            'display':'block'
            });
        $('.team .card-3 .card-body h6').css({
            'color':'lightgray'
            });
    });
    $('.team .card-3 ').mouseleave (function(){
        $('.team .card-3 .card-body').css({
            'color':'#006a6e',
            'backgroundColor':'white',
            'paddingTop':'10px',
            'paddingBottom':'10px',
            'transition':'2s',
        });
        $('.team .card-3 .card-body .media').css({
            'display':'none'
            });
        $('.team .card-3 .card-body h6').css('color','#f48024');
    });
    //End Team
        var goUpButton = document.getElementById('go-up');
        window.onscroll = function(){
            'use strict';
            if(window.pageYOffset >= 1500)
                {
                    goUpButton.style.display ='block';
                }
            else
                {
                    goUpButton.style.display = 'none'; 
                }
        };
});
