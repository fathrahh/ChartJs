const btn = document.getElementById('btnHamburger');
const sideBar = document.querySelector('.sidebar');

btn.addEventListener('click', () => {
    sideBar.classList.toggle("-translate-x-full");
});