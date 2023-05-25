'use client';
import React, { useState } from 'react';
import { NavTabT, navTabs } from '../../types/navigation';
import Header from '../Header';

const Content: React.FC = () => {
  const [activeTabKey, setActiveTabKey] = useState<NavTabT>('about');
  const activeTab = navTabs[activeTabKey];
  return (
    <div className="fixed left-0 top-0 h-full w-full px-8 py-8">
      <div className={`relative flex h-full flex-col gap-2 border border-text-light dark:border-text-dark md:block`}>
        <Header setActiveTab={setActiveTabKey} activeTab={activeTabKey} />
        <activeTab.component />
      </div>
    </div>
  );
};

export default Content;
