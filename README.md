# Arman Sirohi — Portfolio

Your portfolio site — dark/light toggle, Manrope + DM Mono type, green accent. Built from your latest resume, with your photo added to the hero card.

## What's in here

```
.
├── index.html                    ← all page content
├── style.css                     ← all styling (dark + light themes)
├── script.js                     ← theme toggle, mobile menu, footer year
├── Arman_Sirohi_Resume.pdf       ← linked from the "Download Resume" button
├── assets/
│   └── profile.jpg               ← your photo, shown in the hero card
└── README.md
```

Sections: hero (with your photo), about, skills, projects (6, from your resume), experience (3 internships), education, credentials (9 certifications + your BDDAAI-2026 publication), contact.

## Deploy to ArmanSirohi22.github.io

1. Go to **github.com/new**. Owner: `ArmanSirohi22`. Repository name must be exactly **`ArmanSirohi22.github.io`** — GitHub auto-publishes this exact name as your profile site, no extra settings needed. Public, no README/.gitignore/license added.
2. Unzip this file. Upload the **contents** of this folder (not the folder itself) to the repo root.
3. In a terminal inside the unzipped folder:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/ArmanSirohi22/ArmanSirohi22.github.io.git
   git push -u origin main
   ```
4. Wait 1–2 minutes, then visit **https://ArmanSirohi22.github.io**.

Every future push to `main` updates the live site automatically.

## One thing worth checking

Your resume lists the current Data Analyst Intern role as 05/2026 – 08/2026 — worth confirming that's the date range you want live, since it reads as spanning into the future from today's date.
