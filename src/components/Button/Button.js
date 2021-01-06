import React from 'react';
import ReactDOM from 'react-dom'
import { BiUpload } from 'react-icons/bi';

import './style.css';

const Button = props => {

  const params = props.params;
  console.log(params)

		return (
      // <button className={`btn ${params.btnClass}`} type={params.btnType}>
      //     { params.btnName }
      // </button>
      <button className={`btn ${params.btnClass}`} type={params.btnType}>
        {params.icon} { params.btnName }
      </button>
		);
};


export default Button;