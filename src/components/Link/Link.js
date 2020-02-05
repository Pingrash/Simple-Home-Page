import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const Link = ({ link, favicon, name }) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      data-test='link-button'
      className='link-button'
    >
      <span className='link-title'>{name}</span>
      <img
        src={favicon}
        alt='favicon'
        data-test='favicon'
        className='link-favicon'
      />
    </a>
  );
};

Link.propTypes = {
  link: PropTypes.string.isRequired,
  favicon: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Link;
