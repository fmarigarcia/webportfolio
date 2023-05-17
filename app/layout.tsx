import React from 'react';
import { ServerThemeProvider } from 'next-themes';
import './styles/globals.css';
import ClientThemeProvider from './providers/ClientThemeProvider';
import { Montserrat } from 'next/font/google';
import clsx from 'clsx';

export const metadata = {
  title: 'WebPortfolio',
  description: 'Francisco Marí García web portfolio'
};

const montserrat = Montserrat({ subsets: ['latin-ext'] });

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ServerThemeProvider attribute="class">
      <html>
        <body
          className={clsx(
            montserrat.className,
            'h-screen bg-slate-200 dark:bg-gray-900'
          )}
        >
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </body>
      </html>
    </ServerThemeProvider>
  );
};

export default RootLayout;
