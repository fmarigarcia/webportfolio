import React, { useContext } from 'react';
import { LocaleContext } from '@providers/LocaleProvider';
import useTranslations from '@hooks/useTranslations';
import { AboutTransT } from '@mytypes/translations';
import ReactMarkdown from 'react-markdown';

const query = `
about(locale: $locale){
  parrafo
}
`;

const About: React.FC = () => {
  const { locale } = useContext(LocaleContext);
  const translations = useTranslations<AboutTransT>({
    query,
    locale
  });
  if (translations === undefined) return <div />;

  const {
    about: { parrafo }
  } = translations;
  return (
    <div className="p-4 text-lg md:absolute md:bottom-0 md:right-0 md:w-1/3 md:min-w-96 md:text-xl">
      <ReactMarkdown
        components={{
          a: ({ node, ...props }) => (
            <a className="transition-all hover:text-accent-dark hover:dark:text-accent-light" {...props}></a>
          ),
          p: ({ node, ...props }) => <p className="mb-2" {...props}></p>
        }}
      >
        {parrafo}
      </ReactMarkdown>
    </div>
  );
};

export default About;
