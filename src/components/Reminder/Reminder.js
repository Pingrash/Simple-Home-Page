import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
    marginTop: '1rem'
  },
  title: {
    flex: 1,
    textAlign: 'left',
    margin: 'auto 1rem',
    textTransform: 'capitalize'
  },
  body: {
    flex: 4,
    textAlign: 'left',
    margin: 'auto 0'
  },
  button: {
    flex: 1
  }
}));

const Reminder = ({ title, body, deleteReminder }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography
        variant='h6'
        className={classes.title}
        data-test='title'
      >
        {title}
      </Typography>
      <Typography
        variant='body1'
        className={classes.body}
        data-test='body'
      >
        {body}
      </Typography>
      <Button
        color='secondary'
        onClick={() => deleteReminder(title)}
        className={classes.button}
        data-test='button'
      >
        Delete
      </Button>
    </Paper>
  );
};

Reminder.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  deleteReminder: PropTypes.func.isRequired
};

export default Reminder;
