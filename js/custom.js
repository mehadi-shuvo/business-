//filter nav ative;
$('.filter-nav ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// banner slider;
$('.banner-slider').slick({
    dots: true,
    autoplay: true,
    prevArrow: '<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slick-next next-arrow"></i>',
});
// about js;
$('.image').slick({
    autoplay: true,
    fade: true,
    arrows: false,
    autoplaySpeed: 1500,
})
//for scrolling;
new WOW().init();
//filter js;
var mixer = mixitup('.filter-content');
// filte popup;
$('.venobox').venobox({
    closeBackground: '#cb8d21',
    spinner: 'cube-grid',
    spinColor: '#cb8d21',
});
// for filter hover direction;
// $('.filter-itm').directionalHover({
//     overlay:"overlay",
//     easing:"linear",
//     speed: 400



// });
//testimonial slide;
$('.testimonial-itm').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    // autoplay: true,
    arrows:false,
    autoplaySpeed: 1500,
    dots: true,
  });
// navBar add and back to top animation;
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
// nav fixed;
    if(scrolling > 250){
        $('nav').addClass('nav-bg');
    }
    else{
        $('nav').removeClass('nav-bg');
    }
    // back to top;
    if(scrolling > 400){
        $('.back-to-top').fadeIn();
    }
    else{
        $('.back-to-top').fadeOut(); 
    }

});

$('.back-to-top').click(function(){
    $('body,html').animate({
        scrollTop : '0',
    },3000);
});


// animation scroll js;
var html_body = $('html, body');
$('nav a').on('click', function(){
    if(location.pathname.replace(/^\//,'') && location.hostname == this.hostname){
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
       if(target.length){
           html_body.animate({
               scrollTop: target.offset().top -0
           }, 1500);
           return false;
       } 
    }
});
// snow fall effect;
$('#snowspawner').letItSnow();
// fanfact counter;
$('.counter').counterUp({
    delay: 10,
    time: 1000
});