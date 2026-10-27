import { Metadata } from 'next';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <main>
      <h1
        className={`${inter.className} dashboard-page-heading mb-4 rounded-lg bg-[#111b3a] px-4 py-3 text-lg font-medium text-base-100 md:text-xl`}
      >
        Customers (Coming soon)
      </h1>
    </main>
  );
}