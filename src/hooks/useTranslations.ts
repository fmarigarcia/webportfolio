import { useEffect, useMemo, useState } from 'react';
import { request } from '../lib/datocms';
import { TranslationsReturnT } from '../types/translations';

const useTranslations = <T extends TranslationsReturnT>({
  query,
  locale
}: {
  query: string;
  locale: string;
}): T | undefined => {
  const [data, setData] = useState<T>();

  const fullQuery = useMemo(
    () => `query Translations($locale: SiteLocale) {
      ${query}
   }`,
    [query]
  );

  useEffect(() => {
    request({ query: fullQuery, variables: { locale } }).then((res: T) => {
      setData(res);
    });
  }, [fullQuery, locale]);

  return data;
};

export default useTranslations;
