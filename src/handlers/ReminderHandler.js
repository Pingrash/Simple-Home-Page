import React, { useContext } from 'react';

import { ReminderContext } from '../context/reminderContext';

import ReminderGroup from '../components/ReminderGroup/ReminderGroup';
import AddReminderForm from '../components/AddReminderForm/AddReminderForm';

const ReminderHandler = () => {
  const { reminders, addReminder, deleteReminder } = useContext(
    ReminderContext
  );

  return (
    <>
      <ReminderGroup
        reminders={reminders}
        deleteReminder={deleteReminder}
      />
      <AddReminderForm addReminder={addReminder} />
    </>
  );
};

export default ReminderHandler;
