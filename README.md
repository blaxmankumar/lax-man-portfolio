# Laxman Kumar Battula — Engineering Portfolio

A DevOps, cloud engineering, and site reliability portfolio built with React, TypeScript, and Vite.

## Design and content

The live reference is [lax-man-portfolio.vercel.app](https://lax-man-portfolio.vercel.app/#projects). Original styling is restored from `main`. The black background, grid lines, navigation layout, large typography, orange/yellow/dark-grey project cards, sticky overlapping scrolling, card dimensions, spacing, rounded corners, animations, and transitions are retained. Rendered desktop/mobile screenshots were inspected, and project card computed styles matched the live reference at 1440, 1024, 768, 390, and 320px. Mobile wrapping allows the longer project titles to fit without changing the original font sizes, padding, radius, or arrow dimensions.

The page keeps its original section order: Hero, Projects, Skills, Contact, Footer. The original navigation order is projects, about, skills, contact, get resume. Resume-based About text sits inside the photo-free Skills section, using the existing typography and spacing; the about link targets that profile. The resume link opens the actual PDF directly.

Projects appear in this exact order:

1. [7-Microservices AWS EKS](https://github.com/blaxmankumar/7-Microservice-Project) — original orange card, identified as the flagship in the existing metadata row.
2. [RKE2 Kubernetes Infrastructure](https://github.com/blaxmankumar/rke2-project) — original yellow card.
3. [Snake Game DevOps Automation](https://github.com/blaxmankumar/snake-game-app) — original dark-grey card.

All cards use the original card structure and styling, with project-specific diagrams in the original image slots. Each whole card and its arrow opens the corresponding verified repository in a new tab. Project descriptions reflect repository configuration; they do not claim successful production deployment or measured reliability. See [project verification notes](docs/PROJECT_VERIFICATION.md) for source evidence and implementation limits.

The profile photo is removed and the Skills section rebalanced using the original typography and animation style. Skills cover cloud platforms, infrastructure automation, containers and Kubernetes, CI/CD and GitOps, DevSecOps and monitoring, Linux, and scripting.

Branding is Laxman Kumar Battula. Contact details are [laxmankumarbattula04@gmail.com](mailto:laxmankumarbattula04@gmail.com) and [GitHub / blaxmankumar](https://github.com/blaxmankumar).

## Resume

The actual PDF is included at `public/Laxman_Kumar_Battula_Resume.pdf`. Its two pages were inspected to verify Laxman Kumar Battula's name, professional identity, and email. The navigation's get resume link opens `/Laxman_Kumar_Battula_Resume.pdf` directly, and the production preview serves it as a PDF.

## Local development

```sh
npm ci
npm run dev
```

On Windows, use `npm.cmd` if PowerShell's execution policy prevents running `npm.ps1`.

## Validation

```sh
npm run build
npm run lint
```

Review restoration against the original branch with `git diff main -- src/components/Projects.tsx src/index.css`.

Keep changes on the existing `portfolio-update` branch. No commit, push, merge, or deployment is part of this update.
