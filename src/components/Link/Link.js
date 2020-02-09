import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    width: 'inherit',
    height: 'inherit',
    color: 'black',
    margin: '0.5rem'
  },
  linkButton: {
    '&:hover': {
      backgroundColor: '#f1f1f1'
    },
    display: 'flex',
    flexDirection: 'row',
    width: 160,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1rem',
    borderRadius: '50%'
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
    justifySelf: 'center'
  }
}));

const Link = ({ link, favicon, name }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.linkButton}>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        data-test='link-button'
        className={classes.link}
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
      </a>
    </Paper>
  );
};

Link.propTypes = {
  link: PropTypes.string.isRequired,
  favicon: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Link;
