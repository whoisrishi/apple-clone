// Initialization for ES Users
import {
    Collapse,
    Dropdown,
    Ripple,
    Carousel,
    initTWE
} from 'tw-elements';

initTWE({ Collapse, Dropdown, Ripple, Carousel });


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true, // Enable loop mode
        autoplay: {
            delay: 3000, // Delay between slides (in ms)
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});