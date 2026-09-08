# Muhammad Mohiuddeen — Portfolio

A plain HTML/CSS/JS site — no build step, no framework. That means you can deploy it
exactly as-is to GitHub + Vercel.

## Files

- `index.html` — all the page content
- `styles.css` — all the styling
- `script.js` — portfolio filter buttons, mobile menu, contact form

## 1. Put it on GitHub

1. Create a new repository on GitHub (e.g. `portfolio`).
2. Upload these three files (`index.html`, `styles.css`, `script.js`) to the repo —
   either drag-and-drop them on the GitHub website ("Add file" → "Upload files"), or
   use GitHub Desktop if you have it installed.
3. Commit.

## 2. Deploy on Vercel (free)

1. Go to vercel.com and sign in with your GitHub account.
2. Click "Add New" → "Project".
3. Select the repository you just created.
4. Framework preset: choose **"Other"** (it's a plain static site — no build command,
   no output directory needed).
5. Click **Deploy**. Vercel gives you a live URL in about 30 seconds
   (something like `your-portfolio.vercel.app`).

Every time you push a change to GitHub, Vercel redeploys automatically.

## Things to swap in before you share the link

- **Portfolio videos**: each project card in `index.html` has `href="#"` and the text
  "Add your Vimeo/YouTube link" — replace the `href` with your real Vimeo/YouTube URL
  once you have them, and update the label text.
- **Project thumbnails**: right now each card uses a colored gradient placeholder
  (search `project-thumb` in `styles.css`) since no real thumbnails were provided yet.
  Swap in real screenshots/frames from your videos when ready — happy to help wire
  those in.
- **Client logos**: the marquee currently shows client *names* as text. If you get
  real logo files (SVG/PNG, transparent background), send them over and I'll swap the
  marquee to use actual logos instead of text.
- **Contact form**: right now, submitting the form just opens the visitor's email app
  with your message pre-filled (works with zero backend — fine for a first version).
  If you'd rather have submissions land straight in an inbox or spreadsheet, the
  easiest free option is [Formspree](https://formspree.io) — I can wire that in for
  you in a couple of minutes when you're ready.

## Custom domain (optional, later)

If you buy a domain (e.g. from Namecheap), Vercel's project settings has a "Domains"
tab where you can point it at your Vercel project — free on Vercel's side, you only
pay the domain registrar.
