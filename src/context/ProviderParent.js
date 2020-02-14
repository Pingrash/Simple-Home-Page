import React from 'react';

import { TimeProvider } from './timeContext';
import { LinkProvider } from './linkContext';
import { UserProvider } from './userContext';

const ProviderParent = ({ children }) => {
  return (
    <TimeProvider>
      <UserProvider>
        <LinkProvider>{children}</LinkProvider>
      </UserProvider>
    </TimeProvider>
  );
};

export default ProviderParent;
