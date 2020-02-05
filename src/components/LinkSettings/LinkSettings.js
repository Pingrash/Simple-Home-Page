import React from 'react';
import './LinkSettings.css';
import PropTypes from 'prop-types';

import AddLinkForm from '../AddLinkForm/AddLinkForm';
import LinkSettingCard from '../LinkSettingCard/LinkSettingCard';

const LinkSettings = ({
  links,
  toggleLinkSettings,
  addLink,
  deleteLink
}) => {
  const linkCardsToRender = links.map(link => {
    return (
      <LinkSettingCard
        key={link.name}
        link={link}
        deleteLink={deleteLink}
        data-test='setting-card'
      />
    );
  });

  return (
    <div className='settings-container'>
      <button
        onClick={() => toggleLinkSettings(false)}
        className='close-button'
        data-test='close-button'
      >
        Close
      </button>
      <AddLinkForm addLink={addLink} data-test='entry-form' />
      <div className='cards-container'>{linkCardsToRender}</div>
    </div>
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
  addLink: PropTypes.func.isRequired
};

export default LinkSettings;
