$(window).on('scroll', function(){
    if($(this).scrollTop()>20){
        $('.header_area').addClass('sticky');
    } else {
        $('.header_area').removeClass('sticky');
    };
});