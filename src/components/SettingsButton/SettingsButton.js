import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    alignSelf: 'flex-end',
    marginTop: '1rem',
    width: 90,
    backgroundColor: '#B3E5FC',
    color: 'black'
  }
}));

const SettingsButton = ({ toggleSettings }) => {
  const classes = useStyles();

  return (
    <Button
      data-test='button'
      className={classes.button}
      onClick={() => toggleSettings()}
      variant='contained'
    >
      Settings
    </Button>
  );
};

SettingsButton.propTypes = {
  toggleSettings: PropTypes.func.isRequired
};

export default SettingsButton;
