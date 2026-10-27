'use client';

import { useSyncExternalStore } from 'react';
import { BoltIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import {
  isThemeSelection,
  saveThemeSelection,
  themeLabels,
  themes,
  type ThemeSelection,
} from '@/app/ui/dashboard/theme-options';

function getThemeName(): ThemeSelection {
  const theme = document.documentElement.dataset.theme;
  if (isThemeSelection(theme)) return theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function subscribeToThemeName(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  colorScheme.addEventListener('change', onChange);

  return () => {
    observer.disconnect();
    colorScheme.removeEventListener('change', onChange);
  };
}

export default function ThemeName({
  compact = false,
}: {
  compact?: boolean;
}) {
  const theme = useSyncExternalStore(
    subscribeToThemeName,
    getThemeName,
    (): ThemeSelection => 'light',
  );
  const ThemeIcon = {
    light: SunIcon,
    dark: MoonIcon,
    cyberpunk: BoltIcon,
  }[theme];

  return (
    <button
      type="button"
      aria-label={`Change theme from ${themeLabels[theme]}`}
      title="Click to change theme"
      className={clsx(
        compact
          ? 'theme-selector-compact sidebar-nav-control sidebar-nav-link flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center p-0 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
          : 'sidebar-nav-control flex h-full min-h-24 w-full cursor-pointer flex-col items-end justify-between px-3 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        `theme-selector-${theme}`,
      )}
      onClick={() => {
        const nextTheme =
          themes[(themes.indexOf(theme) + 1) % themes.length];
        saveThemeSelection(nextTheme);
      }}
    >
      <span
        className={clsx(
          'theme-current-label flex items-center gap-2 text-sm font-medium',
          compact ? 'justify-center' : 'w-full',
        )}
      >
        {theme === 'dark' ? (
          <span
            className={clsx(
              'theme-moon-icon relative inline-flex shrink-0',
              compact ? 'size-7' : 'size-6',
            )}
          >
            <MoonIcon
              aria-hidden="true"
              className={compact ? 'size-7' : 'size-6'}
            />
            <MoonIcon
              aria-hidden="true"
              className={clsx(
                'theme-moon-fill absolute inset-0',
                compact ? 'size-7' : 'size-6',
              )}
            />
            <span aria-hidden="true" className="theme-moon-star theme-moon-star-one">
              ✦
            </span>
            <span aria-hidden="true" className="theme-moon-star theme-moon-star-two">
              ✦
            </span>
            <span aria-hidden="true" className="theme-moon-star theme-moon-star-three">
              ✦
            </span>
          </span>
        ) : theme === 'cyberpunk' ? (
          <span
            className={clsx(
              'theme-bolt-icon relative inline-flex shrink-0',
              compact ? 'size-7' : 'size-6',
            )}
          >
            <BoltIcon
              aria-hidden="true"
              className={compact ? 'size-7' : 'size-6'}
            />
            <BoltIcon
              aria-hidden="true"
              className={clsx(
                'theme-bolt-fill absolute inset-0',
                compact ? 'size-7' : 'size-6',
              )}
            />
          </span>
        ) : (
          <ThemeIcon
            aria-hidden="true"
            className={clsx('shrink-0', compact ? 'size-7' : 'size-6')}
          />
        )}
        {!compact && `Theme: ${themeLabels[theme]}`}
      </span>
      {!compact && (
        <div className={clsx('self-start text-2xl', `theme-name-${theme}`)}>
          {themeLabels[theme]}
        </div>
      )}
    </button>
  );
}
