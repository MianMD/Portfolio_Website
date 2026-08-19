# Portfolio Website

Plain HTML/CSS/JS — no build step, no dependencies to install. That means you can
upload this exact folder to GitHub and deploy it, with nothing else to configure.

## Files

- `index.html` — page structure and text content
- `style.css` — all visual styling (colors, type, spacing — matches `DESIGN.md`)
- `script.js` — client logos, project list, and the two small animations (marquee + fade-in)
- `DESIGN.md` — the design system this site follows

## How to add your real content later

Open `script.js` in GitHub (click the file, then the pencil/edit icon) or in any
text editor.

**To add a project video:**
1. Go to your Vimeo or YouTube video.
2. Get the *embed* link:
   - **Vimeo**: Share → Embed → copy the URL inside `src="..."` (looks like
     `https://player.vimeo.com/video/123456789`)
   - **YouTube**: Share → Embed → copy the URL inside `src="..."` (looks like
     `https://www.youtube.com/embed/dQw4w9WgXcQ`)
3. In `script.js`, find the matching project in the `PROJECTS` array and paste
   the link as the `embedUrl` value, replacing `null`. Update `title`, `role`,
   and `desc` too.

**To add a real client logo (replacing a text placeholder):**
Currently all clients render as text labels in the `CLIENTS` array. If you'd
rather use logo image files, tell Claude and it'll swap the marquee over to
images — just have the logo files (PNG/SVG, ideally transparent background) ready.

## Deploy (free)

1. Create a free account at [github.com](https://github.com)
2. Create a new repository (e.g. `portfolio-website`)
3. On the repo page: **Add file → Upload files**, then drag in every file from
   this folder
4. Create a free account at [vercel.com](https://vercel.com), signing in with GitHub
5. **Add New Project** → select your repo → **Deploy**
6. Vercel gives you a live URL immediately (e.g. `yourname.vercel.app`), and it
   auto-redeploys every time you edit a file on GitHub.
