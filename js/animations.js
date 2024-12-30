export function initAnimations() {
    // Scroll-based appearance animations
    function scrollAppear() {
        const rows = document.querySelectorAll('.container4-row'); // Select all rows
        
        rows.forEach((row) => {
            const left = row.querySelector('.left');
            const right = row.querySelector('.right');
            const position = left.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.5;

            if (position < screenPosition) {
                left.classList.add('showLeft');
                right.classList.add('showRight');
            } else {
                left.classList.remove('showLeft');
                right.classList.remove('showRight');
            }
        });
    }

    // Scroll-based color change
    function scrollColor() {
        const topNav = document.getElementById("myTopnav");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            topNav.style.backgroundColor = "#17252a";
            topNav.style.transition = "0.4s";
        } else {
            topNav.style.backgroundColor = "transparent";
            topNav.style.transition = "0.4s";
        }
    }

    // Attach scroll event listeners
    window.addEventListener("scroll", scrollAppear);
    window.addEventListener("scroll", scrollColor);

    console.log("Animations initialized.");
}
