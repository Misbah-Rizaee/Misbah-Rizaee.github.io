// animations.js

export function scrollAppear() {
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

export function scrollColor() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTopnav").style.backgroundColor = "#17252a";
        document.getElementById("myTopnav").style.transition = "0.4s";
    } else {
        document.getElementById("myTopnav").style.backgroundColor = "transparent";
        document.getElementById("myTopnav").style.transition = "0.4s";
    }
}
