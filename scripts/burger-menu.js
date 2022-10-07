const burgerMenu = document.getElementById('burger-menu');
const bar = document.querySelectorAll('.bar');
const navLinks = document.getElementById('nav-links');

function toggleBurgerMenu() {
    bar.forEach((item) => {
        item.classList.toggle('change');
    });
    navLinks.classList.toggle('show');
}

window.addEventListener('click', (e) => {
    if (e.target.parentNode !== navLinks && e.target.parentNode !== burgerMenu) {
        bar.forEach((item) => {
            item.classList.remove('change');
        });
        navLinks.classList.remove('show');
    }
})

burgerMenu.addEventListener('click', toggleBurgerMenu);

navLinks.addEventListener('click', toggleBurgerMenu);