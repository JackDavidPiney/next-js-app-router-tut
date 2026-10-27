import { Metadata } from 'next';

import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import ThemeName from '@/app/ui/dashboard/theme-name';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Login',
};
 
export default function LoginPage() {
  return (
    <main className="login-page flex min-h-screen items-center justify-center">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4">
        <div className="login-brand relative flex h-20 w-full items-end rounded-lg p-3 md:h-36">
          <div className="w-32 md:w-36">
            <AcmeLogo className="login-logo" />
          </div>
          <div className="absolute bottom-3 right-3">
            <ThemeName compact />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}