const playPauseButton = document.getElementById("playPauseButton");
const playPauseIcon = document.getElementById("playPauseIcon");
const backgroundMusic = document.getElementById("backgroundMusic");

playPauseIcon.classList.add("fa-pause");

playPauseButton.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  } else {
    backgroundMusic.pause();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  }
});

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

const slidesContainer = document.querySelector(".slides-container");
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function moveToNextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlidePosition();
  }
}

function moveToPreviousSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlidePosition();
  }
}

function updateSlidePosition() {
  const offset = -currentSlide * window.innerHeight;
  slidesContainer.style.transform = `translateY(${offset}px)`;
}

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    moveToNextSlide();
  } else {
    moveToPreviousSlide();
  }
});

const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("searchButton");

function handleSearch(query) {
  if (query) {
    if (query.includes("honkai") || query.includes("hi3")) {
      window.location.href = "hi3.html";
    } else if (query.includes("genshin")) {
      window.location.href = "genshin.html";
    } else if (query.includes("hsr") || query.includes("star rail")) {
      window.location.href = "hsr.html";
    } else if (query.includes("zenless") || query.includes("zzz")) {
      window.location.href = "zzz.html";
    } else if (query.includes("about")) {
      window.location.href = "about.html";
    } else if (query.includes("home")) {
      window.location.href = "index.html";
    } else {
      alert("Page tidak ditemukan");
    }
  }
}

searchIcon.addEventListener("click", () => {
  const query = searchInput.value.trim().toLowerCase();
  handleSearch(query);
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = searchInput.value.trim().toLowerCase();
    handleSearch(query);
  }
});

function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("active");
}

document.querySelector(".hamburger").addEventListener("click", toggleMenu);
