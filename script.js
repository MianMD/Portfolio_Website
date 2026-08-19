// ============================================================
// CLIENTS — shown in the marquee.
// Add more anytime by adding a string to this array.
// ============================================================
const CLIENTS = [
  "ISLAMABAD UNITED",
  "FICO HI-TECH PRIVATE LIMITED",
  "UCP (GAME SCOTCH STUDIO)",
  "KELASH ANIMATION",
  "SABA SOFT",
];

// ============================================================
// PROJECTS — edit this array to add your real work.
//
// For each project:
//   title:    project name
//   role:     your role, e.g. "MOTION DESIGN / EDIT"
//   desc:     1-2 line description
//   embedUrl: paste a Vimeo or YouTube EMBED url here, e.g.
//               Vimeo:   https://player.vimeo.com/video/XXXXXXX
//               YouTube: https://www.youtube.com/embed/XXXXXXXXXXX
//             Leave as null to show a "coming soon" placeholder box.
// ============================================================
const PROJECTS = [
  {
    title: "Project title",
    role: "MOTION DESIGN",
    desc: "Short description of the project goes here.",
    embedUrl: null,
  },
  {
    title: "Project title",
    role: "VIDEO EDIT",
    desc: "Short description of the project goes here.",
    embedUrl: null,
  },
  {
    title: "Project title",
    role: "3D ANIMATION",
    desc: "Short description of the project goes here.",
    embedUrl: null,
  },
  {
    title: "Project title",
    role: "MOTION DESIGN / EDIT",
    desc: "Short description of the project goes here.",
    embedUrl: null,
  },
];

// ---- Render client marquee (duplicated once for a seamless loop) ----
function renderMarquee() {
  const track = document.getElementById("marqueeTrack");
  const items = [...CLIENTS, ...CLIENTS]; // duplicate for seamless scroll
  track.innerHTML = items
    .map((name) => `<span class="logo-chip">${name}</span>`)
    .join("");
}

// ---- Render project cards ----
function renderProjects() {
  const grid = document.getElementById("workGrid");
  grid.innerHTML = PROJECTS.map((p) => {
    const media = p.embedUrl
      ? `<iframe src="${p.embedUrl}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${p.title}"></iframe>`
      : `<span class="project-card__placeholder">VIDEO LINK COMING SOON</span>`;
    return `
      <article class="project-card">
        <div class="project-card__media">${media}</div>
        <p class="project-card__meta">${p.role}</p>
        <h3 class="project-card__title">${p.title}</h3>
        <p class="project-card__desc">${p.desc}</p>
      </article>
    `;
  }).join("");
  observeCards();
}

// ---- Single approved motion rule: opacity fade-in on scroll entry ----
function observeCards() {
  const cards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  cards.forEach((card) => observer.observe(card));
}

document.getElementById("year").textContent = new Date().getFullYear();

renderMarquee();
renderProjects();
