import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import NavBar from './NavBar';
import { NavTabT } from '../../types/navigation';

interface IHeaderProps {
  activeTab: NavTabT;
  setActiveTab: (key: NavTabT) => void;
}

const Header: React.FC<IHeaderProps> = ({ activeTab, setActiveTab }) => {
  const { t } = useTranslation('common');
  return (
    <div className="relative left-0 top-0 w-full md:absolute md:w-auto">
      <div className="mb-4 w-fit ps-8 pt-8">
        <h1 className="text-2xl md:text-6xl md:font-light">
          Francisco Marí García
        </h1>
        <h3 className="mt-2 text-end text-sm md:text-xl md:font-light">
          {t('jobTitle')}
        </h3>
      </div>
      <NavBar setActiveTab={setActiveTab} activeTab={activeTab} />
    </div>
  );
};

export default Header;
