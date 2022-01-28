var winHeight;
var footerHeight;
var sectionId;
var sectionPosition;
var fromTop;



function sectionHeight () {
    winHeight = $(window).height();
    footerHeight = $('.main-footer').outerHeight();
    console.log(winHeight);
    $('#home, #about, #gallery').css('min-height', winHeight);
    $('#contact').css('min-height', winHeight - footerHeight);
}

sectionHeight();
$(window).on('resize', function () {
    sectionHeight();
});

$('nav, .nav-button').on('click', function() {
    $('nav').fadeToggle(300);
    $('.nav-button').toggleClass('white');
});

$('nav a').on('click', function(e) {
    e.preventDefault();
    
    sectionId = $(this).attr('href');
    sectionPosition = $(sectionId).offset().top;
    $('html, body').animate({
        scrollTop : sectionPosition
    }, 1000);
});

$(window).on('scroll', function() {
    fromTop = $(window).scrollTop();
    if(fromTop > 100) {
        $('.main-header').css('padding', '10px 40px');
        $('.nav-button').css('top', '25px');
    }else{
        $('.main-header').css('padding', '30px 40px');
        $('.nav-button').css('top', '40px');
    }
})

$('#contact-form').validate();
// $('#gallery .img-holder a').magnificPopup({
//     type : 'image',
//     gallery : {
//         enabled : true
//     }
// })

