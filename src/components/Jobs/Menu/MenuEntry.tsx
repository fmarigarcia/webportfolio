import React from 'react';
import clsx from 'clsx';

interface IMenuProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

const MenuEntry: React.FC<IMenuProps> = ({ text, active, onClick }) => {
  return (
    <button className="relative w-fit pe-4 ps-4 text-right" onClick={onClick}>
      <div
        className={clsx(
          active && 'top-0 h-full w-full',
          !active && 'top-1/3 h-2 w-2',
          'absolute right-0 rounded-full bg-text-light transition-all dark:bg-text-dark'
        )}
      ></div>
      <span className={clsx(active && 'text-text-dark dark:text-text-light', 'relative z-10 transition-all')}>
        {text}
      </span>
    </button>
  );
};

export default MenuEntry;
