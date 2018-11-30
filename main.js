$(document).ready(function() {
    window.addEventListener('resize', setHeight);
    $(".p4").css("font-size", 20);

    function setHeight(){
        if ($(window).width() <= 1200) {
            $(".p4").css("font-size", 14);
            $(".p1").css("font-size", 12);
            $(".h0").css("font-size", 24);
            $(".h02").css("font-size", 20);
            $(".teml").css("height", 100);
            $(".teml").css("weight", 100);
            $(".kl").css("weight", 100);
            $(".kl").css("height", "auto");
            $(".carousel").css("padding-bottom", 0);
            $(".jumbotron1").css({
                "padding": "0 0 0 0 !important;"
            });
        }
        else{
            $(".p4").css("font-size", 20);
            $(".p1").css("font-size", 18);
            $(".h0").css("font-size", "2em");
            $(".h02").css("font-size", "1.5em");
            $(".teml").css("height", 300);
            $(".teml").css("weight", 300);
            $(".kl").css("weight", 200);
            $(".kl").css("height", 200);


        }
    }
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