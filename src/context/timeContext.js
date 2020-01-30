import React, { useState, useEffect, createContext } from 'react';

const TimeContext = createContext();

const TimeProvider = ({ children }) => {
  const [timeGreeting, setTimeGreeting] = useState('');
  const [time, setTime] = useState('00:00:00');
  const [date, setDate] = useState('00/00/0000');

  /*
    Function that takes the current time's hours and returns a time based greeting based on that number.
  */
  const getTimeGreeting = () => {
    const day = new Date();
    const time = day.getHours();

    if (time >= 0 && time < 12) {
      return 'morning';
    } else if (time >= 12 && time <= 17) {
      return 'afternoon';
    } else return 'evening';
  };

  const setNewDate = () => {
    const d = new Date();
    setDate(d.toLocaleDateString());
  };

  // Starts the clock on load with an interval of one second.
  useEffect(() => {
    //Sets the current time into state.
    setInterval(() => {
      const time = new Date();
      setTime(time.toLocaleTimeString());
    }, 1000);

    setNewDate();
    setTimeGreeting(getTimeGreeting());
  }, []);

  return (
    <TimeContext.Provider value={{ timeGreeting, time, date }}>
      {children}
    </TimeContext.Provider>
  );
};

export { TimeContext, TimeProvider };
