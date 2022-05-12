(function($) {
"use strict";

    jQuery('.main-menu').meanmenu({
        meanMenuContainer: 'manu-place',
        meanScreenWidth: "768",

    });

// Slider area 
    $('.slider-active').owlCarousel({
        loop:true,
        nav:true,
        navText:['Back','Next'],

        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    // Product area 
    $('.product-active').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:['Back','Next'],

        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:3
            },

            1200:{
                items:4
            }
        }
    })
    // Categori area 
    $('.categori-active').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        navText:['Back','Next'],

        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    })
    // Blog Area 
    $('.blog-active').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        navText:['Back','Next'],

        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:3,
            }
        }
    })
    // brand area 
    $('.brand-active').owlCarousel({
        loop:true,
        nav:false,

        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:5,
            },
            1200:{
                items:6,
                loop:false,
            },
            1400:{
                items:6,
                loop:false,
            }
        }
    })
    // Instagram area 
    $('.instagram-active').owlCarousel({
        loop:true,
        margin:5,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3,
                                margin:10
            },
            992: {
                items: 5,
                
            },
            1200: {
                items: 6,
                loop:false,
            }
        }
    })
    // Nice Select
    $('select').niceselect()

})(jQuery)
