import React from 'react';
import './styles/globals.css';

export const metadata = {
  title: 'WebPortfolio',
  description: 'Francisco Marí García web portfolio'
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
