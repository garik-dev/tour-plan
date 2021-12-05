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

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener('click', function() {
    console.log("клик по кнопке меню");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
})