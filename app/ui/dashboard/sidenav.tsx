import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import ThemeName from '@/app/ui/dashboard/theme-name';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  const signOutForm = (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
      className="shrink-0"
    >
      <button
        aria-label="Sign out"
        className="sidebar-nav-control sidebar-nav-link flex h-[48px] w-12 cursor-pointer items-center justify-center gap-2 p-0 text-sm font-medium md:w-full md:justify-start md:p-2 md:px-3"
      >
        <PowerIcon className="h-7 w-7 shrink-0 md:h-6 md:w-6" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    </form>
  );

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="dashboard-mobile-header mb-2 flex h-24 items-center justify-between gap-2 rounded-lg p-4 md:h-40 md:flex-col md:items-stretch md:justify-end md:rounded-none md:p-0">
        <Link
          className="dashboard-mobile-header-logo sidebar-nav-control flex h-full min-w-0 grow items-center justify-start p-0 transition-colors md:h-40 md:grow-0 md:items-end md:p-4"
          href="/"
        >
          <div className="w-32 md:w-40">
            <AcmeLogo className="transition-colors" />
          </div>
        </Link>
        <div className="flex shrink-0 items-center gap-1 md:hidden">
          <div className="dashboard-mobile-theme">
            <ThemeName compact />
          </div>
          <div className="dashboard-mobile-sign-out">{signOutForm}</div>
        </div>
      </div>
      <div className="flex grow flex-row flex-wrap justify-between gap-1 md:flex-nowrap md:flex-col md:space-y-1">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block">
          <ThemeName />
        </div>
        <div className="flex w-full items-center gap-1 md:flex-col md:items-stretch">
          <div className="hidden md:block">{signOutForm}</div>
        </div>
      </div>
    </div>
  );
}
