jQuery(document).ready(function() {

    jQuery(function() {
        //caches a jQuery object containing the header element
        var header = $(".fixed-top");
        jQuery(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.addClass("is_sticky");
            } else {
                header.removeClass("is_sticky");
            }
        });
    });

    // For Search
    // jQuery('.search-form-wrapper').hide()
    // jQuery('.search-form-tigger').click(function() {
    //     jQuery('.search-form-wrapper').slideToggle().toggleClass('open');
    //     jQuery('.search-form-wrapper .search').focus();
    //     jQuery('html').toggleClass('search-form-open');
    //   });

    // Mobile Menu
    // jQuery('#collapsibleNavbar').hide()
    jQuery('.mobile_menu_btn').click(function() {
        jQuery('.mobile_menu_btn').toggleClass('open');
        jQuery('#collapsibleNavbar').slideToggle();
    });


    // Our Team Slider JS
    jQuery(".testimonial_slider").slick({
        autoplay: false,
        autoplaySpeed: 8000,
        speed: 1000,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: false,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        draggable: true,
        fade: true,
        arrows: true,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            }
        }]
    });


    // Clients Slider JS
    // jQuery(".ourPartner_slider").slick({
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     speed: 1500,
    //     slidesToShow: 6,
    //     slidesToScroll: 4,
    //     pauseOnHover: false,
    //     dots: false,
    //     pauseOnDotsHover: false,
    //     cssEase: 'linear',
    //     draggable: true,
    //     arrows: false,
    //     prevArrow: '<button class="PrevArrow"></button>',
    //     nextArrow: '<button class="NextArrow"></button>',
    //     responsive: [{
    //             breakpoint: 1025,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 980,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });




    jQuery('.counter-count').each(function() {
        jQuery(this).prop('Counter', 0).animate({
            Counter: jQuery(this).text()
        }, {

            //chnage count up speed here
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                jQuery(this).text(Math.ceil(now));
            }
        });
    });

    new WOW().init();

})