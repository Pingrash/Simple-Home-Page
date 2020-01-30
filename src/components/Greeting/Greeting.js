import React from 'react';
import PropTypes from 'prop-types';
import './Greeting.css';

const Greeting = ({ username, timeGreeting }) => {
  return (
    <div className='greeting-container' data-test='container'>
      <h3 className='greeting-body' data-test='greeting'>
        Good {timeGreeting}
        {username ? (
          <span data-test='username'> {username}!</span>
        ) : (
          '!'
        )}
      </h3>
    </div>
  );
};

Greeting.propTypes = {
  username: PropTypes.string,
  timeGreeting: PropTypes.string
};

export default Greeting;
