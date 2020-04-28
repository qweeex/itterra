window.$ = $;
window.jQuery = $;
import Quality from "./quality";
import Swiper from 'swiper';
$(document).ready(app());


function app() {

    productSlider();
    let quality = new Quality();
    quality.init();
    $(window).resize(function () {
        quality.init();
    });

    let slider = new Swiper('.slider', {
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.slider-dots__wrapper',
            type: 'bullets',
            bulletActiveClass: 'dots-active',
            bulletClass: 'dots'
        },
        renderBullet: function (index, className) {
            return '<div class="' + className + '"></div>';
        }
    });

}

function productSlider() {

    let active = 'product-item__active';

    $('.product-item').on('click', (e) => {
        $('.product-item').removeClass(active);
        e.target.classList.add(active);
        changeInfo(
            e.target.dataset.title,
            e.target.dataset.link,
            e.target.dataset.material,
            e.target.dataset.avalible,
            e.target.dataset.picture
        );
    });

    function changeInfo(title, link, material, avalible, img) {
        let materialText = $('.content-material > p > span').text();
        let avalibleText = $('.content-available > p > span').text();
        $('.content-material').html(`
            <p><span>${materialText}</span> ${material}</p>
        `);
        $('.content-available').html(`
            <p><span>${avalibleText}</span> ${avalible}</p>
        `);
        $('.content-more > a').attr('href', link);
        $('.product-simple > img').attr('src', img);
        $('.product-simple > .simple-title').text(title);

    }

    $('.product-up').on('click', function (e) {
        e.preventDefault();
        slideNext();
    });
    $('.product-down').on('click', function (e) {
        e.preventDefault();
        slidePrev();
    });


    function slideNext() {
        let active = 'product-item__active';
        let slides = $('.product-item');

        for (let i = 0; i < slides.length + 1; i++){

            if (slides[i].classList.contains(active)){
                slides[i].classList.remove(active);
                slides[i + 1].classList.add(active);
                changeInfo(
                    slides[i + 1].dataset.title,
                    slides[i + 1].dataset.link,
                    slides[i + 1].dataset.material,
                    slides[i + 1].dataset.avalible,
                    slides[i + 1].dataset.picture
                );
                return;
            }

        }

    }

    function slidePrev() {
        let active = 'product-item__active';
        let slides = $('.product-item');

        for (let i = 0; i < slides.length + 1; i++){

            if (slides[i].classList.contains(active)){
                slides[i].classList.remove(active);
                slides[i - 1].classList.add(active);
                changeInfo(
                    slides[i - 1].dataset.title,
                    slides[i - 1].dataset.link,
                    slides[i - 1].dataset.material,
                    slides[i - 1].dataset.avalible,
                    slides[i - 1].dataset.picture
                );
                console.log(i - 1);
                return;
            }

        }
    }

}
