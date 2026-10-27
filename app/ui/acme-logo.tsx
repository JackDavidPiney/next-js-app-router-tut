import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo({
  className = 'text-white',
}: {
  className?: string;
}) {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none ${className}`}
    >
      <GlobeAltIcon className="h-12 w-12 shrink-0 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
