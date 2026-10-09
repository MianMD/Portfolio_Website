const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.video-card');
const workSection = document.querySelector('.work');
buttons.forEach(button => {
  button.onclick = () => {
    buttons.forEach(item => {
      item.classList.remove('on');
      item.setAttribute('aria-pressed', 'false');
    });
    button.classList.add('on');
    button.setAttribute('aria-pressed', 'true');
    const filter = button.dataset.f;
    workSection.dataset.activeFilter = filter;
    cards.forEach(card => {
      card.classList.toggle('hide', filter !== 'all' && !card.dataset.c.split(' ').includes(filter));
      // Keep the featured mix in All and the original sequence inside each category.
      // CSS order avoids reloading the embedded players when switching filters.
      card.style.order = filter === 'all' ? card.dataset.allOrder : card.dataset.originalOrder;
    });
  };
});

// Mobile previews play the original Vimeo video in a focused, full-height player.
// Desktop keeps the existing in-page embeds; no video is replaced or cropped.
const videoDialog = document.querySelector('.video-dialog');
const playerContainer = document.querySelector('.video-dialog-player');
const playerTitle = document.getElementById('video-dialog-title');
const mobileLayout = window.matchMedia('(max-width: 900px)');
const showAll = document.querySelector('.mobile-show-all');

if (videoDialog && typeof videoDialog.showModal === 'function') {
  document.documentElement.classList.add('mobile-enhanced');

  showAll.addEventListener('click', () => {
    const expanded = workSection.classList.toggle('is-expanded');
    showAll.setAttribute('aria-expanded', String(expanded));
    showAll.textContent = expanded ? 'Show featured videos ↑' : 'View all 17 videos →';
    if (!expanded) workSection.scrollIntoView({ block: 'start', behavior: 'instant' });
  });

  document.querySelectorAll('.mobile-video-preview').forEach(button => {
    button.addEventListener('click', () => {
      if (!mobileLayout.matches) return;
      const card = button.closest('.video-card');
      const player = document.createElement('iframe');
      const source = new URL(card.querySelector('iframe').src);
      source.searchParams.set('autoplay', '1');
      source.searchParams.set('playsinline', '1');
      player.src = source.toString();
      player.title = card.dataset.videoTitle;
      player.allow = 'autoplay; fullscreen; picture-in-picture';
      player.allowFullscreen = true;
      playerTitle.textContent = card.dataset.videoTitle;
      playerContainer.replaceChildren(player);
      videoDialog.showModal();
      document.body.classList.add('video-open');
    });
  });

  document.querySelector('.video-dialog-close').addEventListener('click', () => videoDialog.close());
  videoDialog.addEventListener('click', event => {
    if (event.target !== videoDialog) return;
    const box = videoDialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) videoDialog.close();
  });
  videoDialog.addEventListener('close', () => {
    playerContainer.replaceChildren();
    document.body.classList.remove('video-open');
  });
  mobileLayout.addEventListener('change', event => {
    if (!event.matches && videoDialog.open) videoDialog.close();
  });
}

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
    '.contact-copy, .contact-form, .social-footer, .mobile-project-cta'
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
