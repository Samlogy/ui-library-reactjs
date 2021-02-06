import React from 'react';

import './style.css';

const Button = props => {

  const { className, label, type, icon } = props;

		return (
      <button className={className ? `btn ${className}` : 'btn'} type={type ? type : 'button'}>
        {icon ? icon : ''} {label ? label : 'Button'}
      </button>
		);
};

export default Button;