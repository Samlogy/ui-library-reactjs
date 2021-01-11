import React from 'react';
import { AiFillCheckCircle, AiFillInfoCircle, AiFillWarning, AiFillCloseCircle } from 'react-icons/ai';

import './style.css';
  
const Result = props => {
    const { status, title, msg } = props;

    const checkStatus = status => {
		return( status === 'success' ? <AiFillCheckCircle className={`icon icon-${status}`} /> :
				status === 'info' ? <AiFillInfoCircle className={`icon icon-${status}`} /> :
				status === 'warning' ? <AiFillWarning className={`icon icon-${status}`} /> :
				status === 'error' ? <AiFillCloseCircle className={`icon icon-${status}`} /> : '')
    };
    
  
     return(
        <div className="result-section">
            { checkStatus(status) }

            <h1> {title} </h1>
            <p> {msg} </p>
            
            <div className="group-btn">
                {/* <Link to='/' className={`btn-outline btn-outline-${status}`}> Go back to Home Page </Link>
                <Link to='/login' className={`btn btn-${status}`}>  </Link> */}
				<button className={`btn-outline btn-outline-${status}`}> Go back to Home Page </button>
				<button className={`btn btn-${status}`}> Go to Login Page </button>
            </div>
        </div>
    )
}
  
export default Result;