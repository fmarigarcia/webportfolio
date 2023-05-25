import React, { useContext } from 'react';
import NavBar from './NavBar';
import { NavTabT } from '@mytypes/navigation';
import useTranslations from '@hooks/useTranslations';
import { HeaderTransT } from '@mytypes/translations';
import { LocaleContext } from '@providers/LocaleProvider';

interface IHeaderProps {
  activeTab: NavTabT;
  setActiveTab: (key: NavTabT) => void;
}

const query = `
miscelaneo(locale: $locale){
  jobTitle
}
`;

const Header: React.FC<IHeaderProps> = ({ activeTab, setActiveTab }) => {
  const { locale } = useContext(LocaleContext);
  const translations = useTranslations<HeaderTransT>({
    query,
    locale
  });

  if (translations === undefined) return <div />;
  const {
    miscelaneo: { jobTitle }
  } = translations;
  return (
    <div className="left-0 top-0 w-full md:absolute md:w-auto">
      <div className="mb-4 w-fit ps-8 pt-8">
        <h1 className="text-2xl md:text-6xl md:font-light">Francisco Marí García</h1>
        <h3 className="mt-2 text-end text-sm md:text-xl md:font-light">{jobTitle}</h3>
      </div>
      <NavBar setActiveTab={setActiveTab} activeTab={activeTab} />
    </div>
  );
};

export default Header;
