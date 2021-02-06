import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarPicker = props => {
  const [calendar, setCalendar] = useState(new window.Date());

  return (
    <div className="calendar-picker-container">
      <Calendar onChange={setCalendar} value={calendar} />
    </div>
  );
}

export default CalendarPicker;