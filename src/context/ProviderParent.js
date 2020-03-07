import React from 'react';

import { TimeProvider } from './timeContext';
import { LinkProvider } from './linkContext';
import { UserProvider } from './userContext';
import { SettingsProvider } from './settingsContext';
import { ReminderProvider } from './reminderContext';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const ProviderParent = ({ children }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <SettingsProvider>
        <TimeProvider>
          <UserProvider>
            <LinkProvider>
              <ReminderProvider>{children}</ReminderProvider>
            </LinkProvider>
          </UserProvider>
        </TimeProvider>
      </SettingsProvider>
    </MuiPickersUtilsProvider>
  );
};

export default ProviderParent;
