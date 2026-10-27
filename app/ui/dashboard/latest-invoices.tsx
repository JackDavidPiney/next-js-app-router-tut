import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function LatestInvoices() { // Remove props
  const latestInvoices = await fetchLatestInvoices();
  
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className="dashboard-section-heading mb-4 text-lg font-medium md:text-xl">
        Latest Invoices
      </h2>
      <div className="dashboard-latest-panel flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: Uncomment this code in Chapter 7 */}

        <div className="dashboard-latest-list flex grow flex-col justify-between rounded-md bg-white px-6">
          {latestInvoices.map((invoice, i) => {
            return (
              <div
                key={invoice.id}
                className={clsx(
                  'dashboard-latest-row flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                  <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="dashboard-latest-avatar mr-4 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="min-w-0">
                    <p className="dashboard-latest-name truncate text-sm font-semibold md:text-base">
                      {invoice.name}
                    </p>
                    <p className="dashboard-latest-email hidden text-sm text-gray-500 sm:block">
                      {invoice.email}
                    </p>
                  </div>
                </div>
                <p
                  className={`${lusitana.className} dashboard-latest-amount truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className="dashboard-latest-footer flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5" />
          <h3 className="ml-2 text-sm">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
