$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.nav-menu').slideToggle(300);
    });

    $(window).resize(function() {
        if ($(window).width() > 768) {
            $('.nav-menu').removeAttr('style');
        }
    });
});
