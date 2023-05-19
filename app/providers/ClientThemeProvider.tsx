'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

const ClientThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default ClientThemeProvider;
