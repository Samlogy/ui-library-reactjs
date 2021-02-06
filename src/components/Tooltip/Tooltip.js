import React, { useState } from 'react';

import './style.css';

const Tooltip = props => {  
  const { data, label } = props;



  return(
    <div className="tooltip-container">
        <p data-tooltip={data}> {label} </p>
    </div>
  )
  
  
};

export default Tooltip;