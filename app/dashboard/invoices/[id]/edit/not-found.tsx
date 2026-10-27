import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="invoice-page flex h-full w-full flex-col">
      <h1 className="dashboard-page-heading w-full rounded-lg bg-[#111b3a] px-4 py-3 text-lg font-medium text-base-100 md:text-xl">
        Invoices
      </h1>
      <div className="flex grow flex-col items-center justify-center gap-2 text-base-content">
        <FaceFrownIcon className="w-10 opacity-60" />
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Could not find the requested invoice.</p>
        <Link
          href="/dashboard/invoices"
          className="sidebar-nav-control sidebar-nav-link mt-4 flex h-12 cursor-pointer items-center px-4 text-sm font-medium"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}