import React, { PropsWithChildren } from 'react';
import { Quicksand } from 'next/font/google';
import clsx from 'clsx';
import './globals.css';

export const metadata = {
  title: 'Fran Marí | Home',
  description: 'Francisco Marí García web portfolio'
};

const quicksand = Quicksand({ subsets: ['latin-ext'] });

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html>
      <body
        className={clsx(
          quicksand.className,
          'h-screen bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark'
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
