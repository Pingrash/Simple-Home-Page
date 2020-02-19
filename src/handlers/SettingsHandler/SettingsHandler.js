import React, { useContext } from 'react';
import { LinkContext } from '../../context/linkContext';
import { UserContext } from '../../context/userContext';
import { SettingsContext } from '../../context/settingsContext';

import SettingsMain from '../../components/SettingsMain/SettingsMain';
import SettingsButton from '../../components/SettingsButton/SettingsButton';

const SettingsHandler = () => {
  const {
    addLink,
    links,
    deleteLink,
    shiftLinkCard,
    resetLinks
  } = useContext(LinkContext);

  const { settingsToggled, toggleSettings } = useContext(
    SettingsContext
  );

  const { user, updateUser } = useContext(UserContext);

  return settingsToggled ? (
    <SettingsMain
      addLink={addLink}
      links={links}
      deleteLink={deleteLink}
      shiftLinkCard={shiftLinkCard}
      toggleSettings={toggleSettings}
      user={user}
      updateUser={updateUser}
      resetLinks={resetLinks}
    />
  ) : (
    <SettingsButton toggleSettings={toggleSettings} />
  );
};

export default SettingsHandler;
