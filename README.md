# Diploman

An educational consulting platform for international students — helping with university admissions, visa applications, and study-abroad services. Built as a learning project and refactored as a portfolio piece.

**Live demo:** [GitHub Pages link] _(set after first deploy — see Deployment section)_

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 13 (Pages Router), React 18, Redux Toolkit |
| Styling | CSS Modules, MUI v5, Bootstrap 5 |
| i18n | next-i18next (en / fr / ar) |
| Backend | Django 4.2 LTS, Django REST Framework 3.15, Djoser, SimpleJWT |
| Auth | JWT (access + refresh tokens) |

---

## Portfolio demo mode

When `NEXT_PUBLIC_API_URL` is not set, the app runs in **demo mode**:
- A blue banner appears at the top indicating the backend is not connected.
- All form submissions and authentication actions are disabled with an informational message.
- The UI, navigation, and content remain fully browsable.

---

## Project structure

```
src/
  actions/       # Redux async actions (auth, alerts)
  components/    # Reusable UI components
    forms/uk/    # UK visa application form sections (12 components)
    forms/usa/   # US visa application form sections (14 components)
  hocs/          # Higher-order components (Layout, withAuth)
  hooks/         # Shared hooks (useFormState)
  pages/         # Next.js pages (file-based routing)
  reducers/      # Redux reducers
  store.js       # Redux Toolkit store
  styles/        # CSS Modules
  utils/         # Demo mode constants

diploman/        # Django project settings
```

---

## Getting started

### Frontend (Next.js)

```bash
npm install
npm run dev          # development server at http://localhost:3000
npm run build        # production build + static export to out/
```

### Backend (Django)

```bash
python -m venv venv && source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # fill in your values
python manage.py migrate
python manage.py runserver
```

### Environment variables

**Frontend** — copy `.env.local.example` to `.env.local`:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend base URL (e.g. `http://localhost:8000`). Leave unset for demo mode. |
| `NEXT_PUBLIC_BASE_PATH` | URL prefix for GitHub Pages project pages (e.g. `/diploman`). Leave empty for root or custom domain. |

**Backend** — copy `.env.example` to `.env`:

| Variable | Description |
|----------|-------------|
| `DJANGO_SECRET_KEY` | Django secret key |
| `DB_PASSWORD` | PostgreSQL password |
| `EMAIL_HOST_USER` | SMTP email address |
| `EMAIL_HOST_PASSWORD` | SMTP password |

---

## Deployment

### GitHub Pages (static export — demo mode)

The project is configured for static export by default (`output: 'export'` in `next.config.js`).

Push to `main` — GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys automatically.

**Enable GitHub Pages once:**
1. Go to **Settings → Pages → Source → GitHub Actions**
2. Push to `main`

> Note: i18n locale routing is disabled in static export mode. All text defaults to English.
> For full multilingual support, deploy to Vercel instead.

### Vercel (full SSR — recommended for full functionality)

1. In `next.config.js`: remove `output: 'export'`, `trailingSlash`, and `images.unoptimized`; uncomment the `i18n` block
2. Import the repo on [vercel.com](https://vercel.com)
3. Set `NEXT_PUBLIC_API_URL` to your backend URL

---

## Features

- **Home page** — hero section, school cards carousel, service overview
- **Forms** — UK and US visa application forms (26 section components)
- **Visa Assist** — step-by-step visa assistance flow
- **Admission** — university admission request form
- **Contact** — contact form
- **Auth** — login, signup, JWT refresh, password reset via email
- **i18n** — English, French, Arabic with locale switcher in header

---

## What was refactored

This project started as a Create React App project partially migrated to Next.js. The cleanup included:

- Completed CRA → Next.js migration (removed react-router, fixed `Link legacyBehavior`, SSR guards)
- Replaced `legacy_createStore` with Redux Toolkit `configureStore`
- Decomposed two 4000+ line form files into 26 focused section components
- Extracted shared `useFormState` hook (used across 11 forms/pages)
- Moved all hardcoded Django secrets to environment variables
- Updated all npm and pip dependencies to current stable versions
- Configured static export with GitHub Actions CI/CD for GitHub Pages
- Added demo mode banner and form-submission guards for portfolio deployment

---

## License

MIT
