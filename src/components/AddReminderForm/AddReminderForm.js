import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '1rem',
    padding: '1rem'
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    marginTop: '1rem'
  }
}));

const AddReminderForm = ({ addReminder }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const classes = useStyles();

  const clearFields = () => {
    setTitle('');
    setBody('');
  };

  return (
    <Paper className={classes.container}>
      <Typography component='h6' variant='h6'>
        Add Reminder
      </Typography>
      <form
        onSubmit={e => {
          e.preventDefault();
          const newReminder = {
            title: title,
            body: body
          };
          addReminder(newReminder);
          clearFields();
        }}
        className={classes.form}
      >
        <FormControl>
          <InputLabel htmlFor='title' color='primary' required>
            Title:
          </InputLabel>
          <Input
            id='title'
            type='text'
            onChange={e => setTitle(e.target.value)}
            fullWidth
            data-test='form-field'
            value={title}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='body' color='primary' required>
            Body:
          </InputLabel>
          <Input
            id='body'
            type='text'
            onChange={e => setBody(e.target.value)}
            fullWidth
            data-test='form-field'
            value={body}
          />
        </FormControl>
        <Button
          type='submit'
          color='primary'
          fullWidth
          variant='contained'
          className={classes.button}
          data-test='submit-button'
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

AddReminderForm.propTypes = {
  addReminder: PropTypes.func.isRequired
};

export default AddReminderForm;
