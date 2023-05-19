import React from 'react';
import { ServerThemeProvider } from 'next-themes';
import './styles/globals.css';
import ClientThemeProvider from './providers/ClientThemeProvider';
import { Quicksand } from 'next/font/google';
import clsx from 'clsx';

export const metadata = {
  title: 'WebPortfolio',
  description: 'Francisco Marí García web portfolio'
};

const quicksand = Quicksand({ subsets: ['latin-ext'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ServerThemeProvider attribute="class">
      <html>
        <body
          className={clsx(
            quicksand.className,
            'h-screen bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark'
          )}
        >
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </body>
      </html>
    </ServerThemeProvider>
  );
};

export default RootLayout;
