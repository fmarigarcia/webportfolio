'use client';
import React from 'react';
import GitHub from '@icons/GitHub';
import LinkedIn from '@icons/LinkedIn';

const BottomRow: React.FC = () => {
  return (
    <div className="absolute bottom-0 z-10 flex h-8 w-full items-start justify-between px-8">
      <div className="flex gap-2">
        <a href="https://github.com/fmarigarcia" className="mt-1">
          <GitHub
            size={20}
            className="fill-text-light dark:fill-text-dark md:hover:fill-accent-dark md:hover:dark:fill-accent-light "
          />
        </a>
        <a href="https://www.linkedin.com/in/francisco-mari-garcia/">
          <LinkedIn
            size={25}
            className="fill-text-light dark:fill-text-dark md:hover:fill-accent-dark md:hover:dark:fill-accent-light "
          />
        </a>
      </div>
      <div>
        <a
          href="mailto:fran.mari.94@gmail.com"
          className="md:pt-0 md:transition-all md:hover:pt-1 md:hover:text-accent-dark md:hover:dark:text-accent-light"
        >
          fran.mari.94@gmail.com
        </a>
      </div>
    </div>
  );
};

export default BottomRow;
