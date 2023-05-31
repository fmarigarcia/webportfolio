'use client';
import React, { useState } from 'react';
import ConfigBar from '@components/ConfigBar';
import Content from '@components/Content';
import LocaleProvider from '@providers/LocaleProvider';
import BottomRow from '@components/BottomRow';
import { LocaleT, defaultLocale } from '@mytypes/navigation';

const Home: React.FC = () => {
  const [locale, setLocale] = useState<LocaleT>(defaultLocale);
  return (
    <LocaleProvider contextProps={{ locale, setLocale }}>
      <main>
        <ConfigBar />
        <Content />
        <BottomRow />
      </main>
    </LocaleProvider>
  );
};

export default Home;
