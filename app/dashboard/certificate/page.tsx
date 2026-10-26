import { Metadata } from 'next';
import CertificateShowcase from '@/app/ui/certificate-showcase';

export const metadata: Metadata = {
  title: 'Certificate',
};

export default function Page() {
  return (
    <main className="w-full">
      <CertificateShowcase />
    </main>
  );
}