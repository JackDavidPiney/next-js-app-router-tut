'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="invoice-page flex h-full w-full flex-col">
      <h1 className="dashboard-page-heading w-full rounded-lg bg-[#111b3a] px-4 py-3 text-lg font-medium text-base-100 md:text-xl">
        Invoices
      </h1>
      <div className="flex grow flex-col items-center justify-center text-base-content">
        <h2 className="text-center">Something went wrong!</h2>
        <button
          type="button"
          className="sidebar-nav-control sidebar-nav-link mt-4 flex h-12 cursor-pointer items-center px-4 text-sm font-medium"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </main>
  );
}