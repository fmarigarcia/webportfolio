'use client';
import React, { useContext } from 'react';
import { LocaleContext } from '@providers/LocaleProvider';
import { locales } from '@mytypes/navigation';

const LocaleChanger: React.FC = () => {
  const { setLocale } = useContext(LocaleContext);
  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          onClick={() => {
            setLocale(locale);
          }}
          key={locale}
        >
          {locale}
        </button>
      ))}
    </div>
  );
};

export default LocaleChanger;
