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
    //обработка формы
    $(".modal__form").validate({
        errorClass: "invalid",
        messages: {
            name: {
                required: "Please specify your name",
                minlength: "Name must be at least 2 letters long"
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com",
            },
            phone: {
                required: "Phone is required",
            },
        },
    });

    $(".footer__form").validate({
        errorClass: "invalid",
        messages: {
            name: {
                required: "Please specify your name",
                minlength: "Name must be at least 2 letters long"
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com",
            },
            phone: {
                required: "Phone is required",
            },
        },
    });

    $(".newsletter__search").validate({
        errorClass: "invalid",
        messages: {
            name: {
                required: "Please specify your name",
                minlength: "Name must be at least 2 letters long"
            },
            email: {
                required: "We need your email address to contact you",
                email: "Your email address must be in the format of name@domain.com",
            },
            phone: {
                required: "Phone is required",
            },
        },
    });

    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('+0(000)000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('(000) 000-0000');
    $('.mixed').mask('AAA 000-S0S');
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.cnpj').mask('00.000.000/0000-00', { reverse: true });
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.money2').mask("#.##0,00", { reverse: true });
    $('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
        translation: {
            'Z': {
                pattern: /[0-9]/,
                optional: true
            }
        }
    });
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('##0,00%', { reverse: true });
    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
    $('.fallback').mask("00r00r0000", {
        translation: {
            'r': {
                pattern: /[\/]/,
                fallback: '/'
            },
            placeholder: "__/__/____"
        }
    });
    $('.selectonfocus').mask("00/00/0000", { selectOnFocus: true });

    AOS.init();

});