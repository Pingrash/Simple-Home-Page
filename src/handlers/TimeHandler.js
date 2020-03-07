import React, { useContext } from 'react';

import Greeting from '../components/Greeting/Greeting';
import Clock from '../components/Clock/Clock';
import NewUserForm from '../components/NewUserForm/NewUserForm';

import { TimeContext } from '../context/timeContext';
import { UserContext } from '../context/userContext';

const TimeComponentsHandler = () => {
  const { timeGreeting, time, date } = useContext(TimeContext);

  const { user, updateUser } = useContext(UserContext);

  return user === '' ? (
    <NewUserForm updateUser={updateUser} />
  ) : (
    <div>
      <Greeting
        username={user}
        updateUsername={updateUser}
        timeGreeting={timeGreeting}
      />
      <Clock time={time} date={date} />
    </div>
  );
};

export default TimeComponentsHandler;
