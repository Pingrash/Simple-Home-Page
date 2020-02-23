import React, { useContext } from 'react';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';

import { LinkContext } from '../../context/linkContext';
import { UserContext } from '../../context/userContext';
import { SettingsContext } from '../../context/settingsContext';

import LinkSettings from '../../components/LinkSettings/LinkSettings';
import UserSettings from '../../components/UserSettings/UserSettings';
import SettingsButton from '../../components/SettingsButton/SettingsButton';
import ResetSettings from '../../components/ResetSettings/ResetSettings';

const useStyles = makeStyles(theme => ({
  settingsContainer: {
    width: '70%',
    minWidth: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '2rem 3rem',
    alignSelf: 'center',
    margin: '1rem 0'
  },
  divider: {
    margin: '2rem 0'
  }
}));

const SettingsHandler = () => {
  const classes = useStyles();

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
    <Paper elevation={4} className={classes.settingsContainer}>
      <SettingsButton
        toggleSettings={toggleSettings}
        data-test='toggle-button'
      />
      <LinkSettings
        data-test='link-settings'
        links={links}
        addLink={addLink}
        deleteLink={deleteLink}
        shiftLinkCard={shiftLinkCard}
      />
      <Divider variant='middle' className={classes.divider} />
      <UserSettings
        user={user}
        updateUser={updateUser}
        data-test='user-settings'
      />
      <Divider variant='middle' className={classes.divider} />
      <ResetSettings
        updateUser={updateUser}
        resetLinks={resetLinks}
        data-test='reset-settings'
      />
    </Paper>
  ) : (
    <SettingsButton toggleSettings={toggleSettings} />
  );
};

export default SettingsHandler;
