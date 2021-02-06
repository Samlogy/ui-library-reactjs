import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import './style.css';

const DateRange = () => {
	const [dateRange, setDateRange] = useState([new window.Date(), new window.Date()]);
  
	return (
	  <div className="date-range-picker-container">
		<DateRangePicker onChange={setDateRange} value={dateRange} />
	  </div>
	);
};

const Default = () => {
	const [date, setDate] = useState(new window.Date());
  
	return (
		<div className="date-picker-container">
		  <DatePicker onChange={setDate} value={date} />
		</div>
	  );
};

const Date = props => {
	const { range } = props;

	return range ? <DateRange /> : <Default />
};

export default Date;