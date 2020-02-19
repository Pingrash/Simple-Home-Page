import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/styles';

import LinkSettings from '../LinkSettings/LinkSettings';
import UserSettings from '../UserSettings/UserSettings';
import SettingsButton from '../SettingsButton/SettingsButton';
import ResetSettings from '../ResetSettings/ResetSettings';

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

const SettingsMain = ({
  links,
  addLink,
  deleteLink,
  shiftLinkCard,
  toggleSettings,
  user,
  updateUser,
  resetLinks
}) => {
  const classes = useStyles();

  return (
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
  );
};

SettingsMain.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  addLink: PropTypes.func.isRequired,
  deleteLink: PropTypes.func.isRequired,
  shiftLinkCard: PropTypes.func.isRequired,
  toggleSettings: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired,
  resetLinks: PropTypes.func.isRequired
};

export default SettingsMain;
