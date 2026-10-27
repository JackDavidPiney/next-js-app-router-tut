import { Metadata } from 'next';

import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Create Invoice',
};
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <h1
        className={`${inter.className} dashboard-page-heading mb-4 rounded-lg bg-[#111b3a] px-4 py-3 text-lg font-medium text-base-100 md:text-xl`}
      >
        Create Invoice
      </h1>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}