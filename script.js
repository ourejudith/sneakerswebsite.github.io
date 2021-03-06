var swiper = new Swiper(".nikeSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
});

function toggleNav() {
    const navToggle = document.querySelector('.toggle');
    const nav =
        document.querySelector('.nav')
    navToggle.classList.toggle('active')
    nav.classList.toggle('active')
}