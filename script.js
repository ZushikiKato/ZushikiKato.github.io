const audio = document.getElementById("backgroundMusic");
const playPauseButton = document.getElementById("playPauseButton");

function toggleMusic() {
  if (audio.paused) {
    audio.play();
    localStorage.setItem("musicStatus", "playing");
    playPauseButton.textContent = "Pause Music";
  } else {
    audio.pause();
    localStorage.setItem("musicStatus", "paused");
    playPauseButton.textContent = "Play Music";
  }
}

window.addEventListener("load", function () {
  const musicStatus = localStorage.getItem("musicStatus");

  if (musicStatus === "playing") {
    audio.play();
    playPauseButton.textContent = "Pause Music";
  } else {
    audio.pause();
    playPauseButton.textContent = "Play Music";
  }
});

playPauseButton.addEventListener("click", toggleMusic);

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
// Muncul dengan efek fade saat elemen masuk viewport
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
    moveToNextSlide(); // Scroll down
  } else {
    moveToPreviousSlide(); // Scroll up
  }
});

const searchToggle = document.getElementById("searchToggle");
const searchModal = document.getElementById("searchModal");
const closeSearch = document.getElementById("closeSearch");
const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");

// Show search modal
searchToggle.addEventListener("click", () => {
  searchModal.style.display = "flex";
  searchBar.focus();
});

// Close search modal
closeSearch.addEventListener("click", () => {
  searchModal.style.display = "none";
  searchBar.value = "";
});

// Search functionality
searchButton.addEventListener("click", () => {
  const query = searchBar.value.trim().toLowerCase();

  if (query === "") {
    alert("Please enter a search term!");
    return;
  }

  // Navigation logic
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
    window.location.href = "game.html";
  } else {
    alert("No matching page found!");
  }

  // Close modal after search
  searchModal.style.display = "none";
  searchBar.value = "";
});

// Close modal when clicking outside of the search box
searchModal.addEventListener("click", (e) => {
  if (e.target === searchModal) {
    searchModal.style.display = "none";
    searchBar.value = "";
  }
});
