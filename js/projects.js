"use strict";

/* Hovering project images plays its corresponding video */
const source = document.createElement("source");

/* NSBEHacks hover clip */
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

/* RUHacks hover clip */
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
    source.remove();
})

/* Breadwinner hover clip */
const breadWinnerVideo = document.querySelector('.breadWinnerVideo');
const breadWinnerCard = document.querySelector('.breadWinnerCard');
breadWinnerCard.addEventListener('mouseover', () => {
    if (!(source.parentNode == breadWinnerVideo)){
        source.setAttribute('src', 'hoverClips/breadWinnerClip.mp4');
        breadWinnerVideo.appendChild(source);
        breadWinnerVideo.play();
    }
})
breadWinnerCard.addEventListener('mouseleave', () => {
    breadWinnerVideo.pause();
    source.remove();
})

/* RateMyCourse hover clip */
const rateMyCourseVideo = document.querySelector('.rateMyCourseVideo');
const rateMyCourseCard = document.querySelector('.rateMyCourseCard');
rateMyCourseCard.addEventListener('mouseover', () => {
    if (!(source.parentNode == rateMyCourseVideo)){
        source.setAttribute('src', 'hoverClips/rateMyCourseClip.mp4');
        rateMyCourseVideo.appendChild(source);
        rateMyCourseVideo.play();
    }
})
rateMyCourseCard.addEventListener('mouseleave', () => {
    rateMyCourseVideo.pause();
    source.remove();
})


