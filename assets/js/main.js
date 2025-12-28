$(document).ready(function(){

    $(".alumni-carousel").owlCarousel({
        loop: true,       
        margin: 20,     
        autoplay: true,  
        autoplayTimeout: 2000, 
        autoplayHoverPause: true,
        nav: false,       
        dots: true,      
        responsive:{
            0:{
                items: 1    
            },
            768:{
                items: 2   
            },
            992:{
                items: 3     
            },
            1200:{
                items: 4   
            }
        }
    });

    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,          
        dots: true,     
        autoplay: true,   
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1    
            },
            768: {
                items: 2   
            },
            1000: {
                items: 3  
            }
        }
    });
});