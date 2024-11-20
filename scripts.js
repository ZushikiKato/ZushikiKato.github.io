// script.js

// Menambahkan event listener pada semua link navigasi
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah link default behavior (reload)

    const targetId = e.target.getAttribute("href"); // Mendapatkan target section ID
    const targetElement = document.querySelector(targetId); // Mendapatkan elemen target

    // Scroll ke target element
    targetElement.scrollIntoView({
      behavior: "smooth", // Scroll dengan animasi halus
      block: "start", // Mulai dari bagian atas
    });
  });
});
