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
    // nbseHacksImage.src = "https://media.giphy.com/media/MDfuWQGDK6AYLBuCde/giphy.gif";
    if (!nbseHacksImage.src.includes("hoverClips/NSBEHacksClip.gif")){
        nbseHacksImage.src = "hoverClips/NSBEHacksClip.gif";
    }
})
nbseHacksCard.addEventListener('mouseleave', () => {
    nbseHacksImage.src = "images/nsbeHacks.png";
})

// const RUHacksImage = document.querySelector('.RUHacksImage');
const RUHacksVideo = document.querySelector('.RUHacksImage2');
const RUHacksCard = document.querySelector('.RUHacksCard');

RUHacksCard.addEventListener('mouseover', () => {
    // RUHacksImage.src = "https://www.dropbox.com/s/d20btgpepsqz8qv/RUHacksClip.gif?dl=1";
    if (!RUHacksVideo.src.includes("hoverClips/RUHacksClip.mp4")){

        // play the video
        RUHacksVideo.src = "hoverClips/RUHacksClip.mp4";
        RUHacksVideo.get(0).play();

        // Set the default img to not appear
        RUHacksVideo.poster= "";
        RUHacksVideo.width = $('.RUHacksCard').width;
    }
})
RUHacksCard.addEventListener('mouseleave', () => {
    // Clear the video and put back the default img
    RUHacksVideo.src = "";
    RUHacksVideo.poster = "images/teamJelly.png";
})

// /* RU Hacks hover clip */
// const RUHacksImage = document.querySelector('.RUHacksImage');
// const RUHacksCard = document.querySelector('.RUHacksCard');
// RUHacksCard.addEventListener('mouseover', () => {
//     if (!RUHacksImage.src.includes("hoverClips/RUHacksClip.gif")){
//         RUHacksImage.src = "hoverClips/RUHacksClip.gif";
//     }
// })
// RUHacksCard.addEventListener('mouseleave', () => {
//     RUHacksImage.src = "images/teamJelly.png";
// })