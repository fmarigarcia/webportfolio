import React, { useContext } from 'react';
import NavBarItem from './NavBarItem';
import { NavTabT, navTabs } from '@mytypes/navigation';
import { LocaleContext } from '@providers/LocaleProvider';
import { NavTransT } from '@mytypes/translations';
import useTranslations from '@hooks/useTranslations';

interface INavBarProps {
  activeTab: NavTabT;
  setActiveTab: (key: NavTabT) => void;
}

const query = `
nav(locale: $locale){
  contact
  skills
  about
  jobs
}
`;

const NavBar: React.FC<INavBarProps> = ({ activeTab, setActiveTab }) => {
  const { locale } = useContext(LocaleContext);
  const translations = useTranslations<NavTransT>({
    query,
    locale
  });
  if (translations === undefined) return <div />;

  const { nav } = translations;
  return (
    <div className="flex w-full justify-center gap-2 border-t border-text-light dark:border-text-dark md:justify-end">
      {Object.values(navTabs).map((tab) => (
        <NavBarItem
          text={nav[tab.name]}
          key={tab.name}
          onClick={() => {
            setActiveTab(tab.name);
          }}
          selected={activeTab === tab.name}
        />
      ))}
    </div>
  );
};

export default NavBar;
