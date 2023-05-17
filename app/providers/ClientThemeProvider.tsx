'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';

const ClientThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ClientThemeProvider;
