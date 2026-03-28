# React Portfolio

A personal portfolio built with React and Vite to showcase experience, skills, coding profiles, selected projects, and contact details in a polished single-page experience with dedicated project detail views.

Live site: [suryavanshi.vercel.app](https://suryavanshi.vercel.app)

## Overview

This project is a responsive developer portfolio for **Nikhil Suryavanshi**. It combines a section-based landing page with routed project detail pages, theme support, animated interactions, and a working contact form powered by EmailJS and Google reCAPTCHA.

The app is structured to keep most portfolio content in reusable constant files so profile details, resume entries, services, skills, and projects can be updated without rewriting core UI components.

## Features

- Hero section with typed role animation and social links
- About, skills, coding profiles, resume, services, and contact sections
- Filterable project gallery with lightbox preview
- Dedicated project details route for deeper case-study style content
- Dark/light theme support with local persistence
- Scroll animations, lazy-loaded routes, and responsive layout
- Contact form with validation, EmailJS integration, toast feedback, and Google reCAPTCHA
- Vercel Analytics integration

## Tech Stack

- React 19
- Vite 6
- React Router
- Bootstrap 5
- Custom CSS
- AOS
- GLightbox
- Isotope
- Swiper
- Typed.js
- React Hook Form
- EmailJS
- Google reCAPTCHA
- React Toastify
- Vercel Analytics

## Project Structure

```text
src/
  components/
    home/              # Home page sections
    layouts/           # Header, footer, theme toggle, preloader, scroll helpers
    pages/             # Home and project details pages
  constants/           # Portfolio content and configuration data
  contexts/            # Theme context
  hooks/               # AOS, Typed.js, GLightbox, Isotope, theme helpers
  assets/              # CSS and images
  routes/              # App routes
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Environment Variables

Create a `.env` file in the project root if you want the contact form to work locally:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GOOGLE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
```

If these values are missing, the contact form integration will not be able to send messages correctly.

## Content Customization

Most site content is managed through the files in `src/constants`:

- `personalData.js` for profile info, social links, about content, and contact details
- `skillsData.js` for technical skills
- `resumeData.js` for education and experience
- `servicesData.js` for offered services
- `portfolioData.js` for project cards and project detail content

Images are organized under `src/assets/img`, and custom styling lives in `src/assets/css`.

## Routing

The app currently includes:

- `/` for the main portfolio page
- `/project-details?id=<project-id>` for individual project details

## Notes

- The `@` alias maps to `src` through `vite.config.js`
- Theme preference is stored in `localStorage`
- Project detail pages are driven by `portfolioDetailData` and support image galleries via Swiper
- Deployment is configured for Vercel with `vercel.json`

## License

This project is licensed under the [MIT License](./LICENSE).
