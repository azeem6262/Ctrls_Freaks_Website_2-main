
function startEngine() {
    document.getElementById('engine-sound').play();
    document.querySelector('.curtain').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
}
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var mainSwiper = new Swiper('.main-swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-bar ul li a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = navLink.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
const fullScreenLogo = document.querySelector('.full-screen-logo');
    fullScreenLogo.style.opacity = '0';

    window.addEventListener('load', function() {
        fullScreenLogo.style.opacity = '0'; 
        setTimeout(function() {
            fullScreenLogo.style.display = 'none';
        }, 1000); 
    });