# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

André Ferraz's personal website (andreferraz.com). The previous version was a
services landing page; it was removed in November 2026. The site is being
rebuilt as a personal digital garden (notes, projects, things learned, tended
over time). Until that exists, `src/index.html` is a small work-in-progress
placeholder.

## Project Structure

All source files live under `src/`. Root directory has only project config files.

```
andreferraz.com/
├── src/
│   ├── index.html          # Work-in-progress placeholder (EN + PT)
│   └── images/
│       ├── andre.jpg
│       └── favicon/
├── CLAUDE.md
├── README.md
└── .gitignore
```

## Development

- Plain static HTML with inline CSS. No build pipeline, package manager or CSS framework.
- **Preview:** open `src/index.html` in a browser, or serve with `python3 -m http.server -d src`
- There are no test or lint commands.

## Design notes for the placeholder

- Dark by default, light via `prefers-color-scheme`. Colors are CSS variables in `:root`.
- Palette: background `#0f150f`, text `#e4ebdf`, muted `#98a894`, accent `#f0a640` (light theme: `#f3f5ef`, `#1a2219`, `#51604f`, `#c46a10`).
- Font: IBM Plex Mono via Google Fonts.
- Copy is in English with a Portuguese paragraph below it. No JS, no i18n toggle.

## External links on the page

- Email `oandreferraz@gmail.com`, GitHub `andreferrazz`, LinkedIn `oandreferraz`.
- The old contact form and its mail service (`mail-service.andreferraz.com`) are no longer referenced.
