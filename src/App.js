import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import CssBaseLine from '@material-ui/core/CssBaseline';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

import SettingsHandler from './handlers/SettingsHandler';
import TimeHandler from './handlers/TimeHandler';
import LinkHandler from './handlers/LinkHandler';
import ReminderHandler from './handlers/ReminderHandler';

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
        <ReminderHandler />
      </Container>
    </ThemeProvider>
  );
};

export default App;
