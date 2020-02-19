import React from 'react';

import { TimeProvider } from './timeContext';
import { LinkProvider } from './linkContext';
import { UserProvider } from './userContext';
import { SettingsProvider } from './settingsContext';

const ProviderParent = ({ children }) => {
  return (
    <SettingsProvider>
      <TimeProvider>
        <UserProvider>
          <LinkProvider>{children}</LinkProvider>
        </UserProvider>
      </TimeProvider>
    </SettingsProvider>
  );
};

export default ProviderParent;
