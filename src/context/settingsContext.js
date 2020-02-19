import React, { useState, createContext } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settingsToggled, setSettingsToggled] = useState(false);

  const toggleSettings = () => setSettingsToggled(!settingsToggled);

  return (
    <SettingsContext.Provider
      value={{ settingsToggled, toggleSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
