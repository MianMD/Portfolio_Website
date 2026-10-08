const buttons = document.querySelectorAll('.filters button');
const cards = document.querySelectorAll('.video-card');
buttons.forEach(button => {
  button.onclick = () => {
    buttons.forEach(item => item.classList.remove('on'));
    button.classList.add('on');
    const filter = button.dataset.f;
    cards.forEach(card => {
      card.classList.toggle('hide', filter !== 'all' && !card.dataset.c.split(' ').includes(filter));
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
