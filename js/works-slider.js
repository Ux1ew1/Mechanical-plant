const swiper = new Swiper(".works-slider", {
    spaceBetween: 90,
    slidesPerView: 2,
    centeredSlides: false,
    grabCursor: false,
    navigation: {
        nextEl: ".works-slider-next",
        prevEl: ".works-slider-prev",
    },
    pagination: {
        el: ".works-slider-pagination",
    },

    breakpoints: {
        1920: {
            slidesPerViwe: "auto",
            spaceBetween: 90,
        },
        1024: {
            spaceBetween: 40,
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
        425: {
            slidesPerView: "auto",
            spaceBetween: 20,
        },
    },
});
