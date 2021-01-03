const swiper = document.querySelector('.swiper');

document.querySelectorAll('.swiper-link').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const target = document.getElementById(item.getAttribute('data-target'));
        const swipeTo = target.getBoundingClientRect();
        swiper.scrollTo(swipeTo.x, 0);
    });
});
