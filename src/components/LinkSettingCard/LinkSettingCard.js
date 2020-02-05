import React from 'react';
import PropTypes from 'prop-types';
import './LinkSettingCard.css';

const LinkSettingCard = ({ link, deleteLink }) => {
  return (
    <div className='card-container' data-test='container'>
      {link.favicon ? (
        <img
          src={link.favicon}
          alt='favicon'
          data-test='favicon'
          className='card-favicon'
        />
      ) : null}
      <h4 className='card-title' data-test='title'>
        {link.name}
      </h4>
      <span className='card-url' data-test='url'>
        {link.link}
      </span>
      <button
        className='card-button'
        data-test='delete-button'
        onClick={() => deleteLink(link.name)}
      >
        Delete
      </button>
    </div>
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
