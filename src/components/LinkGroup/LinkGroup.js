import React from 'react';
import PropTypes from 'prop-types';
import './LinkGroup.css';

import Link from '../Link/Link';

const LinkGroup = ({ links, toggleLinkSettings }) => {
  const linksToRender = links.map(link => {
    return (
      <Link
        key={link.link}
        link={link.link}
        favicon={link.favicon}
        name={link.name}
        data-test='link'
      />
    );
  });

  return (
    <>
      <button
        onClick={() => toggleLinkSettings(true)}
        className='toggle-button'
        data-test='toggle-button'
      >
        Settings
      </button>
      <div className='link-container' data-test='link-group'>
        {linksToRender}
      </div>
    </>
  );
};

LinkGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      favicon: PropTypes.string,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  toggleLinkSettings: PropTypes.func.isRequired
};

export default LinkGroup;