import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import './style.css';


const Switch = props => {
 
  const { checked, round } = props;

		return (        
        //  <label className="switch" >
        //    <input type="checkbox" checked={checked} />
        //    <span className={round ? 'slider round' : 'slider'}></span>
        //  </label>
        <div className="toggle-container">
          <BsSun className="icon-sun" />
          <input type="checkbox" id="switch" name="theme"/> <label htmlFor="switch"></label> 
          <BsMoon className="icon-moon" />
        </div>
		);
};


export default Switch;