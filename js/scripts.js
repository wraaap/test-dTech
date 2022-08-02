// Custom Scripts
// Custom scripts

"use strict"

// меню burger
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
const menuBtn = document.querySelectorAll('.menu__btn');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// зарываем бургер меню по клику
function MenuClose(element) {
    element.forEach(item => {
        item.addEventListener('click', () => {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
        })
    })
};
// для ссылок
MenuClose(menuLinks);
// для нопок (на будущее для всех)
MenuClose(menuBtn);


<!-- Initialize Swiper -->

    var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1000: {
          slidesPerView: 4,
        },
        800: {
          slidesPerView: 3,
        },
        525: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }
    });
