const burgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector("header");
const navLink = document.querySelectorAll(".nav-link");

burgerMenu.addEventListener("click", () => {
  header.classList.toggle("open");

  navLink.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 8 +
        0.5}s`;
    }
  });
});

gsap.fromTo(".hero-clipped", { scaleX: 0 }, { duration: 1, scaleX: 1 });
gsap.fromTo(
  ".img-logo",
  { x: -200, opacity: 0 },
  { duration: 1, delay: 0.5, x: 0, opacity: 1 }
);
gsap.fromTo(
  ".burger-menu",
  { x: 200, opacity: 0 },
  { duration: 1, delay: 0.8, x: 0, opacity: 1 }
);
gsap.fromTo(
  ".hero-textbox",
  { yPercent: -40, opacity: 0 },
  { duration: 1, delay: 1.3, yPercent: -50, opacity: 1 }
);
gsap.from(".social-icons", { y: 10, duration: 1, opacity: 0, delay: 1.3 });

// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal(".animate-from-left", {
  origin: "left",
  duration: 1000,
  distance: "20rem",
  delay: 600
});
sr.reveal(".animate-from-right", {
  origin: "right",
  duration: 1000,
  distance: "20rem",
  delay: 300
});
