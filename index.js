document.addEventListener("DOMContentLoaded", () => {
const navLinks = document.querySelector('#navLinks');
const navToggleBtn = document.querySelector('#navToggleBtn');
navToggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
});