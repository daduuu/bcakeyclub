$(document).ready(function() {
    setHeight();
    window.addEventListener('resize', setHeight);
    $(".p4").css("font-size", 20);

    function recall_menu(){
        if($(window).width() <= 768){
            $(".navbar-toggler").click();
        }
    }

    function setHeight(){
        if ($(window).width() <= 1200) {
            var x = 12;
            var y = 250;
            var  z = 150;

            x -= (1200 - $(window).width()) * (2 / 789);
            y -= (1200 - $(window).width()) * (2 / 789);
            z -= (1200 - $(window).width()) * (2 / 789);

            if ($(window).width() === 1200){
                x = 12;
            }
            $(".p4").css("font-size", x + 2);
            $(".p1").css("font-size", x);
            $(".h0").css("font-size", x + 12);
            $(".h02").css("font-size", x + 8);
            $(".teml").css("height", 100);
            $(".teml").css("weight", 100);
            $(".kl").css("weight", 100);
            $(".kl").css("height", "auto");

            $(".p4").css({
                "padding": "0 0 0 100px" //tempvalue
            });
            $(".wrappp").css({
                "width":"500px" //tempvalue
            });

            $(".carousel").css({
                "height": y,
                "padding": "0 0 0 0"
            });
            $(".jumbotron1").css({
                "height": y + 60,
                "padding":"0 0 0 0"
            });
            $(".jumbotron2").css({
                "height": y + 60,
                "padding":"0 0 0 0",

            });
            $(".templ").css({
                "height": z,
                "width": z,
            });
            $(".kl").css({
                "height": z - 50,
                "width": z - 50,
            });
            $(".padd").css({
                "padding":"0 0 0 0"
            })



        }
        else{
            $(".p4").css("font-size", 20);
            $(".p1").css("font-size", 18);
            $(".h0").css("font-size", "2.5em");
            $(".h02").css("font-size", "1.5em");
            $(".teml").css("height", 300);
            $(".teml").css("weight", 300);
            $(".kl").css("weight", 200);
            $(".kl").css("height", 200);
            $(".p4").css({
                "padding": "15px 0 0 400px"
            });
            $(".wrappp").css({
                "width":"1000px" //tempvalue
            });

            $(".carousel").css({
                "height": "600",
                "padding": "0 0 200px 0"
            });
            $(".jumbotron1").css({
                "padding":"130px 0 250px 0",
                "height":"auto"
            });
            $(".jumbotron2").css({
                "padding":"110px 0 180px 0",
                "height":"auto"
            });
            $(".templ").css({
                "height": 300,
                "width": 300,
            });
            $(".kl").css({
                "height": 200,
                "width": 200,
            });
            $(".padd").css({
                "padding":"0 0 0 50px"
            });


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