export const themes = ['light', 'dark', 'cyberpunk'] as const;
export type ThemeSelection = (typeof themes)[number];

export const themeLabels: Record<ThemeSelection, string> = {
  light: 'Light',
  dark: 'Dark',
  cyberpunk: 'Cyberpunk',
};

export function isThemeSelection(
  value: string | undefined,
): value is ThemeSelection {
  return themes.some((theme) => theme === value);
}

export function saveThemeSelection(theme: ThemeSelection) {
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem('dashboard-theme', theme);
  } catch (error) {
    console.error('Unable to save the theme preference.', error);
  }
}
