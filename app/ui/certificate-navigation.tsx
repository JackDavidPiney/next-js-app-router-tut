'use client';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import ThemeName from '@/app/ui/dashboard/theme-name';

export default function CertificateNavigation() {
  const router = useRouter();

  function goBack() {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push('/');
  }

  return (
    <nav
      aria-label="Certificate navigation"
      className="certificate-navigation mb-4 flex items-center justify-between"
    >
      <button
        type="button"
        onClick={goBack}
        className="sidebar-nav-control sidebar-nav-link flex h-12 cursor-pointer items-center gap-2 px-4 text-sm font-medium"
      >
        <ArrowLeftIcon aria-hidden="true" className="h-5 w-5" />
        Back
      </button>
      <ThemeName compact />
    </nav>
  );
}
