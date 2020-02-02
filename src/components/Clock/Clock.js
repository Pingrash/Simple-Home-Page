import React from 'react';
import PropTypes from 'prop-types';
import './Clock.css';

const Clock = ({ time, date }) => {
  return (
    <div className='clock-container'>
      <div className='clock-section' data-test='time'>
        {time}
      </div>
      <div className='date-section' data-test='date'>
        {date}
      </div>
    </div>
  );
};

Clock.propTypes = {
  time: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Clock;
