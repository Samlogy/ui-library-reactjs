import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

import './style.css';

const TimeRange = () => {
	const [timeRange, setTimeRange] = useState(['10:00', '11:00']);
  
	return <div className="time-range-picker-container">
				<TimeRangePicker onChange={setTimeRange} value={timeRange} />
			</div>
};

const Default = () => {
	const [time, setTime] = useState('10:00');
  
	return  <div className="time-picker-container">
				<TimePicker onChange={setTime} value={time} />
			</div>
};

const Time = props => {
	const { range } = props;

	return range ? <TimeRange /> : <Default />
};

export default Time;