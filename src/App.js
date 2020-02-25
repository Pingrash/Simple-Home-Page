import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import CssBaseLine from '@material-ui/core/CssBaseline';
import {
  MuiThemeProvider,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import SettingsHandler from './handlers/SettingsHandler/SettingsHandler';
import TimeHandler from './handlers/TimeHandler/TimeHandler';
import LinkHandler from './handlers/LinksHandler/LinkHandler';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container className='App' maxWidth={false}>
        <CssBaseLine />
        <TimeHandler />
        <SettingsHandler />
        <LinkHandler />
      </Container>
    </ThemeProvider>
  );
};

export default App;
