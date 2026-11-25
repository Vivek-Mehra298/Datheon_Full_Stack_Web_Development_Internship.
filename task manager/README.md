# HabitFlow

HabitFlow is a lightweight browser-based habit tracker for creating habits, marking them complete, tracking streaks, and reviewing daily progress.

## Features

- Add habits with custom icons and colors
- Mark habits complete for the current day
- Track simple completion streaks
- View overall daily progress
- Delete habits with a right-click
- Persist habits in browser local storage
- Responsive premium-style interface

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Remix Icon
- Google Fonts

## Getting Started

Open `index.html` directly in a browser, or serve the folder with a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project Structure

- `index.html` - Page structure and habit dashboard
- `styles.css` - Application styling and responsive layout
- `app.js` - Habit creation, progress, and local storage logic

## Data Storage

Habits are stored in the browser under the `habits` key in `localStorage`. Clearing the site's browser data removes saved habits.
