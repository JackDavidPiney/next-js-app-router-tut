import { Metadata } from 'next';
import CertificateShowcase from '@/app/ui/certificate-showcase';

export const metadata: Metadata = {
  title: 'Certificate',
};

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl p-6 md:p-12">
      <CertificateShowcase />
    </main>
  );
}
