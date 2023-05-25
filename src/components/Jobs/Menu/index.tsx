import React from 'react';
import MenuEntry from './MenuEntry';

interface IMenuProps {
  currentIndex: number;
  setCurrentIndex: (i: number) => void;
  entries: string[];
}

const Menu: React.FC<IMenuProps> = ({ currentIndex, setCurrentIndex, entries }) => {
  return (
    <div className="flex flex-wrap justify-center gap-1 md:flex-col md:items-end">
      {entries.map((entry, i) => (
        <MenuEntry
          text={entry}
          active={i === currentIndex}
          onClick={() => {
            setCurrentIndex(i);
          }}
          key={entry}
        />
      ))}
    </div>
  );
};

export default Menu;
