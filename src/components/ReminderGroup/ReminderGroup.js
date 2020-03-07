import React from 'react';
import PropTypes from 'prop-types';
import Reminder from '../Reminder/Reminder';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  noReminder: {
    textAlign: 'center',
    margin: '2rem'
  }
}));

const ReminderGroup = ({
  reminders,
  addReminder,
  deleteReminder
}) => {
  const classes = useStyles();

  const remindersToRender = reminders.map(reminder => {
    return (
      <Reminder
        title={reminder.title}
        body={reminder.body}
        addReminder={addReminder}
        deleteReminder={deleteReminder}
        key={reminder.title}
        data-test='reminder'
      />
    );
  });

  return (
    <div>
      <Typography component='h3' variant='h4' data-test='title'>
        Your Reminders
      </Typography>
      {remindersToRender.length > 0 ? (
        remindersToRender
      ) : (
        <Typography
          component='span'
          variant='h5'
          className={classes.noReminder}
          data-test='no-reminders-msg'
        >
          No Reminders
        </Typography>
      )}
    </div>
  );
};

ReminderGroup.propTypes = {
  reminders: PropTypes.arrayOf(PropTypes.object).isRequired,
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired
};

export default ReminderGroup;
