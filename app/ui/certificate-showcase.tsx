import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function CertificateShowcase() {
  return (
    <>
      <div className="mb-6">
        <h1 className={`${lusitana.className} text-2xl`}>
          Next.js App Router Fundamentals
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Certificate of completion · October 26, 2026
        </p>
      </div>

      <section className="rounded-xl bg-gray-50 p-4 shadow-sm md:p-6">
        <h2 className="mb-4 text-sm font-medium text-gray-900">
          Course certificate
        </h2>
        <a
          href="/certificate.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the certificate image at full size"
          className="group block overflow-hidden rounded-lg bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <Image
            src="/certificate.png"
            alt="Certificate awarded to Jack David Piney for completing Next.js App Router Fundamentals on October 26, 2026"
            width={1252}
            height={762}
            priority
            className="h-auto w-full transition-opacity group-hover:opacity-90"
          />
        </a>
        <a
          href="https://github.com/JackDavidPiney/next-js-app-router-tut"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          View the project on GitHub
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </section>
    </>
  );
}
