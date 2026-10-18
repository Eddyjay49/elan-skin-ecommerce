/* Navigation Elements variables */
const navLinks = document.getElementById('nav-links');
const menuToggle = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.menu-toggle i');


// event listener for the menutoggle, menuIcon and navlinks
menuToggle.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navLinks.classList.toggle("active");
});

