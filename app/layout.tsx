import { Metadata } from 'next';

import '@/app/ui/global.css';
import { inter, lusitana } from '@/app/ui/fonts';
import ThemeInitializer from '@/app/ui/dashboard/theme-initializer';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  publisher: 'Jack David Piney',
  authors: [
    { name: 'Seb' }, 
    { name: 'Josh', url: 'https://nextjs.org'}, 
    { name: 'Jack', url: 'https://github.com/JackDavidPiney' }
  ],
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} ${lusitana.variable} antialiased`}>
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
