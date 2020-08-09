$(document).ready(function () {
    $(".floristSlide").slick({
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fal fa-long-arrow-left customLeftButton"></i>',
        nextArrow: '<i class="fal fa-long-arrow-right customRightButton"></i>',
        responsive: [{
            breakpoint: 1040,
            settings: {
                infinite: true,
                arrows: false,
            }
        }]
    });
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > 285) {
        $('.secondNavBar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 386) {
        $('.secondNavBar').removeClass('navbar-fixed');
      }
    });
    // window.scrollTo({
    //     top: 0,
    //     behavior: "smooth"
    // })
    $('.autoplay').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        touchMove: true,
        arrows: false,
      });
      $(document).on("click", ".toggleElements-1", function () {
        $(this).next().slideDown(function () {
            $(this).prev().addClass("activetoggleCardHeader");
            $(this).addClass("activetoggleCard-1"); 
        });
        $(".activetoggleCard-1").slideUp(function () {
            $(this).prev().removeClass("activetoggleCardHeader");
            $(this).removeClass("activetoggleCard-1");
        });
    });
    $(document).on("click", ".toggleElements-2", function () {
        $(this).next().slideDown(function () {
            $(this).prev().addClass("activetoggleCardHeader");
            $(this).addClass("activetoggleCard-2"); 
        });
        $(".activetoggleCard-2").slideUp(function () {
            $(this).prev().removeClass("activetoggleCardHeader");
            $(this).removeClass("activetoggleCard-2");
        });
    });
    $(document).on("click", ".toggleElements-3", function () {
        $(this).next().slideDown(function () {
            $(this).prev().addClass("activetoggleCardHeader");
            $(this).addClass("activetoggleCard-3"); 
        });
        $(".activetoggleCard-3").slideUp(function () {
            $(this).prev().removeClass("activetoggleCardHeader");
            $(this).removeClass("activetoggleCard-3");
        });
    });
    $(document).on("click", ".toggleElements-4", function () {
        $(this).next().slideDown(function () {
            $(this).prev().addClass("activetoggleCardHeader");
            $(this).addClass("activetoggleCard-4"); 
        });
        $(".activetoggleCard-4").slideUp(function () {
            $(this).prev().removeClass("activetoggleCardHeader");
            $(this).removeClass("activetoggleCard-4 ");
        });
    });
});