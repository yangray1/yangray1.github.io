"use-strict";

/* Typing animation */
const prefix = "I Strive to ";
const options = {
    strings: [prefix + "<strong>Learn</strong>", prefix + "<strong>Code</strong>", prefix + "<strong><span class='red'>Build</span></strong>"],
    typeSpeed: 20,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 100,
    loop: true
}
const typedAnimation = new Typed('#typedAnimation', options);

/* Make the landing page responsive. */
const background = $('.bgImage');
const profileFrame = $('.bgInnerFrame');
const resize = () => {
    background.css("min-height", $(".bgInnerFrame").outerHeight() + $(".navbar").height());
}

window.addEventListener('DOMContentLoaded', resize);
window.addEventListener('resize', resize);