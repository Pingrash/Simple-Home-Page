import React from 'react';

import { TimeProvider } from './timeContext';
import { LinkProvider } from './linkContext';

const ProviderParent = ({ children }) => {
  return (
    <TimeProvider>
      <LinkProvider>{children}</LinkProvider>
    </TimeProvider>
  );
};

export default ProviderParent;
