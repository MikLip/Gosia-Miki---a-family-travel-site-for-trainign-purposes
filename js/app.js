// import { mainFormContact } from './main-form-contact.js';
// import { Slider } from './main-slider.js';

$(function() {

    // mainFormContact();
    //
    // var mainSlider = new Slider();
    // mainSlider.bindEvents();
    //
    // $('.page-nav a').on('click', function(e) {
    //     e.preventDefault();
    //
    //     let href = $(this).attr('href'); //#sectionContact
    //     let $target = $(href);
    //
    //     $('html, body').animate({
    //         scrollTop : $target.offset().top
    //     }, 1000);
    // });

    const $topMenuBar = $('.page-top-bar');
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 300) {
            $topMenuBar.addClass('scrolled');
        } else {
            $topMenuBar.removeClass('scrolled');
        }
    })
})
