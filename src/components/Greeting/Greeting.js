import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  greetingContainer: {
    flex: 1,
    margin: '2rem auto'
  },
  greetingBody: {
    width: '100%',
    margin: '0 auto',
    textTransform: 'capitalize',
    textAlign: 'center'
  }
}));

const Greeting = ({ username, timeGreeting }) => {
  const classes = useStyles();

  return (
    <div className={classes.greetingContainer} data-test='container'>
      <Typography
        component='h2'
        variant='h2'
        className={classes.greetingBody}
        data-test='greeting'
      >
        Good {timeGreeting}
        {username ? (
          <span data-test='username'> {username}!</span>
        ) : (
          '!'
        )}
      </Typography>
    </div>
  );
};

Greeting.propTypes = {
  username: PropTypes.string,
  timeGreeting: PropTypes.string.isRequired
};

export default Greeting;
