const toggle = document.querySelector('.nav-button');
const menu = document.querySelector('.nav__menu-list');

toggle.addEventListener('click', function() {
    if (menu.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-active');
    } else {
        menu.classList.add('is-active');
        this.setAttribute('aria-expanded', 'true');
        // menuItems[0].focus();
    }
});
