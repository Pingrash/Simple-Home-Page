import React from 'react';
import './App.css';

import TimeHandler from './handlers/TimeHandler/TimeHandler';
import LinkHandler from './handlers/LinksHandler/LinkHandler';

const App = () => {
  return (
    <div className='App'>
      <TimeHandler />
      <LinkHandler />
    </div>
  );
};

export default App;
