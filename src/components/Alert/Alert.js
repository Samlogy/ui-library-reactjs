import React from 'react';
import { BiError } from 'react-icons/bi';
import { MdErrorOutline } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

import './style.css';

const Alert = props => {

	const { type, message } = props.params;

	const close = () => {
		return;
	}

	return 	<div className={ type ? `alert ${type}` : "alert"}>
				<span className="closebtn" onClick={close()}> <GrFormClose /> </span> 
				<strong> 
					{ type === 'success' ? <AiFillCheckCircle /> : 
					  type === 'warning' ? <MdErrorOutline /> : 
					  type === 'error' ? <BiError /> : 'info'} </strong> 
				{ message }
			</div>
};

export default Alert;


// var close = document.getElementsByClassName("closebtn");
// var i;

// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function(){
//     var div = this.parentElement;
//     div.style.opacity = "0";
//     setTimeout(function(){ div.style.display = "none"; }, 600);
//   }
// }