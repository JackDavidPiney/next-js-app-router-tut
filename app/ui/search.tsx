'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import clsx from 'clsx';

export default function Search({
  placeholder,
  className,
}: {
  placeholder: string;
  className?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
  const params = new URLSearchParams(searchParams);
  params.set('page', '1');
  if (term) {
    params.set('query', term);
  } else {
    params.delete('query');
  }
  replace(`${pathname}?${params.toString()}`);
}, 500);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className={clsx(
          'invoice-toolbar-control peer block w-full rounded-lg border border-base-300 bg-base-100 pl-10 text-sm text-base-content placeholder:text-base-content/60 focus-visible:border-primary focus-visible:outline-none',
          className,
        )}
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="invoice-search-icon absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-base-content/60 peer-focus:text-primary" />
    </div>
  );
}
