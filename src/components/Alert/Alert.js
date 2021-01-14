import React, { useState } from 'react';
import { BiError } from 'react-icons/bi';
import { MdErrorOutline } from 'react-icons/md';
import { AiFillCheckCircle, AiFillInfoCircle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

import './style.css';

const Alert = props => {
	const { type, msg } = props;
	const [showAlert, setShowAlert] = useState(true);
	
	const close = () => { setShowAlert(false) };

	const checkType = type => {
		switch(type){
			case 'success': return { icon: <AiFillCheckCircle />, type };
			case 'error': return { icon: <BiError />, type };
			case 'warning': return { icon: <MdErrorOutline />, type };
			case 'info': return { icon: <AiFillInfoCircle />, type };
			default : return { icon: <AiFillInfoCircle />, type };
		}
	};



	return 	<div className={showAlert ? "alert-container" : "alert-container-hide"}>
				<div className={ type && type ? `alert alert-${type}` : 'alert' }>
					<span className="icon-type"> { checkType(type).icon } </span>
					<p> { msg } </p>
					<span className="closebtn" onClick={() => close()}> <GrFormClose /> </span> 
				</div>
			</div>
};

export default Alert;