import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';

export default function CertificateShowcase() {
  return (
    <>
      <div className="certificate-header mb-6 rounded-lg px-4 py-3">
        <h1 className={`${inter.className} text-lg font-medium md:text-xl`}>
          Next.js App Router Fundamentals
        </h1>
        <p className="certificate-subtitle mt-2 text-sm">
          Certificate of completion · October 26, 2026
        </p>
      </div>

      <section className="certificate-card rounded-xl bg-base-200 p-4 text-base-content shadow-sm md:p-6">
        <h2 className="mb-4 text-sm font-medium">
          Course certificate
        </h2>
        <a
          href="/certificate.png"
          target="_blank"
          rel="noreferrer"
          aria-label="Open the certificate image at full size"
          className="certificate-image-link group block overflow-hidden rounded-lg bg-base-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
          className="certificate-project-link mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View the project on GitHub
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
      </section>
    </>
  );
}
