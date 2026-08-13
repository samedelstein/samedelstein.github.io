# Repository Guidelines

## Project Structure & Module Organization
The active site lives in `site/`. Vite builds a static, semantic HTML homepage from `site/index.html`, with shared styles in `site/public/site.css`. Static assets and preserved public routes also live in `site/public/`. The site intentionally uses no client-side framework or JavaScript.

The repository root also contains older Jekyll/static content such as `_posts/`, `_layouts/`, `_includes/`, `about.html`, and `resume/`. Treat those files as legacy unless a task explicitly targets them. Shared images and PDFs used by older pages live under `assets/`, `img/`, and `resume/`.

## Build, Test, and Development Commands
Run commands from `site/` unless noted otherwise.

- `npm.cmd install`: install dependencies.
- `npm.cmd run dev`: start the local Vite development server.
- `npm.cmd run build`: create a production build in `site/dist/`.
- `npm.cmd run preview`: preview the production build locally.

## Coding Style & Naming Conventions
Use 2-space indentation in HTML, CSS, JSON, and Markdown. Prefer semantic HTML and straightforward CSS over adding a client-side framework. Use kebab-case for CSS classes and branch names.

Keep copy changes ASCII where practical, and check for mojibake before committing. Preserve the homepage's intentionally simple portrait-and-text structure unless a task explicitly requests a broader redesign.

## Testing Guidelines
There is no formal test suite. Minimum validation for UI changes is:

- `npm.cmd run build`
- manual desktop and mobile review in the local Vite preview
- broken-image and horizontal-overflow checks

## Commit & Pull Request Guidelines
Use short, imperative commit messages with one clear action per commit.

PRs should include a short summary of user-facing changes, screenshots or a preview link for UI work, confirmation that the production build succeeded, and whether changes affect `site/` only or legacy root-level pages.

## Contributor Notes
Edit `site/index.html` for homepage content and `site/public/site.css` for shared styles. Do not delete or rewrite legacy root files or preserved routes in `site/public/` unless the task explicitly includes them.

## Product and Editorial Rules
SamEdelstein.com is a personal site: understated, specific, curious, and useful. It is not a consulting site, executive-marketing site, or online resume.

Write in Sam's natural first-person voice. Prefer clear observations, questions, and stories over generic executive language. Avoid claims such as "transformational leader," "visionary," "thought leader," "world-class," "cutting-edge," "results-driven," and "best-in-class."

Treat Insight Partners information as private by default. Approved public facts are that Sam is Senior Vice President, Data & AI, leads Data & AI work at Insight Partners, and has reached 90%+ monthly active enterprise generative-AI adoption. Do not infer or expose internal workflows, architecture, datasets, systems, staffing, budgets, vendor decisions, investment processes, or confidential use cases. When unsure, omit or abstract the detail.

Never invent facts, metrics, technologies, dates, titles, responsibilities, quotes, external links, or project screenshots. Use only real repository artifacts.

Prefer whitespace, clear typography, real artifacts, accessible semantics, fast loading, and minimal dependencies. Avoid generic AI imagery, startup gradients, capability grids, metric dashboards, excessive cards, decorative animation, and technology-logo walls. Preserve useful existing URLs, metadata, and legacy public content unless a task explicitly covers their migration.
