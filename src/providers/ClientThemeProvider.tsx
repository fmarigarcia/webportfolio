'use client';
import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

const ClientThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ClientThemeProvider;
