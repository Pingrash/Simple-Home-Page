import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  spacing: {
    margin: '1rem 0'
  }
}));

const ResetSettings = ({ updateUser, resetLinks }) => {
  const classes = useStyles();
  return (
    <>
      <Typography component='h4' variant='h4'>
        Reset To Default
      </Typography>
      <Typography
        component='span'
        variant='body1'
        color='error'
        data-test='warning'
        className={classes.spacing}
      >
        WARNING: Pressing this button will reset everything to
        default!
      </Typography>
      <Button
        color='secondary'
        variant='outlined'
        onClick={e => {
          e.preventDefault();
          updateUser('');
          resetLinks();
        }}
        className={classes.spacing}
        data-test='reset-button'
      >
        Delete User
      </Button>
    </>
  );
};

ResetSettings.propTypes = {
  updateUser: PropTypes.func.isRequired,
  resetLinks: PropTypes.func.isRequired
};

export default ResetSettings;
