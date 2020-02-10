import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

import AddLinkForm from '../AddLinkForm/AddLinkForm';
import LinkSettingCard from '../LinkSettingCard/LinkSettingCard';

const useStyles = makeStyles(theme => ({
  settingsContainer: {
    width: '70%',
    minWidth: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: '2rem 3rem',
    alignSelf: 'center',
    margin: '1rem 0'
  },
  cardsContainer: {
    flex: 1,
    padding: '0 3rem',
    alignSelf: 'center'
  },
  closeButton: {
    alignSelf: 'flex-end',
    flex: 1
  }
}));

const LinkSettings = ({
  links,
  toggleLinkSettings,
  addLink,
  deleteLink,
  shiftLinkCard
}) => {
  const classes = useStyles();

  const linkCardsToRender = links.map(link => {
    return (
      <LinkSettingCard
        key={link.name}
        link={link}
        deleteLink={deleteLink}
        data-test='setting-card'
        shiftLinkCard={shiftLinkCard}
      />
    );
  });

  return (
    <Paper elevation={4} className={classes.settingsContainer}>
      <Button
        variant='contained'
        onClick={() => toggleLinkSettings(false)}
        className={classes.closeButton}
        data-test='close-button'
      >
        Close
      </Button>
      <AddLinkForm addLink={addLink} data-test='entry-form' />
      <div className={classes.cardsContainer}>
        {linkCardsToRender}
      </div>
    </Paper>
  );
};

LinkSettings.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      favicon: PropTypes.string,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleLinkSettings: PropTypes.func.isRequired,
  addLink: PropTypes.func.isRequired,
  shiftLinkCard: PropTypes.func.isRequired
};

export default LinkSettings;
