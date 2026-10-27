import { Metadata } from 'next';

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import { 
  RevenueChartSkeleton, 
  LatestInvoicesSkeleton, 
  CardSkeleton
} from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Dashboard',
};
 
export default async function Page() {
  return (
    <main>
      <h1
        className="dashboard-page-heading mb-4 rounded-lg bg-[#111b3a] px-4 py-3 text-lg font-medium text-base-100 md:text-xl"
      >
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}