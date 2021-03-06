import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  linkButton: {
    display: 'grid',
    width: 160,
    height: 100,
    margin: '1rem',
    borderRadius: '10%'
  },
  linkTitle: {
    flex: 1,
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingTop: '1rem'
  },
  linkFavicon: {
    width: 10,
    transform: 'scale(2.5)',
    marginBottom: '1.5rem',
    alignSelf: 'center',
    justifySelf: 'center',
    marginTop: 12
  }
}));

const Link = ({ link, favicon, name }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.linkButton}
      href={link}
      data-test='link-button'
      variant='contained'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Typography
        component='span'
        variant='h5'
        className={classes.linkTitle}
      >
        {name}
      </Typography>
      <img
        src={favicon}
        alt='favicon'
        data-test='favicon'
        className={classes.linkFavicon}
      />
    </Button>
  );
};

Link.propTypes = {
  link: PropTypes.string.isRequired,
  favicon: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Link;
