'use client';

import { useLayoutEffect } from 'react';
import { isThemeSelection } from '@/app/ui/dashboard/theme-options';

export default function ThemeInitializer() {
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
      ? 'dark'
      : 'light';

    try {
      const savedTheme = window.localStorage.getItem('dashboard-theme');
      if (savedTheme && isThemeSelection(savedTheme)) {
        document.documentElement.dataset.theme = savedTheme;
      }
    } catch (error) {
      console.error('Unable to restore the saved theme preference.', error);
    }
  }, []);

  return null;
}
