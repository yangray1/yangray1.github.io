"use strict";

/* Hovering project images plays its corresponding video */

/* NSBE Hacks hover clip */
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

/* RU Hacks hover clip */
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

/* Breadwinner hover clip */
const breadWinnerImage = document.querySelector('.breadWinnerImage');
const breadWinnerCard = document.querySelector('.breadWinnerCard');
breadWinnerCard.addEventListener('mouseover', () => {
    if (!breadWinnerImage.src.includes("hoverClips/breadWinnerClip.gif")){
        breadWinnerImage.src = "hoverClips/breadWinnerClip.gif";

    }
})
breadWinnerCard.addEventListener('mouseleave', () => {
    breadWinnerImage.src = "images/breadWinner.png";
})

/* RateMyCourse hover clip */
const rateMyCourseImage = document.querySelector('.rateMyCourseImage');
const rateMyCourseCard = document.querySelector('.rateMyCourseCard');
rateMyCourseCard.addEventListener('mouseover', () => {
    if (!rateMyCourseImage.src.includes("hoverClips/rateMyCourseClip.gif")){
        rateMyCourseImage.src = "hoverClips/rateMyCourseClip.gif";
    }
})
rateMyCourseCard.addEventListener('mouseleave', () => {
    rateMyCourseImage.src = "images/rateMyCourse.png";
})


