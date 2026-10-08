const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.video-card');
buttons.forEach(button => {
  button.onclick = () => {
    buttons.forEach(item => {
      item.classList.remove('on');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('on');
    button.setAttribute('aria-pressed', 'true');
    const filter = button.dataset.f;
    cards.forEach(card => {
      card.classList.toggle('hide', filter !== 'all' && !card.dataset.c.split(' ').includes(filter));
      // Keep the featured mix in All and the original sequence inside each category.
      // CSS order avoids reloading the embedded players when switching filters.
      card.style.order = filter === 'all' ? card.dataset.allOrder : card.dataset.originalOrder;
    });
  };
});

const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');
menu.onclick = () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
};
nav.querySelectorAll('a').forEach(link => {
  link.onclick = () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  };
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});

// Enhance only off-screen content; the page remains readable without JavaScript.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motionPreference.matches && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll(
    '.brands-heading, .companies .title, .company-grid article, .work .title, ' +
    '.filters, .video-card, .services > small, .service article, .about, ' +
    '.contact-copy, .contact-form, .social-footer'
  );
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  revealTargets.forEach(target => {
    if (target.getBoundingClientRect().top < window.innerHeight - 20) return;
    target.classList.add('reveal-ready');
    observer.observe(target);
  });

  document.addEventListener('focusin', event => {
    const target = event.target.closest('.reveal-ready');
    if (target) {
      target.classList.add('is-visible');
      observer.unobserve(target);
    }
  });

  motionPreference.addEventListener('change', event => {
    if (!event.matches) return;
    revealTargets.forEach(target => target.classList.add('is-visible'));
    observer.disconnect();
  });
}
