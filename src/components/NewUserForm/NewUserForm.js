import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90vh',
    margin: '2rem 0 3rem'
  },
  header: {
    textAlign: 'center',
    paddingTop: '2rem'
  },
  body1: {
    padding: '2rem 2rem 1rem'
  },
  body2: {
    textAlign: 'center'
  },
  form: {
    width: '90%',
    justifyContent: 'center'
  },
  input: {
    margin: '0 5%'
  },
  button: {
    margin: '1rem 5%'
  }
}));

const NewUserForm = ({ updateUser }) => {
  const classes = useStyles();

  const [username, setUsername] = useState('');

  return (
    <Paper className={classes.formContainer} data-test='greeting'>
      <Typography
        component='h2'
        variant='h2'
        className={classes.header}
      >
        Welcome to Simple Home Page!
      </Typography>
      <Typography
        component='p'
        variant='h4'
        className={`${classes.body1} ${classes.body2}`}
      >
        Some default links will be set up for you. You can edit them
        in the settings.
      </Typography>
      <Typography
        component='p'
        variant='h5'
        className={classes.body1}
      >
        Please enter your name below:{' '}
      </Typography>
      <form
        onSubmit={e => {
          e.preventDefault();
          updateUser(username);
        }}
        data-test='user-form'
      >
        <FormControl className={classes.form}>
          <InputLabel
            htmlFor='username'
            color='primary'
            required
            className={classes.input}
          >
            Username:{' '}
          </InputLabel>
          <Input
            id='username'
            type='text'
            onChange={e => setUsername(e.target.value)}
            fullWidth
            data-test='username-input'
            className={classes.input}
          />
          <Button
            type='submit'
            data-test='submit-button'
            color='primary'
            fullWidth
            variant='contained'
            className={classes.button}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Paper>
  );
};

NewUserForm.propTypes = {
  updateUser: PropTypes.func.isRequired
};

export default NewUserForm;
