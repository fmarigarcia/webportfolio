import React from 'react';
import clsx from 'clsx';
import useTranslation from 'next-translate/useTranslation';
import type { NavTabT } from '../../../../types/navigation';

interface INavBarItemProps {
  tab: NavTabT;
  onClick: () => void;
  selected: boolean;
}

const NavBarItem: React.FC<INavBarItemProps> = ({ tab, onClick, selected }) => {
  const { t } = useTranslation('common');
  return (
    <button
      onClick={onClick}
      className={clsx(
        `mb-2 flex w-8 flex-col justify-start rounded-b-lg bg-text-light p-1 pb-2 text-text-dark 
        transition-all hover:mb-0 hover:bg-text-dark hover:pt-3 hover:text-text-light dark:bg-text-dark
        dark:text-text-light hover:dark:bg-text-light hover:dark:text-text-dark`,
        selected && 'mb-0 bg-text-dark pt-3 text-text-light'
      )}
    >
      <span className="uppercase" style={{ writingMode: 'vertical-lr' }}>
        {t(`nav.${tab}`)}
      </span>
    </button>
  );
};

export default NavBarItem;
