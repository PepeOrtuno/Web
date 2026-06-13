/* ============================================================
   main.js — Interacciones básicas de la web de O.T.R.A
   ============================================================ */

// ── Navbar: añade clase .scrolled al hacer scroll ──────────────
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Menú burger en móvil ───────────────────────────────────────
const burger = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Cerrar menú al pinchar un enlace
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// ── Scroll suave para todos los enlaces internos (#) ───────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Animación de entrada al hacer scroll (Intersection Observer) ─
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // solo se anima una vez
    }
  });
}, observerOptions);

// Elementos que se animan al aparecer en pantalla
document.querySelectorAll('.release, .show-item, .about-text, .music-header, .shows-header').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

/* Añade esto en base.css o aquí mismo si prefieres tenerlo junto:
   .fade-in { opacity: 0; transform: translateY(16px); transition: opacity .5s ease, transform .5s ease; }
   .fade-in.visible { opacity: 1; transform: none; }
*/
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: none;
  }
`;
document.head.appendChild(style);
