// Import functions from other JS files
import { openNav, closeNav } from './navigation.js';
import { scrollAppear, scrollColor } from './animations.js';
import { submitForm } from './form.js';

// Expose functions to the global scope
window.openNav = openNav;
window.closeNav = closeNav;

// Listen for the "allContentLoaded" event to ensure all dynamic content is available
document.addEventListener("allContentLoaded", function () {
    // Add event listeners for scroll effects
    window.addEventListener('scroll', scrollAppear);
    window.addEventListener('scroll', scrollColor);

    // Add the form submission event listener
    document.getElementById('contactForm').addEventListener('submit', submitForm);

    // // Attach the click event to open/close side navigation
    // const openNavButton = document.getElementById("myTopnav")?.querySelector(".icon");
    // if (openNavButton) {
    //     openNavButton.onclick = function () {
    //         openNav();
    //     };
    // }

    // const closeNavButton = document.getElementById("mySidenav")?.querySelector(".closebtn");
    // if (closeNavButton) {
    //     closeNavButton.onclick = function () {
    //         closeNav();
    //     };
    // }
});
