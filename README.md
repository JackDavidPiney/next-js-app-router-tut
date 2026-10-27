# Acme Dashboard — DaisyUI Restyle

A responsive, full-stack dashboard built with the Next.js App Router and restyled with Tailwind CSS 4 and DaisyUI. This branch extends the Next.js App Router Fundamentals course project with a cohesive visual system, interactive theme selection, and theme-specific desktop and mobile previews.

## TL;DR

- Restyled the Next.js dashboard with **Light**, **Dark**, and **Cyberpunk** themes using Tailwind CSS 4 and DaisyUI.
- Added a theme picker that cycles through all three themes and remembers the selection across visits and page navigation.
- Animated the theme icons: the Dark moon fills and twinkles, while the Cyberpunk bolt fills and flashes; animations respect reduced-motion preferences.
- Carried the theme styling consistently across the homepage, login, dashboard, navigation, customer and invoice pages, forms, charts, loading states, certificate pages, and error/404 screens.
- Added matching theme-specific desktop and mobile homepage previews, plus responsive mobile navigation and header controls.

## What changed in this branch

### Three complete visual themes

The interface supports **Light**, **Dark**, and **Cyberpunk** themes across the homepage, login screen, dashboard, invoice workflows, certificate pages, loading states, and error pages.

- The theme picker cycles between Light, Dark, and Cyberpunk.
- The selected theme is saved in `localStorage` and restored when the app loads.
- Theme state is applied to the root document, allowing CSS theme tokens to update consistently across pages and client-side navigation.
- DaisyUI provides the semantic theme palette. The Cyberpunk palette is customized with a deep navy primary color and bright yellow accents.
- Theme controls include matching icons and subtle animations. Reduced-motion preferences are respected for animated theme icons.

### Responsive homepage and previews

- The homepage introduces the restyled project, with links to the login and public certificate.
- The Acme logo and compact theme picker share the responsive header.
- A short description introduces the visual restyle, followed by a framed dashboard preview.
- The preview switches between theme-specific desktop and mobile screenshots. Mobile screenshots are shown below the 768px breakpoint; desktop screenshots are shown at and above it.
- The logo icon is fixed against flex shrinking so it retains its intended size on narrow screens.

### Dashboard and navigation

- The overview presents collected and pending amounts, invoice and customer totals, a revenue chart, and recent invoices.
- The sidebar provides navigation to the dashboard, invoices, customers, and certificate.
- On mobile, navigation becomes a compact icon row. The logo, theme picker, and sign-out control share the header; the desktop sidebar retains its full theme control and labeled sign-out button.
- Dashboard cards, headings, charts, invoice panels, avatars, and loading skeletons use the active theme.

### Invoice workflows

- Search, pagination, status display, and invoice tables are styled for all three themes.
- Users can create, edit, and delete invoices.
- Create and edit forms validate customer, amount, and status values with Zod-backed server actions and display field-level errors.
- The edit action is disabled until a value changes and becomes disabled again if the form is restored to its original values.
- Loading skeletons, breadcrumbs, action controls, and status treatments follow the same theme system.
- Malformed invoice IDs are rejected before database lookup and shown as not found. The invoice-specific not-found page includes a link back to the invoice list.
- Invoice route errors display a retry action.

### Authentication, certificate, and error handling

- Credentials authentication uses NextAuth and the PostgreSQL users table. The login form includes prefilled demo credentials for exploring the course project when its database is configured and seeded.
- Dashboard routes require an authenticated session; unauthenticated visitors are sent to the login page.
- The `/query` demo endpoint requires an authenticated session and returns `401 Unauthorized` otherwise.
- The course certificate is available at `/certificate` and from the authenticated dashboard at `/dashboard/certificate`.
- A custom app-wide 404 page provides theme selection and navigation back to the homepage or dashboard.

## Routes

| Route | Description |
| --- | --- |
| `/` | Project introduction and responsive theme-specific previews |
| `/login` | Credentials login |
| `/dashboard` | Dashboard overview |
| `/dashboard/invoices` | Searchable, paginated invoice list |
| `/dashboard/invoices/create` | Create an invoice |
| `/dashboard/invoices/[id]/edit` | Edit an invoice |
| `/dashboard/customers` | Customers page placeholder |
| `/dashboard/certificate` | Certificate within the dashboard |
| `/certificate` | Public course certificate |
| `/query` | Authenticated demo data endpoint |

Dashboard routes are protected by authentication. The homepage, login, and public certificate are available without signing in.

## Technology

- [Next.js](https://nextjs.org/) App Router and React
- [Tailwind CSS 4](https://tailwindcss.com/)
- [DaisyUI 5](https://daisyui.com/)
- [PostgreSQL](https://www.postgresql.org/) with `postgres`
- [NextAuth](https://authjs.dev/) credentials authentication
- [Zod](https://zod.dev/) form validation
- [Heroicons](https://heroicons.com/)
- TypeScript

Tailwind and DaisyUI are configured through CSS in `app/ui/global.css`; the PostCSS integration is configured in `postcss.config.mjs`.

## Run locally

### Requirements

- Node.js compatible with the installed Next.js version
- pnpm
- A PostgreSQL database configured for the course project

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a local `.env` file and configure `POSTGRES_URL` to point to your PostgreSQL database. Configure any required NextAuth environment values for your setup. Do not commit `.env` or other secrets.

3. Initialize and seed the database using the schema and seed instructions from the [Next.js Dashboard App course](https://nextjs.org/learn/dashboard-app).

4. Start the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000). The login form has demo credentials prefilled; they work when the corresponding demo user exists in the configured database.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Run the development server with Turbopack |
| `pnpm lint` | Run ESLint |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |

Build before running `pnpm start`.

## Certificate

The certificate image is available in [`public/certificate.png`](./public/certificate.png). Select it to view the full-size image.

[![Next.js App Router Fundamentals certificate awarded to Jack David Piney](./public/certificate.png)](./public/certificate.png)
