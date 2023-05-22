'use client';
import React from 'react';
import clsx from 'clsx';

interface INavBarItemProps {
  text: string;
  onClick: () => void;
  selected: boolean;
}

const NavBarItem: React.FC<INavBarItemProps> = ({ text, onClick, selected }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        selected && 'mb-0 bg-text-dark pt-3 text-text-light',
        !selected && 'mb-2 bg-text-light text-text-dark',
        `flex w-8 flex-col justify-start rounded-b-lg p-1 pb-2  
        transition-all hover:mb-0 hover:bg-text-dark hover:pt-3 hover:text-text-light dark:bg-text-dark
        dark:text-text-light hover:dark:bg-text-light hover:dark:text-text-dark`
      )}
    >
      <span className="uppercase" style={{ writingMode: 'vertical-lr' }}>
        {text}
      </span>
    </button>
  );
};

export default NavBarItem;
