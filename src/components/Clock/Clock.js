import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  clockContainer: {
    flex: 1,
    margin: '1rem auto',
    textAlign: 'center'
  }
}));

const Clock = ({ time, date }) => {
  const classes = useStyles();
  return (
    <div className={classes.clockContainer}>
      <div data-test='time'>
        <Typography component='span' variant='h3'>
          {time}
        </Typography>
      </div>
      <div data-test='date'>
        <Typography component='span' variant='h3'>
          {date}
        </Typography>
      </div>
    </div>
  );
};

Clock.propTypes = {
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Clock;
