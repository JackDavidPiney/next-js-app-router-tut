'use client';

import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createInvoice, State } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction} className="invoice-form">
      <div className="invoice-form-panel rounded-xl p-4 text-base-content md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="invoice-form-control peer block w-full cursor-pointer rounded-md border border-base-300 bg-base-100 py-2 pl-10 text-sm text-base-content focus-visible:outline focus-visible:outline-2"
              defaultValue=""
              aria-describedby="customer-error"
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
                placeholder="Enter USD amount"
                className="invoice-form-control peer block w-full rounded-md border border-base-300 bg-base-100 py-2 pl-10 text-sm text-base-content focus-visible:outline focus-visible:outline-2"
                aria-describedby="amount-error"
              />
              <CurrencyDollarIcon className="invoice-form-icon pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
            </div>
            <div id="amount-error" aria-live="polite" aria-atomic="true">
            {state.errors?.amount &&
            state.errors.amount.map((error: string) => (
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
                  className="invoice-status-radio h-4 w-4 cursor-pointer focus:ring-2"
                  aria-describedby="customer-error"
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

          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
            ))}
          </div>

        </fieldset>

        <div id="form-error" aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </div>
          
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
          className="invoice-form-submit invoice-toolbar-control sidebar-nav-control sidebar-nav-link"
        >
          Create Invoice
        </Button>
      </div>
      
    </form>
  );
}
