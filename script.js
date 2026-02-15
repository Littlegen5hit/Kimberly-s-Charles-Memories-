const startScreen = document.getElementById("startScreen");
const slideshow = document.getElementById("slideshow");
const slide = document.getElementById("slide");
const music = document.getElementById("bgMusic");
const heart = document.getElementById("heart");
const cracks = document.getElementById("cracks");
const tapText = document.getElementById("tapText");

const images = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg"
];

let current = 0;
let taps = 0;
const maxTaps = 6; // how many taps to break the heart

heart.addEventListener("click", () => {
  taps++;
heart.style.animation = "shake 0.15s";
setTimeout(() => heart.style.animation = "", 150);
  heart.style.transform = `scale(${1 - taps * 0.05}) rotate(${taps * 2}deg)`;

  const crack = document.createElement("div");
  crack.className = "crack-line";
  crack.style.left = Math.random() * 80 + 10 + "%";
  crack.style.transform = `rotate(${Math.random() * 60 - 30}deg)`;
  cracks.appendChild(crack);

  tapText.innerText = `Tap the heart ${maxTaps - taps} more time(s) 💔`;

  if (taps >= maxTaps) {
    startScreen.classList.add("hidden");
    slideshow.classList.remove("hidden");
    music.play();

    setInterval(() => {
      current = (current + 1) % images.length;
      slide.src = images[current];
    }, 3000);
  }
});
