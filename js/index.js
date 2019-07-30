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
const source = document.createElement("source");

const nsbeHacksVideo = document.querySelector('.nsbeHacksVideo');
const nsbeHacksCard = document.querySelector('.nsbeHacksCard');
nsbeHacksCard.addEventListener('mouseover', () => {
    if (!(source.parentNode == nsbeHacksVideo)){
        source.setAttribute('src', 'hoverClips/NSBEHacksClip.mp4');
        nsbeHacksVideo.appendChild(source);
        nsbeHacksVideo.play();
    }
})
nsbeHacksCard.addEventListener('mouseleave', () => {
    nsbeHacksVideo.pause();
    source.remove()
})

const RUHacksVideo = document.querySelector('.RUHacksVideo');
const RUHacksCard = document.querySelector('.RUHacksCard');
RUHacksCard.addEventListener('mouseover', () => {
    if (!(source.parentNode == RUHacksVideo)){
        source.setAttribute('src', 'hoverClips/RUHacksClip.mp4');
        RUHacksVideo.appendChild(source);
        RUHacksVideo.play();
    }
})
RUHacksCard.addEventListener('mouseleave', () => {
    RUHacksVideo.pause();
    source.remove()
})