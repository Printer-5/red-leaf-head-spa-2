
const SQUARE_BOOKING_URL = "PASTE_YOUR_SQUARE_BOOKING_URL_HERE";
const SQUARE_GIFT_CARD_URL = "PASTE_YOUR_SQUARE_GIFT_CARD_URL_HERE";

const configured = value => value && !value.startsWith("PASTE_");

document.querySelectorAll(".square-booking-link").forEach(link => {
  link.href = configured(SQUARE_BOOKING_URL) ? SQUARE_BOOKING_URL : "contact.html";
  if (configured(SQUARE_BOOKING_URL)) {
    link.target = "_blank";
    link.rel = "noopener";
  }
});

document.querySelectorAll(".square-gift-card-link").forEach(link => {
  link.href = configured(SQUARE_GIFT_CARD_URL) ? SQUARE_GIFT_CARD_URL : "contact.html";
  if (configured(SQUARE_GIFT_CARD_URL)) {
    link.target = "_blank";
    link.rel = "noopener";
  }
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add("visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();
