'use client';

import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import Link from 'next/link';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="login-form space-y-3">
      <div className="login-card flex-1 rounded-lg px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <p className="login-help mt-2 text-center text-sm">
          Demo credentials are prefilled. Click Log in to explore the full app.
        </p>
        <div className="w-full">
          <div>
            <label
              className="login-label mb-3 mt-5 block text-xs font-medium"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="login-control peer block w-full rounded-md border py-[9px] pl-10 text-sm focus-visible:outline focus-visible:outline-2"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                defaultValue="user@nextmail.com"
                required
              />
              <AtSymbolIcon className="login-icon pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="login-label mb-3 mt-5 block text-xs font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="login-control peer block w-full rounded-md border py-[9px] pl-10 text-sm focus-visible:outline focus-visible:outline-2"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                defaultValue="123456"
                required
                minLength={6}
              />
              <KeyIcon className="login-icon pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
            </div>
          </div>
        </div>
        <input type="hidden" name="redirectTo" value={callbackUrl} />
        <Button className="login-submit cyber-login-submit mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5" />
        </Button>
        <div className="flex h-8 items-end space-x-1">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
        <Link
          href="/certificate"
          className="login-certificate sidebar-nav-control sidebar-nav-link mt-2 flex h-10 w-full items-center justify-center px-4 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          View my course certificate
        </Link>
      </div>
    </form>
  );
}
