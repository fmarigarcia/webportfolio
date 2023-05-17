import React from 'react';
import ConfigBar from './components/ConfigBar';

const Home: React.FC = () => {
  return (
    <main>
      <ConfigBar />
      <div className="fixed left-0 top-0 h-full w-full  px-8 py-8">
        <div className="h-full border border-slate-500">a</div>
      </div>
    </main>
  );
};

export default Home;
