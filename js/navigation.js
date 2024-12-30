export function setupNavigation() {
    const sidenav = document.getElementById("mySidenav");
    const burgerIcon = document.querySelector(".burger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navLinks = document.querySelectorAll(".nav-link");

    // Function to open the side navigation
    function openNav() {
        sidenav.style.width = "100%";
    }

    // Function to close the side navigation
    function closeNav() {
        sidenav.style.width = "0";
    }

    // Attach event listener to burger icon to open the nav
    if (burgerIcon) {
        burgerIcon.addEventListener("click", openNav);
    }

    // Attach event listener to close icon to close the nav
    if (closeIcon) {
        closeIcon.addEventListener("click", closeNav);
    }

    // Attach event listeners to nav links to close the nav after clicking
    navLinks.forEach(link => {
        link.addEventListener("click", closeNav);
    });

    console.log("Navigation setup complete.");
}
