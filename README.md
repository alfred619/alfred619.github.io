# Alfred Shingai — alfred1805.github.io

Personal website for Alfred Shingai — Data Analyst & web enthusiast. Light only, built properly. Contains portfolio + blog (reflections, books, tech).

**Live:** `https://alfred1805.github.io` (once deployed as separate repo `alfred1805.github.io` under `alfredshingai` account — or `https://alfredshingai.github.io/alfred1805.github.io` as project site) and `https://alfredshingai.github.io` remains as project portfolio.

## Stack
- Pure HTML/CSS/JS, no framework
- Exact light palette from inspiration: `paper #f5f1e8`, `surface #fcfaf3`, `ink #1e1a13`, `muted #6b6151`, `line #e1d9c6`, `accent #b6491f`
- Fonts: Space Grotesk + JetBrains Mono
- Blog as static HTML in `blog/` — easy to extend, no build step

## Structure
```
personal-site/
├── index.html          # Home: hero, work, story, writing, contact
├── blog/
│   ├── index.html      # Blog index (buttermilk light editorial)
│   ├── reading-atomic-habits.html
│   ├── reflection-on-building-statlab.html
│   └── tech-lean-web-components.html
├── assets/
│   ├── styles.css      # 7 CSS variables, light-only
│   └── main.js         # reveal + nav
```

## How to add a new blog post
1. Copy a sample: `cp blog/tech-lean-web-components.html blog/my-new-post.html`
2. Edit `<title>`, `<meta name="description">`, `<h1>`, `post-meta` (date, reading time, tags), and `<div class="post-content">`
3. Add card to `blog/index.html` and preview to `index.html` if featured
4. Test: `python3 -m http.server 8000` → http://localhost:8000

## Deploy
- This repo is intended as `alfred1805.github.io` (separate from `alfredshingai.github.io` portfolio)
- Push to GitHub: `git remote add origin https://github.com/alfredshingai/alfred1805.github.io.git && git push -u origin main`
- Enable Pages: GitHub → Settings → Pages → Branch `main` / root
- Title is simply `Alfred Shingai` (changed from `Alfred Shingai — Data Analyst & Builder`)

## License
MIT — personal content © Alfred Shingai 2026
