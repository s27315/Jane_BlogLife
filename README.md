# Fashion Blog Clone

This project recreates the W3Schools Fashion Blog template with local assets and JavaScript-driven interactions.

## Features Implemented

- Real-time search using `querySelector`, `input` event listeners, and `innerText`/`includes` style matching over article data.
- Navigation links handled with `addEventListener` and smooth scrolling without page reload.
- Global `Engagement Score` counter:
  - `let score = 0;`
  - `updateScore()` increments score and updates the DOM.
  - Score text changes to gold when the value reaches 10 or more.
- Tag cloud filtering with `querySelectorAll` and `forEach`:
  - Every tag button receives a click listener.
  - Clicking a tag filters visible `<article>` cards and updates the blog post heading.
- Back-to-top button behavior:
  - Scroll listener toggles `.hidden` when `window.scrollY` is above/below `200`.

## Clean Code Standards Applied

- No inline event handlers (`onclick`, etc.).
- DOM logic is in `script.js`.
- `const` is used for stable DOM references; `let` is used for mutable state (`score`, `activeTag`).
- Semantic tags (`<nav>`, `<article>`, `<main>`, `<aside>`) are used.

## Offline Requirement

All images and logic are local in this repository. The page runs without internet connectivity.

## Suggested Commit Milestones

1. `Create semantic page structure and hero section`
2. `Add responsive layout and article/sidebar styling`
3. `Implement live search and navigation listeners`
4. `Add engagement score logic with gold threshold`
5. `Implement tag cloud filtering with forEach`
6. `Add back-to-top scroll behavior and modal polish`
