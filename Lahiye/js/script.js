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
    $('.autoplay').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        touchMove: true,
        arrows: false,
      });
});