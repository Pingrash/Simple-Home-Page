import React, { useState, createContext, useEffect } from 'react';

const ReminderContext = createContext();

const ReminderProvider = ({ children }) => {
  const [reminders, setReminders] = useState([]);

  const updateLocalStorage = newReminders => {
    const remindersToStore = JSON.stringify(newReminders);
    localStorage.setItem('reminders', remindersToStore);
  };

  const addReminder = reminder => {
    const newReminders = [...reminders, reminder];
    setReminders(newReminders);
    updateLocalStorage(newReminders);
  };

  const deleteReminder = reminderToDelete => {
    const checkReminder = reminder => {
      return reminder.title !== reminderToDelete;
    };
    const newReminders = reminders.filter(checkReminder);
    setReminders(newReminders);
    updateLocalStorage(newReminders);
  };

  const retrieveRemindersFromLocalStorage = () => {
    const retrievedReminders = JSON.parse(
      localStorage.getItem('reminders')
    );
    if (retrievedReminders) {
      setReminders(retrievedReminders);
    } else return;
  };

  useEffect(() => {
    retrieveRemindersFromLocalStorage();
  }, []);

  return (
    <ReminderContext.Provider
      value={{ reminders, addReminder, deleteReminder }}
    >
      {children}
    </ReminderContext.Provider>
  );
};

export { ReminderContext, ReminderProvider };
