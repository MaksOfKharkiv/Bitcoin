window.$ = window.jQuery = require('jquery');

// Search
$(document).ready(function (){

    let search = document.querySelector(".search")
    let btn = document.querySelector(".search-button")
    let input = document.querySelector(".input")

    btn.addEventListener('click',()=>{
        search.classList.toggle('active');
        input.focus()
    });
})

//Mobile menu
$('.menu-icon').on('click', function() {
    $('.menu').addClass('active');
})
$('.cancel-icon').on('click', function() {
    $('.menu').removeClass('active');
});

// Swiper Home
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
Swiper.use([ Autoplay, Navigation, Pagination ]);

$(document).ready(function (){

    const swiper = new Swiper('.home__swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: 'true',
        navigation: {
            nextEl: '.home__swiper-button-next',
            prevEl: '.home__swiper-button-prev',
        },
    });
})