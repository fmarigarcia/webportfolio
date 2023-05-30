'use client';
import React, { useContext } from 'react';
import { useTheme } from 'next-themes';
import { ColorModeChangerTransT } from '../../../types/translations';
import useTranslations from '@hooks/useTranslations';
import { LocaleContext } from '@providers/LocaleProvider';

const query = `
colorModeChanger(locale: $locale){
  claro	
  oscuro
}
`;

const ColorModeChanger: React.FC = () => {
  const { locale } = useContext(LocaleContext);
  const translations = useTranslations<ColorModeChangerTransT>({
    query,
    locale
  });
  const { setTheme } = useTheme();
  if (translations === undefined) return <div />;
  const {
    colorModeChanger: { claro, oscuro }
  } = translations;
  return (
    <div className="flex items-end gap-2">
      <button
        type="button"
        className="md:pb-0 md:transition-all md:hover:pb-1 md:hover:text-accent-dark md:hover:dark:text-accent-light"
        onClick={() => {
          setTheme('light');
        }}
      >
        {claro}
      </button>
      <button
        type="button"
        className="md:pb-0 md:transition-all md:hover:pb-1 md:hover:text-accent-dark md:hover:dark:text-accent-light"
        onClick={() => {
          setTheme('dark');
        }}
      >
        {oscuro}
      </button>
    </div>
  );
};

export default ColorModeChanger;
