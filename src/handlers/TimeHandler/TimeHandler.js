import React, { useContext } from 'react';

import Greeting from '../../components/Greeting/Greeting';
import Clock from '../../components/Clock/Clock';

import { TimeContext } from '../../context/timeContext';

const TimeComponentsHandler = () => {
  const { timeGreeting, time, date } = useContext(TimeContext);

  return (
    <div>
      <Greeting username='lachlan' timeGreeting={timeGreeting} />
      <Clock time={time} date={date} />
    </div>
  );
};

export default TimeComponentsHandler;
