import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';

const ClockPicker = () => {
  const [clock, setClock] = useState(new window.Date());

  useEffect(() => {
    const interval = setInterval(
      () => setClock(new window.Date()), 1000 );

    return () => { clearInterval(interval) }
  }, []);

  return (
    <div className="clock-picker-container">
      <p>Current time:</p>
      <Clock value={clock} />
    </div>
  )
}

export default ClockPicker;