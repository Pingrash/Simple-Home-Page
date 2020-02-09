import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import CssBaseLine from '@material-ui/core/CssBaseline';

import TimeHandler from './handlers/TimeHandler/TimeHandler';
import LinkHandler from './handlers/LinksHandler/LinkHandler';

const App = () => {
  return (
    <Container className='App'>
      <CssBaseLine />
      <TimeHandler />
      <LinkHandler />
    </Container>
  );
};

export default App;
