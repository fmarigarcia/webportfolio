'use client';
import React, { PropsWithChildren, useState } from 'react';
import { Quicksand } from 'next/font/google';
import clsx from 'clsx';
import ClientThemeProvider from '@providers/ClientThemeProvider';
import LocaleProvider from '@providers/LocaleProvider';
import { LocaleT, defaultLocale } from '@mytypes/navigation';
import './globals.css';

export const metadata = {
  title: 'WebPortfolio',
  description: 'Francisco Marí García web portfolio'
};

const quicksand = Quicksand({ subsets: ['latin-ext'] });

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const [locale, setLocale] = useState<LocaleT>(defaultLocale);
  return (
    <html>
      <body
        className={clsx(
          quicksand.className,
          'h-screen bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark'
        )}
      >
        <LocaleProvider contextProps={{ locale, setLocale }}>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
};

export default RootLayout;
