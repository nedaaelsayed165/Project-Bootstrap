let nextArrow = document.querySelector(".swiper-button-next");
let prevArrow = document.querySelector(".swiper-button-prev");
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: nextArrow,
        prevEl: prevArrow,
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
