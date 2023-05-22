'use client';
import React, { PropsWithChildren, createContext } from 'react';
import { LocaleT, defaultLocale } from '@mytypes/navigation';

interface ILocaleContextProps {
  locale: LocaleT;
  setLocale: (locale: LocaleT) => void;
}

export const LocaleContext = createContext<ILocaleContextProps>({
  locale: defaultLocale,
  setLocale: () => {}
});

const LocaleProvider: React.FC<PropsWithChildren<{ contextProps: ILocaleContextProps }>> = ({
  children,
  contextProps
}) => <LocaleContext.Provider value={contextProps}>{children}</LocaleContext.Provider>;

export default LocaleProvider;
