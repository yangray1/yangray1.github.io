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
    background.css("min-height", $(".bgInnerFrame").outerHeight() + $(".navbar").height() + $(".page-scroll").height());
}

window.addEventListener('DOMContentLoaded', resize);
window.addEventListener('resize', resize);

/* Scroll down animation */
$('.scrollDownButton').on('click', (e) => {
    $('html, body').animate({ scrollTop: $('.scrollDownButton').offset().top}, 500, 'linear');
});

/* Hovering project images plays its corresponding video */
const nbseHacksImage = document.querySelector('.nsbeHacksImage');
const nbseHacksCard = document.querySelector('.nsbeHacksCard');
nbseHacksCard.addEventListener('mouseover', () => {
    if (!nbseHacksImage.src.includes("hoverClips/NSBEHacksClip.gif")){
        nbseHacksImage.src = "hoverClips/NSBEHacksClip.gif";
    }
})
nbseHacksCard.addEventListener('mouseleave', () => {
    nbseHacksImage.src = "images/nsbeHacks.png";
})

const RUHacksImage = document.querySelector('.RUHacksImage');
const RUHacksCard = document.querySelector('.RUHacksCard');
RUHacksCard.addEventListener('mouseover', () => {
    if (!RUHacksImage.src.includes("hoverClips/RUHacksClip.gif")){
        RUHacksImage.src = "hoverClips/RUHacksClip.gif";
    }
})
RUHacksCard.addEventListener('mouseleave', () => {
    RUHacksImage.src = "images/teamJelly.png";
})