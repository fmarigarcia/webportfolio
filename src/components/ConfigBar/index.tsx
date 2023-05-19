'use client';
import React from 'react';
import LocaleChanger from './LocaleChanger';
import ColorModeChanger from './ColorModeChanger';
import { Major_Mono_Display } from 'next/font/google';
import clsx from 'clsx';

const majorMonoDisplay = Major_Mono_Display({
  weight: '400',
  subsets: ['latin-ext']
});

const ConfigBar: React.FC = () => {
  return (
    <div
      className={clsx(
        majorMonoDisplay.className,
        'relative z-10 mx-8 flex h-8 items-end justify-between'
      )}
    >
      <ColorModeChanger />
      <LocaleChanger />
    </div>
  );
};

export default ConfigBar;
