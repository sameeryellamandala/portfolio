// Portfolio - Sameer Yellamandala
// Interactive behavior

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  navToggle?.addEventListener('click', () => {
    nav?.classList.toggle('open');
    navToggle?.setAttribute('aria-expanded', nav?.classList.contains('open'));
  });

  // Close nav when clicking a link (mobile)
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav?.classList.remove('open');
    });
  });

  // Nav background on scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Smooth reveal on scroll - fade in sections when they enter viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -80px 0px' });

  document.querySelectorAll('.section, .project-card, .edu-card, .achievement-item, .leadership-card').forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
});

// Copy email to clipboard
function copyEmail() {
  const email = document.getElementById('email-value')?.textContent || 'sameery2233@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    const btn = document.querySelector('.copy-btn[onclick]');
    if (btn) {
      const original = btn.innerHTML;
      btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>';
      btn.style.color = 'var(--accent)';
      setTimeout(() => { btn.innerHTML = original; btn.style.color = ''; }, 1500);
    }
  });
}
