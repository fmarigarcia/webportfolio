'use client';
import React, { useContext } from 'react';
import { LocaleContext } from '@providers/LocaleProvider';
import { locales } from '@mytypes/navigation';

const LocaleChanger: React.FC = () => {
  const { setLocale } = useContext(LocaleContext);
  return (
    <div className="flex items-end gap-2">
      {locales.map((locale) => (
        <button
          onClick={() => {
            setLocale(locale);
          }}
          key={locale}
          className="md:pb-0 md:transition-all md:hover:pb-1 md:hover:text-accent-dark md:hover:dark:text-accent-light"
        >
          {locale}
        </button>
      ))}
    </div>
  );
};

export default LocaleChanger;
