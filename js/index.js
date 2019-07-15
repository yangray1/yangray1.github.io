"use-strict";

const prefix = "Strive to ";
const options = {
  strings: [prefix + "<strong>Learn</strong>", prefix + "<strong>Code</strong>", prefix + "<strong><span class='red'>Build</span></strong>"],
  typeSpeed: 30,
  backSpeed: 0,
  backDelay: 500,
  startDelay: 100,
  loop: true
}
const typedAnimation = new Typed('#typedAnimation', options);