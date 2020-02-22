import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '2rem'
  },
  formSpacing: {
    margin: '1rem 0'
  },
  success: {
    color: 'green',
    textAlign: 'center'
  }
}));

const UserSettings = ({ user, updateUser }) => {
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userDeleted, setUserDeleted] = useState(false);

  const classes = useStyles();

  return (
    <>
      <form
        data-test='form'
        className={classes.form}
        onSubmit={e => {
          e.preventDefault();
          updateUser(username);
          setSubmitted(true);
          setUsername('');
        }}
      >
        <Typography component='h4' variant='h4'>
          Update User
        </Typography>
        <FormControl>
          <InputLabel
            htmlFor='username-input'
            color='primary'
            required
          >
            New Username:{' '}
          </InputLabel>
          <Input
            id='username-input'
            type='text'
            onChange={e => {
              setUsername(e.target.value);
              if (submitted || userDeleted) {
                setSubmitted(false);
                setUserDeleted(false);
              }
            }}
            value={username}
            autoComplete='true'
            fullWidth
            className={classes.formSpacing}
            placeholder={user}
          />
          <Button
            type='submit'
            color='primary'
            fullWidth
            variant='contained'
            className={classes.formSpacing}
          >
            Submit
          </Button>
        </FormControl>
      </form>
      {submitted ? (
        <Typography
          className={classes.success}
          component='span'
          variant='h4'
        >
          User Updated
        </Typography>
      ) : null}
    </>
  );
};

UserSettings.propTypes = {
  user: PropTypes.string.isRequired,
  updateUser: PropTypes.func.isRequired
};

export default UserSettings;
