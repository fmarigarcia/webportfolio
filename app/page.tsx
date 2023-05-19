import React from 'react';
import ConfigBar from './components/ConfigBar';
import Content from './components/Content';

const Home: React.FC = () => {
  return (
    <main>
      <ConfigBar />
      <Content />
    </main>
  );
};

export default Home;
