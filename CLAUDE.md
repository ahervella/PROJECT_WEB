# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio website built with React, TypeScript, and Vite. It serves a bilingual (English/Spanish) experience with smooth page transitions and will eventually include an in-browser arcade game with backend features (leaderboard, user accounts).

## Common Commands

- **`npm run dev`** — Start the Vite dev server. The app runs at `http://localhost:5173` by default with HMR enabled
- **`npm run build`** — Compile TypeScript (`tsc -b`) then build optimized production bundle with Vite
- **`npm run lint`** — Run ESLint with TypeScript and React Hook rules. Fix issues with `eslint . --fix`
- **`npm run preview`** — Preview the production build locally

## Architecture

### Routing & Pages
Routes are defined in `src/routes.ts` as a centralized constants object. The app uses React Router v7 with nested routes:
- `/` → About page (home)
- `/games/` → Games hub with nested routes for individual games (currently: `/games/eoe`)
- Planned: `/art`, `/music` (commented out)

The App component wraps routes with `AnimatePresence` from Framer Motion, enabling page transitions. Each route change triggers a new key on the Routes tree (via `location.pathname`), allowing controlled exit animations before the new tree mounts.

### Internationalization (i18n)
The project uses **i18next** with the HTTP backend plugin to support English (en) and Spanish (es):
- Configuration: `src/i18n/config.ts` initializes i18next with default language "en" and fallback to "en"
- **Translation files**: Loaded at runtime from `public/locales/{lang}/translation.json` (HttpApi plugin). Before adding a new language, create the directory structure `public/locales/{langCode}/` with a `translation.json` file
- **TText component** (`src/components/TText.tsx`) wraps `useTranslation()` for reactive language changes
- Helper function `getText(locKey)` extracts translation strings without JSX overhead
- When language changes, components using `TText` or `useTranslation()` automatically re-render

### Build & Module System
- **Vite** handles bundling with React plugin and fast HMR
- **TypeScript compilation** runs before bundling: `npm run build` executes `tsc -b` first, so type errors will block the production build
- **Path aliases** configured in both `vite.config.ts` and `tsconfig.json`:
  - `~/*` → root directory
  - `$src/*` → src directory
  - `$assets/*` → src/assets
  - `$comps/*` → src/components
- **ESLint** uses `eslint-import-resolver-alias` and `-typescript` to properly resolve imports through path aliases. Run `eslint . --fix` to auto-fix issues
- **TypeScript** with strict mode enabled, targeting modern browsers
- **Hot Module Reload (HMR)**: Component changes auto-reload, but route definitions and translation file changes may require a browser refresh

### Component Structure
Components follow a flat organizational pattern by feature/page:
- `src/components/` — Shared UI components (ButtonBase, NavButton, TText)
- `src/components/navHeader/` — Navigation header and button variants
- `src/components/pages/` — Page-level components (About, Games, game-specific pages)
- `src/components/pages/games/eoe/` — Nested game page (Echoes of Eternity)

Game pages follow a pattern of a container page and game-specific subpage, allowing nested routing and dedicated styling.

### Animation & Transitions
**Framer Motion** is used for page transitions:
- The App component wraps routes in `<AnimatePresence mode="wait">`, which waits for exit animations to complete before mounting new content
- Routes are keyed by `location.pathname` so each route change unmounts the previous tree
- Individual page components can use Framer Motion's `<motion>` components for smooth entry/exit

### Styling
- **CSS Modules and plain CSS** for component styling (e.g., `TText.css`, `GamesPage.css`)
- Global styles in `src/index.css` and `src/App.css`
- Responsive design with page margins in the main App container

## Key Patterns

**Routes & Page Components**: All top-level pages are defined in `ROUTES` constant and rendered as Route elements. Nested routes (like game detail pages) use React Router's nested routing API.

**Translation Integration**: Components should use the `TText` component for UI text that needs translation, or call `getText(key)` directly if returning plain strings to pass to non-text props.

**Component Props**: Use TypeScript interfaces (e.g., `TTextProps`) for component prop typing. Optional props use `?:` syntax.

## Notes for Future Development

- **Remove `App copy.tsx`** — This is dead code and should be deleted to keep the repo clean
- Several game routes are commented out (GOTC, WEB, PICO8, AAA, LUN); uncomment and implement as games are added
- The Suspense fallback in `main.tsx` handles async translation loading. Ensure all async imports (especially dynamic game page components) are wrapped in Suspense to avoid hydration mismatches

## Adding a New Game

Games follow a consistent pattern. To add a new game:

1. **Create the game folder structure**: `src/components/pages/games/{gameName}/`
2. **Create two components**:
   - `GamesPage{GameName}.tsx` — The container/hub for the game (similar to `GamesPageEOE.tsx`)
   - Optionally: nested subpages for different game views
3. **Add styling**: Create `{GameName}.css` or nest styles in the component
4. **Define the route** in `src/routes.ts` as a nested route under `/games`
5. **Add translation strings** to `public/locales/en/translation.json` and `public/locales/es/translation.json` for any game-specific UI text
6. **Wrap async imports in Suspense** if lazy-loading the game component
