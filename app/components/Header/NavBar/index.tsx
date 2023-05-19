import React from 'react';
import NavBarItem from './NavBarItem';
import { NavTabT, navTabs } from '../../../types/navigation';

interface INavBarProps {
  activeTab: NavTabT;
  setActiveTab: (key: NavTabT) => void;
}

const NavBar: React.FC<INavBarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex w-full justify-center gap-2 border-t border-text-light dark:border-text-dark md:justify-end">
      {Object.values(navTabs).map((tab) => (
        <NavBarItem
          tab={tab.name}
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
