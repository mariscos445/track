$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('a.scroll-top').fadeIn('slow');

    } else {
        $('a.scroll-top').fadeOut('slow');
    }
});

$('a.scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});