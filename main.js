// DeFi.Explained — progressive enhancements
(() => {
  'use strict';

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Current year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Reveal-on-scroll
  const revealTargets = document.querySelectorAll(
    '.pillar, .prim, .risk, .resource, .steps li, .glossary > div, .section-head, .callout, .hero-copy, .card-float'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // Subtle pointer-tracked gradient on primitive cards
  document.querySelectorAll('.prim').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    });
  });

  // Active section highlight in primary nav
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const sectionIds = Array.from(navAnchors).map((a) => a.getAttribute('href'));
  const sections = sectionIds
    .map((id) => document.querySelector(id))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const setActive = (id) => {
      navAnchors.forEach((a) => {
        a.style.color = a.getAttribute('href') === id ? 'var(--text)' : '';
      });
    };
    const spy = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive('#' + visible.target.id);
    }, { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] });
    sections.forEach((s) => spy.observe(s));
  }
})();
