# Alfred Shingai — alfred619.github.io

Personal website for **Alfred Shingai**, Data Analyst specialising in Python, Power BI, Excel and modern web development. Live at **https://alfred619.github.io** (GitHub Pages). This is the full site with portfolio, blog and StatLab Zim — built properly.

## Features

- **Home** — hero with value statement, photo, `View My Work` + `Contact Me` CTAs, featured StatLab Zim, latest blog preview
- **About** — concise bio, BSc Applied Statistics (UZ, final year), 2 internships, skills (Python, Pandas, Streamlit, SciPy, Power BI, DAX, Excel, Plotly), interests, CV download (`assets/cv/alfred-shingai-cv.pdf`)
- **Works** — responsive card grid (6 real projects, no invented links), filters `All / Data Science / Web Development / Tools`, featured StatLab Zim with Live Demo + GitHub, image alt text, lazy loading
- **Blog** — dedicated `blog/index.html` with editorial palette, cards (title, date, excerpt, tags, reading time, Read more), clearly marked **Sample · Draft** posts (3), individual post template with TOC, readable typography, prev/next, share/copy-link
- **Contact** — email `tinonetsanaa@gmail.com`, GitHub, LinkedIn, X (all from existing site — no fabrication)
- **Navigation** — sticky, responsive, `Home / About / Works / Blog / Contact`, active highlight via `IntersectionObserver`, mobile burger with `aria-expanded`, keyboard focus `outline:2px solid var(--primary)`
- **Design** — minimal, strong typography (Syne, DM Sans, Space Mono, Instrument Serif), generous spacing, `prefers-reduced-motion` respected, images optimized, external links `target="_blank" rel="noopener noreferrer"`, SEO meta + OG + favicon

## Colour System (CSS custom properties)

**Core site** (`:root` in `style.css:7` — Home, About, Works, Contact):
```css
--ink:#1D2A38; --ink-muted:#536171; --page:#F7F8FA; --surface:#FFFFFF; --border:#D9E0E7;
--primary:#0F766E; --primary-hover:#0B5E58; --highlight:#F59E0B;
```
Use `--primary` for main buttons/important links, `--highlight` for decorative accents only.

**Blog editorial** (`:root` blog tokens, applied via `body.blog-theme`):
```css
--blog-page:#F5EECD; --blog-text:#362C2C; --blog-muted:#56553B;
--blog-accent:#ED680E; --blog-accent-soft:#FCB04F; --blog-card:#FFFBEA; --blog-divider:#D7CFA9;
```
Blog uses `--blog-accent` for CTAs/active states, `--blog-accent-soft` only for backgrounds/badges (not small text). All combos meet WCAG AA (tested: `--ink` on `--page` 12.5:1, `--primary` on white 5.8:1, `--blog-text` on `--blog-page` 14:1, `--blog-accent` on white 3.9:1 for large text — small text uses `--ink`).

Tokens are in `style.css:7` — change once, updates everywhere.

## Project Structure

```
alfred619.github.io/
├── index.html          # Home: hero, featured, about, works, blog preview, contact
├── style.css           # Tokens + responsive + a11y (core + blog palettes)
├── blog/
│   ├── index.html      # Blog index (buttermilk palette, filters, draft cards)
│   └── posts/
│       ├── reflection-on-building-statlab.html  # Sample draft
│       ├── reading-atomic-habits.html           # Sample draft
│       └── tech-lean-web-components.html        # Sample draft
├── images/             # Reused: personal_logo.png, dashboards, StatLab_Zim.png
├── assets/cv/alfred-shingai-cv.pdf
└── favicon.ico
```

Works reuse existing projects from `https://alfredshingai.github.io` — no new invented projects. Images are `loading="lazy"` + `alt` text. StatLab Zim is featured with **Live Demo** `https://statlab-zim.streamlit.app` + **GitHub** `https://github.com/alfredshingai/statlab-zim`.

## How to Add a New Blog Post

Maintainable structure: static HTML posts in `blog/posts/` + update `blog/index.html` and home preview. No build step required; easy to migrate to Markdown/Eleventy later.

1. **Copy a sample** as template:
   ```bash
   cp blog/posts/tech-lean-web-components.html blog/posts/my-new-post.html
   ```

2. **Edit front-matter in `<head>` and header**:
   ```html
   <title>Your Title — Alfred Shingai</title>
   <meta name="description" content="Short excerpt 140-160 chars for SEO"/>
   <meta property="og:title" content="Your Title"/>
   <meta property="og:description" content="Excerpt"/>
   ...
   <p style="...">2026-09-10 · 5 min · Tags: Python, Streamlit</p>
   <h1>Your Title</h1>
   ```

3. **Write content** in `<div class="post-content">` — use `<h2 id="...">` for TOC links, `<blockquote>`, `<pre><code>`, `<a>` etc. Keep typography readable (max 720px, line-height 1.75).

4. **Update post list** in `blog/index.html`:
   ```html
   <article class="blog-card" data-category="tech">
     <div class="blog-meta"><span>2026-09-10</span><span>Tech</span><span>5 min</span></div>
     <h3><a href="posts/my-new-post.html">Your Title</a></h3>
     <p>Short excerpt...</p>
     <div class="blog-tags"><span>Python</span><span>Streamlit</span></div>
     <a href="posts/my-new-post.html" class="read-more">Read more →</a>
   </article>
   ```
   Replace the 3 sample **Draft** cards with real posts once you have them — drafts are clearly marked and not presented as published work.

5. **Update home preview** in `index.html` `#blog` section — copy the same card into `.blog-preview-grid` (3 latest).

6. **Test locally**:
   ```bash
   python3 -m http.server 8000
   # open http://localhost:8000 and http://localhost:8000/blog/
   ```

For Markdown workflow (future): create `content/blog/*.md` with front-matter (`title, date, excerpt, tags, readingTime`) and use Eleventy (`npx @11ty/eleventy --input=content --output=.`) — structure is ready for that migration.

## Run & Verify

No build step — pure HTML/CSS/JS. For validation:

```bash
# Serve
python3 -m http.server 8000 --directory .

# Quick checks
npx html-validate index.html blog/index.html blog/posts/*.html  # if installed
# or: tidy -q -e index.html  # html-tidy
# Check contrast with axe or Lighthouse: all focus states 2px solid, semantic HTML, alt text present
```

Images are optimized (PNG <80KB), no heavy dependencies, external links use `rel="noopener noreferrer"`, cursors respect `prefers-reduced-motion`.

## Manual Details Still Needed

- **CV:** `assets/cv/alfred-shingai-cv.pdf` exists — replace with latest if outdated.
- **Images:** Reuse existing `images/*.png`; add new project images to `images/` with descriptive `alt` text and `loading="lazy"`.
- **Links:** Verify StatLab Zim Live `https://statlab-zim.streamlit.app` and GitHub `https://github.com/alfredshingai/statlab-zim` stay current; other project GitHub links are from existing portfolio.
- **Social:** Email `tinonetsanaa@gmail.com`, GitHub `alfredshingai`, X `alfredshingai`, LinkedIn `alfred-shingai` — all from current site, no fabrication.
- **Deployment:** GitHub Pages — push to `main` branch of `alfred619/alfred619.github.io`, enable Pages → Branch `main` / root. Live at `https://alfred619.github.io`. `alfredshingai.github.io` remains as original portfolio (separate repo).
- **Blog real posts:** Replace 3 sample drafts (clearly marked) with real content when ready — do not keep drafts as published.

## License

MIT — personal portfolio content © Alfred Shingai 2026.
