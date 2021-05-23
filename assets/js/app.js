// Selecting Elements

var openBtn = document.querySelector('.opn_btn')
var sideMenu = document.querySelector('.side_menu')

openBtn.addEventListener('click', function () {
    sideMenu.classList.toggle('active')

});


// Colouring Buttons

var btnOne = document.querySelector('.btn1')
var btnTwo = document.querySelector('.btn2')
var btnFour = document.querySelector('.btn4')
var bodyTag = document.querySelector('body')
var formBg = document.querySelector('#form-BG')
var textColor = document.querySelector('.text_color')
var textColorTwo = document.querySelector('.text_color2')
var textColorThree = document.querySelector('.text_color3')


btnOne.addEventListener('click', function () {
    bodyTag.style.background = '#ffffff'
    textColor.style.color = '#eec400'
    textColorTwo.style.color = 'eec400'
    textColorThree.style.color = 'eec400'
});

btnTwo.addEventListener('click', function () {
    bodyTag.style.background = 'Black'
    textColor.style.color = '#E95858'
    textColorTwo.style.color = 'green'
    textColorThree.style.color = 'tomato'

});

btnFour.addEventListener('click', function () {
    bodyTag.style.background = 'darkgray'
    textColor.style.color = 'black'
    textColorTwo.style.color = 'blue'
    textColorThree.style.color = 'green'
});

(function ($) {
    "use strict";

    /* ..............................................
    Loader 
    ................................................. */

    $(window).on('load', function () {
        $('#preloader').delay(550).fadeOut('slow');
        $('body').delay(450).css({ 'overflow': 'visible' });
    });


    /*   Custom Sticky Menu  */
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".header-sticky").removeClass("sticky-bar");
        } else {
            $(".header-sticky").addClass("sticky-bar");
        }
    });

    $('.menu ul li a').click(function () {
        $('.active').removeClass('active');
        $(this).toggleClass('active');
    });

    /* slick Nav */
    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol: '-'
        });
    };

    // SLICK SLIDER FOR BANNER
    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplaySpeed: 3000,
        autoplay: true,
        prevArrow: '<a class="pArrow" href="#"> <i class="fal fa-arrow-left"></i> </a>',
        nextArrow: '<a class="nArrow" href="#"> <i class="fal fa-arrow-right"></i> </a>'
    });
    // SLICK SLIDER FOR BANNER
    // $('.gallary_slider').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     dots: false,
    //     autoplaySpeed: 3000,
    //     autoplay: false,
    //     prevArrow: '<a class="pArrow" href="#"> <i class="fal fa-arrow-left"></i> </a>',
    //     nextArrow: '<a class="nArrow" href="#"> <i class="fal fa-arrow-right"></i> </a>'
    // });

    /* WOW active */
    new WOW().init();

    // niceSelect js 
    $(document).ready(function () {
        $('select').niceSelect();
    });

    /* Nice Selectorp  */
    var nice_Select = $('select');

    if (nice_Select.length) {
        nice_Select.niceSelect();
    };

    // Venobox activation 
    $(document).ready(function () {
        $('.venobox').venobox();
    });

    // COUNTER ACTIVATION 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // TEAM MEMBERS SLIDER 
    $('.team-members_slider').slick({
        lazyLoad: 'ondemand',
        infinite: true,
        centerMode: true,
        centerPadding: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: 'false',
                    slidesToShow: 2,
                    autoplay: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: 'false',
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 1000
                }
            }
        ]
    });

    // REVIEW BOX SLIDER
    $('.review-box_slider').slick({
        vertical: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000,
        autoplay: true,
        prevArrow: '<a class="p_Arrow" href="#"><i class="fal fa-arrow-down"></i></a>',
        nextArrow: '<a class="n_Arrow" href="#"><i class="fal fa-arrow-up"></i></a>'
    });

    /* ..............................................
                    Scroll To Top
    ................................................. */

    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });

        $('#scroll-to-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

    // MIXITUP 
    var containerEl = document.querySelector('.mixitupItem')
    var mixer = mixitup(containerEl);

    $('.gallary-menu ul li').click(function () {
        $('.active').removeClass('active');
        $(this).toggleClass('active');
    });




}(jQuery));

