import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/styles';

import AddLinkForm from '../AddLinkForm/AddLinkForm';
import LinkSettingCard from '../LinkSettingCard/LinkSettingCard';

const useStyles = makeStyles(theme => ({
  cardsContainer: {
    flex: 1,
    padding: '0 3rem',
    alignSelf: 'center'
  }
}));

const LinkSettings = ({
  links,
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
    <>
      <AddLinkForm addLink={addLink} data-test='entry-form' />
      <div className={classes.cardsContainer}>
        {linkCardsToRender}
      </div>
    </>
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
  addLink: PropTypes.func.isRequired,
  shiftLinkCard: PropTypes.func.isRequired
};

export default LinkSettings;
