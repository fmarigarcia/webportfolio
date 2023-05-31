import React, { useContext } from 'react';
import useTranslations from '@hooks/useTranslations';
import { ContactoTransT } from '@mytypes/translations';
import { LocaleContext } from '@providers/LocaleProvider';

const query = `
contacto(locale: $locale){
  titulo
  cuerpo
  descargarCv
  escribeme
  cv {
    url
  }
}
`;

const Contact: React.FC = () => {
  const { locale } = useContext(LocaleContext);
  const translations = useTranslations<ContactoTransT>({
    query,
    locale
  });
  if (translations === undefined) return <div />;

  const {
    contacto: {
      titulo,
      escribeme,
      descargarCv,
      cv: { url: cvUrl },
      cuerpo
    }
  } = translations;
  return (
    <div
      className={`flex flex-col items-center p-4 md:absolute md:bottom-0 
    md:right-0 md:mb-12 md:me-12 md:w-1/4 md:min-w-96`}
    >
      <h3 className="mb-4 text-4xl font-bold text-accent-dark dark:text-accent-light">{titulo}</h3>
      <p className="mb-4 text-center text-xl">{cuerpo}</p>
      <div className="flex gap-2">
        <a
          href="mailto:fran.mari.94@gmail.com"
          className={`border-1 w-fit rounded-lg border border-accent-dark  px-4 py-3 text-2xl
         text-accent-dark transition-all hover:border-text-dark hover:bg-accent-dark
         hover:text-text-dark dark:border-accent-light dark:text-accent-light dark:hover:border-text-light
         dark:hover:bg-accent-light dark:hover:text-text-light`}
        >
          {escribeme}
        </a>
        <a
          href={cvUrl}
          target="_blank"
          className={`border-1 w-fit rounded-lg border border-accent-dark  px-4 py-3 text-2xl
         text-accent-dark transition-all hover:border-text-dark hover:bg-accent-dark
         hover:text-text-dark dark:border-accent-light dark:text-accent-light dark:hover:border-text-light
         dark:hover:bg-accent-light dark:hover:text-text-light`}
          download={true}
        >
          {descargarCv}
        </a>
      </div>
    </div>
  );
};

export default Contact;
