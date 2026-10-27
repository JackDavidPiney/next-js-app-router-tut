import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
import AcmeLogo from '@/app/ui/acme-logo';
import ThemeName from '@/app/ui/dashboard/theme-name';

export default function NotFound() {
  return (
    <main className="home-page flex min-h-screen flex-col p-6">
      <header className="home-brand flex h-20 shrink-0 items-end justify-between rounded-lg p-4 md:h-24 md:items-center md:p-6">
        <AcmeLogo className="home-brand-content" />
        <ThemeName compact />
      </header>
      <section className="home-welcome-card my-4 flex grow flex-col items-center justify-center gap-4 rounded-lg px-6 py-10 text-center">
        <FaceFrownIcon aria-hidden="true" className="h-12 w-12 opacity-70" />
        <p className="text-sm font-semibold uppercase tracking-wider">Error 404</p>
        <h1 className="text-3xl font-semibold md:text-4xl">Page not found</h1>
        <p className="home-description max-w-md">
          We couldn&apos;t find the page you were looking for. It may have moved
          or the address may be incorrect.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="sidebar-nav-control sidebar-nav-link flex h-12 cursor-pointer items-center px-4 text-sm font-medium"
          >
            Back to home
          </Link>
          <Link
            href="/dashboard"
            className="sidebar-nav-control sidebar-nav-link flex h-12 cursor-pointer items-center px-4 text-sm font-medium"
          >
            Go to dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
