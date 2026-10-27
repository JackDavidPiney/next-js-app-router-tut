export function CardSkeleton() {
  return (
    <div
      className="skeleton-shimmer skeleton-panel relative overflow-hidden rounded-xl p-2 shadow-sm"
    >
      <div className="flex p-4">
        <div className="skeleton-block h-5 w-5 rounded-md" />
        <div className="skeleton-block ml-2 h-6 w-16 rounded-md text-sm font-medium" />
      </div>
      <div className="skeleton-inner flex items-center justify-center truncate rounded-xl px-4 py-8">
        <div className="skeleton-block h-7 w-20 rounded-md" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

export function RevenueChartSkeleton() {
  return (
    <div className="skeleton-shimmer relative w-full overflow-hidden md:col-span-4">
      <div className="skeleton-block mb-4 h-8 w-36 rounded-md" />
      <div className="skeleton-panel rounded-xl p-4">
        <div className="skeleton-inner sm:grid-cols-13 mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md p-4 md:gap-4" />
        <div className="flex items-center pb-2 pt-6">
          <div className="skeleton-block h-5 w-5 rounded-full" />
          <div className="skeleton-block ml-2 h-4 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export function InvoiceSkeleton() {
  return (
    <div className="skeleton-divider flex flex-row items-center justify-between border-b py-4">
      <div className="flex items-center">
        <div className="skeleton-block mr-2 h-8 w-8 rounded-full" />
        <div className="min-w-0">
          <div className="skeleton-block h-5 w-40 rounded-md" />
          <div className="skeleton-block mt-2 h-4 w-12 rounded-md" />
        </div>
      </div>
      <div className="skeleton-block mt-2 h-4 w-12 rounded-md" />
    </div>
  );
}

export function LatestInvoicesSkeleton() {
  return (
    <div
      className="skeleton-shimmer relative flex w-full flex-col overflow-hidden md:col-span-4"
    >
      <div className="skeleton-block mb-4 h-8 w-36 rounded-md" />
      <div className="skeleton-panel flex grow flex-col justify-between rounded-xl p-4">
        <div className="skeleton-inner px-6">
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
          <InvoiceSkeleton />
        </div>
        <div className="flex items-center pb-2 pt-6">
          <div className="skeleton-block h-5 w-5 rounded-full" />
          <div className="skeleton-block ml-2 h-4 w-20 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default function DashboardSkeleton() {
  return (
    <>
      <div
        className="skeleton-shimmer skeleton-panel relative mb-4 h-8 w-36 overflow-hidden rounded-md"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChartSkeleton />
        <LatestInvoicesSkeleton />
      </div>
    </>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="skeleton-divider w-full border-b last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Customer Name and Image */}
      <td className="relative overflow-hidden whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex items-center gap-3">
          <div className="skeleton-block h-8 w-8 rounded-full"></div>
          <div className="skeleton-block h-6 w-24 rounded"></div>
        </div>
      </td>
      {/* Email */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="skeleton-block h-6 w-32 rounded"></div>
      </td>
      {/* Amount */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="skeleton-block h-6 w-16 rounded"></div>
      </td>
      {/* Date */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="skeleton-block h-6 w-16 rounded"></div>
      </td>
      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="skeleton-block h-6 w-16 rounded"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex justify-end gap-3">
          <div className="skeleton-block h-[38px] w-[38px] rounded"></div>
          <div className="skeleton-block h-[38px] w-[38px] rounded"></div>
        </div>
      </td>
    </tr>
  );
}

export function InvoicesMobileSkeleton() {
  return (
    <div className="invoice-mobile-card mb-2 w-full rounded-md bg-base-100 p-4 text-base-content">
      <div className="skeleton-divider flex items-center justify-between border-b border-base-300 pb-8">
        <div className="flex items-center">
          <div className="skeleton-block mr-2 h-8 w-8 rounded-full"></div>
          <div className="skeleton-block h-6 w-16 rounded"></div>
        </div>
        <div className="skeleton-block h-6 w-16 rounded"></div>
      </div>
      <div className="flex w-full items-center justify-between pt-4">
        <div>
          <div className="skeleton-block h-6 w-16 rounded"></div>
          <div className="skeleton-block mt-2 h-6 w-24 rounded"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="skeleton-block h-10 w-10 rounded"></div>
          <div className="skeleton-block h-10 w-10 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function InvoicesTableSkeleton() {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="invoice-table-shell rounded-lg bg-base-200 p-2 text-base-content md:pt-0">
          <div className="md:hidden">
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
            <InvoicesMobileSkeleton />
          </div>
          <table className="hidden min-w-full text-base-content md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Customer
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th
                  scope="col"
                  className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6"
                >
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="invoice-table-body bg-base-100">
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
              <TableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
