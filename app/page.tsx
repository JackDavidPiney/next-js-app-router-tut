import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { inter } from './ui/fonts';
import Image from 'next/image';
import CursorReactiveWord from '@/app/ui/cursor-reactive-word';
import ThemeName from '@/app/ui/dashboard/theme-name';

export default function Page() {
  return (
    <main className="home-page flex min-h-screen flex-col p-6">
      <div className="home-brand flex h-20 shrink-0 items-end justify-between rounded-lg p-4 md:h-24 md:items-center md:p-6">
        <AcmeLogo className="home-brand-content" />
        <ThemeName compact />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-col">
        <div className="home-welcome-card flex flex-col gap-6 rounded-lg px-6 py-10 md:w-full md:p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
            <p
              className={`${inter.className} home-description grow antialiased text-xl md:text-2xl md:leading-normal`}
            >
              <strong>
                A <CursorReactiveWord /> of my
                <a href="https://nextjs.org/learn/dashboard-app" target="_blank" rel="noopener noreferrer" className="home-inline-link underline-offset-4 hover:underline focus-visible:underline"> Next.js dashboard </a>
                project using
                <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer" className="home-inline-link underline-offset-4 hover:underline focus-visible:underline"> daisyUI</a>.
              </strong>
              <br />
              <br />
              The login is prefilled so you can simply click <strong>Log in</strong> to explore
              the app.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
            <Link
              href="/login"
              className="sidebar-nav-control sidebar-nav-link flex h-12 items-center gap-2 self-start px-4 text-sm font-medium"
            >
              <span>Log in</span> <ArrowRightIcon className="w-6" />
            </Link>
            <Link
              href="/certificate"
              className="sidebar-nav-control sidebar-nav-link flex h-12 items-center gap-2 self-start px-4 text-sm font-medium"
            >
              View certificate
            </Link>
          </div>
        <div className="home-preview-frame mx-auto w-full max-w-[1687px] overflow-hidden rounded-xl border p-2 shadow-lg md:p-3">
          <Image
            src="/hero-desktop-light.png"
            width={1610}
            height={927}
            unoptimized
            className="home-hero-desktop home-hero-desktop-light h-auto w-full rounded-lg"
            alt="Dashboard preview in the Light theme"
          />
          <Image
            src="/hero-desktop-dark.png"
            width={1602}
            height={926}
            unoptimized
            className="home-hero-desktop home-hero-desktop-dark h-auto w-full rounded-lg"
            alt="Dashboard preview in the Dark theme"
          />
          <Image
            src="/hero-desktop-cyber.png"
            width={1611}
            height={925}
            unoptimized
            className="home-hero-desktop home-hero-desktop-cyber h-auto w-full rounded-lg"
            alt="Dashboard preview in the Cyberpunk theme"
          />
          <Image
            src="/hero-mobile-light.png"
            width={600}
            height={926}
            unoptimized
            className="home-hero-mobile home-hero-mobile-light h-auto w-full rounded-lg"
            alt="Dashboard mobile preview in the Light theme"
          />
          <Image
            src="/hero-mobile-dark.png"
            width={600}
            height={925}
            unoptimized
            className="home-hero-mobile home-hero-mobile-dark h-auto w-full rounded-lg"
            alt="Dashboard mobile preview in the Dark theme"
          />
          <Image
            src="/hero-mobile-cyber.png"
            width={601}
            height={927}
            unoptimized
            className="home-hero-mobile home-hero-mobile-cyber h-auto w-full rounded-lg"
            alt="Dashboard mobile preview in the Cyberpunk theme"
          />
        </div>
      </div>
    </main>
  );
}
