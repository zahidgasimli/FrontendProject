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
    // $(".secondHover").on({
    //     mouseenter: function () {
    //       $(this).parent().css({
    //         overflow: "visible",
    //       });
    //     },
    //     mouseleave: function () {
    //       $(this).parent().css({
    //         overflow: "hidden",
    //       });
    //     },
    //   });
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        // console.log($(window).scrollTop())
        if ($(window).scrollTop() > 285) {
            $('.secondNavBar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < 386) {
            $('.secondNavBar').removeClass('navbar-fixed');
        }
    });

    $(document).on("click", ".nav-item .navIcon .fa-search", function () {
        $(".inputSearch").slideToggle();
    })

    $(".slider").slick({
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 4500,
        prevArrow: '<i class="fal fa-long-arrow-left"></i>',
        nextArrow: '<i class="fal fa-long-arrow-right"></i>',
        responsive: [
            {
                breakpoint: 1040,
                settings: {
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
        ],
    });

    $(document).on("click", ".categoriesList ul li a", function () {
        let select = $(this).attr("data-id");
        $(".categoriesList ul li a").removeClass("activeLi");
        $(this).addClass("activeLi");
        // console.log($(this).parents(".categories").find(".filterCard").each());
        if (select !== "all") {
            $(this).parents(".categories").find(".filterCard").each(function () {
                $(this).attr("data-id");
                if (select === $(this).attr("data-id")) {
                    $(this).fadeOut(0);
                    $(this).fadeIn();
                }
                else {
                    $(this).fadeOut(0);
                }
            });
        }
        else {
            $(this).parents(".categories").find(".filterCard").fadeIn();
        }
    })

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
    $('.autoplayFlowers').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        touchMove: true,
        arrows: true,
        prevArrow: '<i class="fas fa-caret-left"></i>',
        nextArrow: '<i class="fas fa-caret-right"></i>',
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
    // $('.tabs1').each(function(){
    //     // For each set of tabs, we want to keep track of
    //     // which tab is active and its associated content
    //     const $active, $content, $links = $(this).find('a');

    //     // If the location.hash matches one of the links, use that as the active tab.
    //     // If no match is found, use the first link as the initial active tab.
    //     $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    //     $active.addClass('active');

    //     $content = $($active[0].hash);

    //     // Hide the remaining content
    //     $links.not($active).each(function () {
    //       $(this.hash).hide();
    //     });

    //     // Bind the click event handler
    //     $(this).on('click', 'a', function(e){
    //       // Make the old tab inactive.
    //       $active.removeClass('active');
    //       $content.hide();

    //       // Update the variables with the new link and content
    //       $active = $(this);
    //       $content = $(this.hash);

    //       // Make the tab active.
    //       $active.addClass('active');
    //       $content.show();



    //       // Prevent the anchor's default click action
    //       e.preventDefault();
    //     });
    //   });
    //   $('.tabs2').each(function(){
    //     // For each set of tabs, we want to keep track of
    //     // which tab is active and its associated content
    //     var $active, $content, $links = $(this).find('a');

    //     // If the location.hash matches one of the links, use that as the active tab.
    //     // If no match is found, use the first link as the initial active tab.
    //     $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    //     $active.addClass('active');

    //     $content = $($active[0].hash);

    //     // Hide the remaining content
    //     $links.not($active).each(function () {
    //       $(this.hash).hide();
    //     });

    //     // Bind the click event handler
    //     $(this).on('click', 'a', function(e){
    //       // Make the old tab inactive.
    //       $active.removeClass('active');
    //       $content.hide();

    //       // Update the variables with the new link and content
    //       $active = $(this);
    //       $content = $(this.hash);

    //       // Make the tab active.
    //       $active.addClass('active');
    //       $content.show();



    //       // Prevent the anchor's default click action
    //       e.preventDefault();
    //     });
    //   });
    $(document).on("click", ".tabsHead a", function () {
        const btn = $(this).attr("data-id");
        $(this).siblings().removeClass("btn-selected");
        $(this).addClass("btn-selected");
        const tabsBody = $(this).parents(".tabsContent").children(".tabsBody").children();
        tabsBody.each(function () {
            if ($(this).attr("data-id") === btn) {
                $(this).addClass("content-selected");
            }
            else {
                $(this).removeClass("content-selected");
            }
        })
    })

    $(function () {
        //delay animation
        //setTimeout(function(){
        $('.progressbar').each(function () {
            var t = $(this);
            var elem = t.attr('data-perc');
            $(this).prop('Counter', 0).animate({
                Counter: elem
            }, {
                duration: 2000,
                easing: 'linear',
                step: function (now) {
                    t.find('.approach-value').text(Math.ceil(now) + '%')
                    t.find('.approach-fill-val').css('width', Math.ceil(now) + '%');
                    t.find('.approach-fill-val').css('background', '#228792');
                }
            });
        })
    });
    $(document).on("click", ".productCount .plus", function () {
        let count = parseInt($("#count").text());
        count++;
        $("#count").text(count);
    });
    $(document).on("click", ".productCount .minus", function () {
        let count = parseInt($("#count").text());
        if (parseInt($("#count").text()) !== 1) {
            count--;
            $("#count").text(count);
        }
    });
    $(document).on("click", ".selectedFLowersTabs a", function () {
        const btn = $(this).attr("data-id");
        $(this).siblings().removeClass("selectedActiveTab");
        $(this).addClass("selectedActiveTab");
        const tabsBody = $(this).parents("body").children("#selectedTabsContent").find(".selectedTabOfContent");
        tabsBody.each(function () {
            if ($(this).attr("data-id") === btn) {
                $(this).addClass("selectedActiveTabContent");
            }
            else {
                $(this).removeClass("selectedActiveTabContent");
            }
        })
    })
});