import React from 'react';

import './style.css';


const Switch = props => {
 
  const { checked, round } = props.params;

		return (        
         <label className="switch" >
           <input type="checkbox" checked={checked} />
           <span className={round ? 'slider round' : 'slider'}></span>
         </label>
		);
};


export default Switch;