// script.js (main entry point)

// Import functions from other JS files
import { openNav, closeNav } from './navigation.js';
import { scrollAppear, scrollColor } from './animations.js';
import { submitForm } from './form.js';

// Initialize the page once everything is loaded
window.onload = function() {
    // Add event listeners for scroll effects
    window.addEventListener('scroll', scrollAppear);
    window.addEventListener('scroll', scrollColor);

    // Add the form submission event listener
    document.getElementById('contactForm').addEventListener('submit', submitForm);

    // Attach the click event to open/close side navigation
    document.getElementById("myTopnav").querySelector(".icon").onclick = function() {
        openNav();
    };

    document.getElementById("mySidenav").querySelector(".closebtn").onclick = function() {
        closeNav();
    };
};
