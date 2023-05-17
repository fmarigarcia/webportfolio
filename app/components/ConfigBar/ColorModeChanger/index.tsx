'use client';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useTheme } from 'next-themes';

const ColorModeChanger: React.FC = () => {
  const { t } = useTranslation('common');
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        type="button"
        className=""
        onClick={() => {
          setTheme('light');
        }}
      >
        {t('colorModeChanger.claro')}
      </button>
      <button
        type="button"
        className=""
        onClick={() => {
          setTheme('dark');
        }}
      >
        {t('colorModeChanger.oscuro')}
      </button>
    </div>
  );
};

export default ColorModeChanger;
