$(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass("active");
        $("#header .navi").toggleClass("active");
    });
    $(".navi a").click(function() {
        $(".hamburger").removeClass("active");
        $("#header .navi").removeClass("active");
    });
});
$(function() {
    $("#introduction .tour1 .btn").click(function() {
        $(this).hide();
        $("#introduction .tour1 .description").css({
            "height":"auto",
            "overflow":"visible"
        });
    });
    $("#introduction .tour2 .btn").click(function() {
        $(this).hide();
        $("#introduction .tour2 .description").css({
            "height":"auto",
            "overflow":"visible"
        });
    });
});
$(function(){
    $("#activity .slider").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint:768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
// より効率的な書き方 - 繰り返しコードを削減
$(function() {
    // 全てのspotに対して一括で処理
    for (let i = 1; i <= 5; i++) {
        $(`#map .spot${i} .spot-btn`).hover(
            function() {
                $(`#map .spot${i} .spot-img`).show();
            },
            function() {
                $(`#map .spot${i} .spot-img`).hide();
            }
        );
    }
});
$(function(){
    if($(this).scrollTpo()>300){
        $("$fixed-btn").fadeIn();
    }else {
        $("#fixed-btn").fadeOut();
    }
    });


