const playBtn = document.getElementById("playBtn");
const startScreen = document.getElementById("startScreen");
const slideshow = document.getElementById("slideshow");
const slide = document.getElementById("slide");
const music = document.getElementById("bgMusic");

const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg",
  "images/pic5.jpg"
];

let current = 0;

playBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  slideshow.classList.remove("hidden");
  music.play();

  setInterval(() => {
    current = (current + 1) % images.length;
    slide.src = images[current];
  }, 3000); // change image every 3 seconds
});
