# Repository Guidelines

## Project Structure & Module Organization
The active site lives in `site/`, a Vite + React app styled with Tailwind. Main application code is in `site/src/`, with the homepage and routed views currently defined in `site/src/App.jsx`. Static assets for the React app live in `site/public/`.

The repo root also contains older Jekyll/static site content such as `_posts/`, `_layouts/`, `_includes/`, `about.html`, and `resume/`. Treat those files as legacy unless a task explicitly targets them. Shared images and PDFs used by older pages live under `assets/`, `img/`, and `resume/`.

## Build, Test, and Development Commands
Run commands from `site/` unless noted otherwise.

- `npm.cmd install`: install dependencies.
- `npm.cmd run dev`: start the local Vite dev server.
- `npm.cmd run build`: create a production build in `site/dist/`.
- `npm.cmd run preview`: preview the production build locally.
- `npm.cmd run lint`: run ESLint on the React app.

Example:
```powershell
cd site
npm.cmd run dev
```

## Coding Style & Naming Conventions
Use 2-space indentation in JSX, JS, JSON, and Markdown. Prefer functional React components and keep page content in small data arrays when it improves readability. Use `PascalCase` for components, `camelCase` for variables and functions, and kebab-case for branch names.

Keep copy changes ASCII where practical, and check for mojibake before committing. Use Tailwind utilities already present in `App.jsx` instead of adding one-off CSS unless a reusable style is needed.

## Testing Guidelines
There is no formal test suite yet. Minimum validation for UI changes is:
- `npm.cmd run build`
- `npm.cmd run lint`
- manual review in the local Vite preview

If you add tests later, place them under `site/src/` near the related component and use `*.test.jsx`.

## Commit & Pull Request Guidelines
Recent commits use short, imperative messages such as `Refine leadership profile copy` and `Add selected impact section to homepage`. Follow that style: one clear action per commit.

PRs should include:
- a short summary of user-facing changes
- screenshots or a preview link for UI work
- confirmation that `npm.cmd run build` succeeded
- any notes about whether changes affect `site/` only or legacy root-level pages

## Contributor Notes
Prefer editing `site/src/App.jsx` for homepage and route content unless a broader refactor is requested. Do not delete or rewrite legacy root files unless the task explicitly includes them.
