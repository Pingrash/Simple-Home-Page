import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  cardContainer: {
    height: 60,
    minWidth: 500,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1rem',
    margin: '0.5rem 0'
  },
  cardButton: {
    flex: 1
  },
  cardFavicon: {
    width: 28,
    paddingLeft: '1rem'
  },
  cardTitle: {
    flex: 2,
    textAlign: 'center',
    textTransform: 'capitalize'
  },
  cardUrl: {
    flex: 3,
    textAlign: 'center'
  }
}));

const LinkSettingCard = ({ link, deleteLink }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.cardContainer} data-test='container'>
      {link.favicon ? (
        <img
          src={link.favicon}
          alt='favicon'
          data-test='favicon'
          className={classes.cardFavicon}
        />
      ) : null}
      <Typography
        component='span'
        variant='h6'
        className={classes.cardTitle}
        data-test='title'
      >
        {link.name}
      </Typography>
      <Typography
        component='span'
        variant='body2'
        className={classes.cardUrl}
        data-test='url'
      >
        {link.link}
      </Typography>
      <Button
        className='card-button'
        color='secondary'
        data-test='delete-button'
        onClick={() => deleteLink(link.name)}
      >
        Delete
      </Button>
    </Paper>
  );
};

LinkSettingCard.propTypes = {
  link: PropTypes.shape({
    link: PropTypes.string.isRequired,
    favicon: PropTypes.string,
    name: PropTypes.string.isRequired
  }),
  deleteLink: PropTypes.func.isRequired
};

export default LinkSettingCard;
