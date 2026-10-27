'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateInvoice, State } from '@/app/lib/actions';
import { useActionState, useState } from 'react';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState: State = { message: null, errors: {} };
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);
  const [hasChanges, setHasChanges] = useState(false);

  return (
    <form
      className="invoice-form"
      action={formAction}
      onChange={(event) => {
        const formData = new FormData(event.currentTarget);

        setHasChanges(
          formData.get('customerId') !== invoice.customer_id ||
            Number(formData.get('amount')) !== invoice.amount ||
            formData.get('status') !== invoice.status,
        );
      }}
    >
      <div className="invoice-form-panel rounded-xl p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="invoice-form-control peer block w-full cursor-pointer rounded-md border py-2 pl-10 text-sm focus-visible:outline focus-visible:outline-2"
              defaultValue={invoice.customer_id}
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="invoice-form-icon pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customerId &&
            state.errors.customerId.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                defaultValue={invoice.amount}
                placeholder="Enter USD amount"
                aria-describedby="amount-error"
                aria-invalid={Boolean(state.errors?.amount)}
                className="invoice-form-control peer block w-full rounded-md border py-2 pl-10 text-sm focus-visible:outline focus-visible:outline-2"
              />
              <CurrencyDollarIcon className="invoice-form-icon pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
            </div>
            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {state.errors?.amount?.map((error) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="invoice-status-options rounded-md border px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  defaultChecked={invoice.status === 'pending'}
                  className="invoice-status-radio h-4 w-4 cursor-pointer focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="invoice-status-pending ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  defaultChecked={invoice.status === 'paid'}
                  className="invoice-status-radio h-4 w-4 cursor-pointer focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="invoice-status-paid ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="invoice-form-cancel invoice-toolbar-control sidebar-nav-control sidebar-nav-link flex items-center px-4 text-sm font-medium transition-colors"
        >
          Cancel
        </Link>
        <Button
          type="submit"
          disabled={!hasChanges}
          aria-disabled={!hasChanges}
          className="invoice-form-submit invoice-toolbar-control sidebar-nav-control sidebar-nav-link"
        >
          Edit Invoice
        </Button>
      </div>
    </form>
  );
}
