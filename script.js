const texts = [
  "Hey babylove 😘💙",
  "I have something important to ask you...🥺",
  "You’ve made my days softer and my life brighter ✨",
  "With you, even ordinary moments feel special😭",
  "I keep imagining a future...🙈",
  "One where it’s always you and me 😩️",
  "Waking up with messy hair and morning kisses😘",
  "Cuddling till we're drenched in sweat🤗",
  "Travelling the world together...🥺",
  "and fucking in every place we go🫠",
  "Be it long rides or midnight drives😚",
  "I wanna live each dream with you🤩",
  "And in sickness and in health🤒",
  "We'll always be each others everything🥹",
  "I love you now and forever❤️‍🩹",
  "No matter what😤",
  "So I was wondering...🫢",
  "Will you be my husband and go on a Valentine’s date with me?🫣"
];

let index = 0;
let charIndex = 0;
let isTyping = false;

const textElement = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");
const buttons = document.getElementById("buttons");
const noBtn = document.getElementById("noBtn");
const teaseText = document.getElementById("teaseText");


let teaseIndex = 0;

// Typing animation
function typeText(text) {
  isTyping = true;
  textElement.textContent = "";
  charIndex = 0;

  const typingInterval = setInterval(() => {
    textElement.textContent += text.charAt(charIndex);
    charIndex++;

    if (charIndex === text.length) {
      clearInterval(typingInterval);
      isTyping = false;
    }
  }, 45); // typing speed (lower = faster)
}

// Initial text
typeText(texts[index]);

const backBtn = document.getElementById("backBtn");

// Disable back button initially
backBtn.style.display = "none";

function showText(i) {
  isTyping = true;
  textElement.textContent = "";
  charIndex = 0;

  const typingInterval = setInterval(() => {
    textElement.textContent += texts[i].charAt(charIndex);
    charIndex++;

    if (charIndex === texts[i].length) {
      clearInterval(typingInterval);
      isTyping = false;
    }
  }, 45);

  // Show/hide nav buttons
  backBtn.style.display = i === 0 ? "none" : "inline-block";
  nextBtn.style.display = i === texts.length - 1 ? "none" : "inline-block";
  buttons.classList.toggle("hidden", i !== texts.length - 1);
}

// Initial text
showText(index);

// Next button
nextBtn.addEventListener("click", () => {
  if (isTyping) return;
  if (index < texts.length - 1) {
    index++;
    showText(index);
  }
});

// Back button
backBtn.addEventListener("click", () => {
  if (isTyping) return;
  if (index > 0) {
    index--;
    showText(index);
  }
});


// YES button
document.getElementById("yesBtn").addEventListener("click", () => {
  window.location.href = "yes.html";
});

// NO button movement
const noBtnMessages = [
  "Haha, nope 😏",
  "Try again 😌",
  "You can’t catch me 😝",
  "Not today 😅",
  "I’m too fast! 😉",
  "Come on, love… 😘",
  "Keep chasing 😍",
  "Haha, almost 😳",
  "Nice try 😏",
  "You know you want to click YES 💍",
  "Hey… that’s not really an option 😌",
  "You’re cute, but no 😏",
  "The universe disagrees 💫",
  "Nice try, husband-to-be 😉",
  "Okay now you’re just teasing me 😭",
  "Run if you must, but love wins 💕",
  "You can’t escape destiny 😘",
  "I promise I’ll still love you (even if you click no 😅)",
  "Come on… don’t be shy 💌",
  "The YES button misses you 🫶"
];

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  // Move button to a random position
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 20);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 20);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Change button text to next playful message
  noBtn.textContent = noBtnMessages[teaseIndex % noBtnMessages.length];
  teaseIndex++;
}

