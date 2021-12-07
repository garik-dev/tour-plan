$(document).ready(function() {
    var swiperHotel = new Swiper('.swiper-hotel', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.slider-button--next',
            prevEl: '.slider-button--prev',
        },

    });

    var swiperRevievs = new Swiper('.reviews-slider', {
        // Optional parameters
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.reviews-button--next',
            prevEl: '.reviews-button--prev',
        },
    });

    var menuButton = $(".menu-button");
    menuButton.on('click', function() {
        $(".navbar-bottom").toggleClass("navbar-bottom--visible");
    });

    var modalButton = $("[data-toggle=modal]");
    var closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal)

    function openModal() {
        var modalOverlay = $('.modal__overlay');
        var modalDialog = $('.modal__dialog');
        modalOverlay.addClass('modal__overlay--visible');
        modalDialog.addClass('modal__dialog--visible');
    }

    function closeModal(event) {
        event.preventDefault();
        var modalOverlay = $('.modal__overlay');
        var modalDialog = $('.modal__dialog');
        modalOverlay.removeClass('modal__overlay--visible');
        modalDialog.removeClass('modal__dialog--visible');

    }
});