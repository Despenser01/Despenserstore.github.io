(function ($) {
    "use strict"

// Navbar on scrolling
$(window).scroll(function (){
if ($(this).scrollTop() > 200){
    $('.navbar').fadeIn('slow').css('dispaly','flex');   
}else{
    $('.navbar').fadeOut('slow').css('display', 'none');
}
})
//     // Typed Initiate
    if ($('.typed-text-output').lenght == 1){
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            Strings:typed_strings.split(', '),
            typeSpeed:100,
            backSpeed: 20,
            smartBackspeed:false,
            loop: true
        })
    }

    // smooth scrolling on the navbar links
    $(".navbar-nav a").on('click',function (event) {
        if(this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            if($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active')
            }
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({itemSelector: '.portfolio-item', 
    layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // skill bar
    $('.skill').waypoint(function (){
        $('.progress .progress-bar').each(function (){
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
})(jQuery);  