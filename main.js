$(document).ready(function() {
    $("#nav1 ul li a[href^='#']").on('click', function (e) {

        e.preventDefault();

        var hash = this.hash;

        if ($(window).width() <= 768) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                window.location.hash = hash;
            });
        }
        else {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {

                window.location.hash = hash;
            });
        }
    });
});