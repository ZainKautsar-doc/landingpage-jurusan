// =========================
// Mobile Menu Toggle
// =========================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!isExpanded));
  });

  // Tutup menu saat salah satu link dipilih
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Tutup menu saat klik area luar menu
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!target.closest(".nav-wrapper")) {
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

// =========================
// Active link saat scrolling
// =========================
const sections = document.querySelectorAll("main section[id]");

function setActiveLink() {
  let currentId = "home";

  sections.forEach((section) => {
    const top = section.offsetTop - 110;
    if (window.scrollY >= top) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute("href").replace("#", "");
    link.classList.toggle("active", href === currentId);
  });
}

window.addEventListener("scroll", setActiveLink);
window.addEventListener("load", setActiveLink);

// =========================
// Dynamic copyright year
// =========================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
