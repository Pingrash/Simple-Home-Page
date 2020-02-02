import React from 'react';
import PropTypes from 'prop-types';
import './LinkGroup.css';

import Link from '../Link/Link';

const LinkGroup = ({ links }) => {
  const linksToRender = links.map(link => {
    return (
      <Link
        key={link.link}
        link={link.link}
        favicon={link.favicon}
        data-test='link'
      />
    );
  });

  return (
    <div className='link-container' data-test='link-group'>
      {linksToRender}
    </div>
  );
};

LinkGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      favicon: PropTypes.string
    })
  ).isRequired
};

export default LinkGroup;
