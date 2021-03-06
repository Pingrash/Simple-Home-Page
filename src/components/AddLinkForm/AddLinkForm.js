import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  submitButton: {
    marginTop: '1rem'
  },
  success: {
    color: 'green',
    textAlign: 'center',
    marginBottom: '1rem'
  },
  addForm: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
    padding: '0 1rem 2rem'
  }
}));

const AddLinkForm = ({ addLink }) => {
  const [url, setUrl] = useState('');
  const [linkName, setLinkName] = useState('');
  const [linkAdded, setLinkAdded] = useState(false);

  const classes = useStyles();

  const clearFields = () => {
    setUrl('');
    setLinkName('');
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          const newLink = {
            link: url,
            favicon: `http://www.google.com/s2/favicons?domain=${url}`,
            name: linkName
          };
          addLink(newLink);
          setLinkAdded(true);
          clearFields();
        }}
        className={classes.addForm}
        data-test='entry-form'
      >
        <Typography component='h4' variant='h4'>
          Add Link
        </Typography>
        <FormControl>
          <InputLabel htmlFor='url' color='primary' required>
            Website URL:
          </InputLabel>
          <Input
            id='url'
            type='url'
            onChange={e => {
              setUrl(e.target.value);
              if (linkAdded) {
                setLinkAdded(false);
              }
            }}
            value={url}
            autoComplete='true'
            autoFocus
            fullWidth
            data-test='form-field'
            placeholder='https://www.google.com'
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor='name' color='primary' required>
            Link Name:
          </InputLabel>
          <Input
            id='name'
            onChange={e => setLinkName(e.target.value)}
            value={linkName}
            autoComplete='true'
            fullWidth
            data-test='form-field'
          />
          <Button
            type='submit'
            className={classes.submitButton}
            data-test='submit-button'
            color='primary'
            fullWidth
            variant='contained'
          >
            Submit
          </Button>
        </FormControl>
      </form>
      {linkAdded ? (
        <Typography
          component='span'
          variant='h4'
          className={classes.success}
        >
          Link Added
        </Typography>
      ) : null}
    </>
  );
};

AddLinkForm.propTypes = {
  addLink: PropTypes.func.isRequired
};

export default AddLinkForm;
