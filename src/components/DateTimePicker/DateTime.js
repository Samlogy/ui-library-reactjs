import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

import './style.css';

const DateTimeRange = () => {
	const [dateTimeRange, setDateTimeRange] = useState([new window.Date(), null]);
  
	return (
	  <div className="date-time-range-picker-container">
		<DateTimeRangePicker onChange={setDateTimeRange} value={dateTimeRange} />
	  </div>
	);
};

const Default = () => {
	const [dateTime, setDateTime] = useState(new window.Date());
  
	return (
		<div className="date-time-picker-container">
		  <DateTimePicker onChange={setDateTime} value={dateTime} />
		</div>
	  );
};

const DateTime = props => {
	const { range } = props;

	return range ? <DateTimeRange /> : <Default />
};

export default DateTime;