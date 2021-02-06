import React, { useState } from 'react';

import { MdError } from 'react-icons/md';
import { AiFillWarning, AiFillInfoCircle } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';


import Toast from './Toast';
import Button from './Button';

import './style.css';

const BUTTON_PROPS = [
  {
    id: 1,
    type: 'success',
    className: 'success',
    label: 'Success'
  },
  {
    id: 2,
    type: 'danger',
    className: 'danger',
    label: 'Danger'
  },
  {
    id: 3,
    type: 'info',
    className: 'info',
    label: 'Info'
  },
  {
    id: 4,
    type: 'warning',
    className: 'warning',
    label: 'Warning'
  },
];

const Notification = () => {
  const [list, setList] = useState([]);
  const [position, setPosition] = useState('Select Position');
  let [checkValue, setCheckValue] = useState(false);
  const [autoDeleteTime, setAutoDeleteTime] = useState(0);
  let toastProperties = null;

  const selectPosition = e => {
    setPosition(e.target.value);
    setList([]);
  };
  const showToast = type => {
    const id = Math.floor((Math.random() * 101) + 1);

    switch(type) {
      case 'success':
        toastProperties = {
          id,
          title: 'Success',
          description: 'This is a success toast component',
          backgroundColor: '#5cb85c',
          icon: <FaCheckCircle />
        }
        break;
      case 'danger':
        toastProperties = {
          id,
          title: 'Danger',
          description: 'This is a error toast component',
          backgroundColor: '#d9534f',
          icon: <MdError />
        }
        break;
      case 'info':
        toastProperties = {
          id,
          title: 'Info',
          description: 'This is an info toast component',
          backgroundColor: '#5bc0de',
          icon: <AiFillInfoCircle />
        }
        break;
      case 'warning':
        toastProperties = {
          id,
          title: 'Warning',
          description: 'This is a warning toast component',
          backgroundColor: '#f0ad4e',
          icon: <AiFillWarning />
        }
        break;

        default: setList([]);
    };

    setList([...list, toastProperties]);
  };
   const onCheckBoxChange = () => {
    checkValue = !checkValue;
    setCheckValue(checkValue);
    setList([]);
  };
  const onInputChange = e => {
    const time = parseInt(e.target.value, 10);
    // setDismissTime(time);
    setAutoDeleteTime(time);
  };
 
  return (
    <div className="app">
      <div className="app-header">
        <p>React Toast Component</p>

        <div className="toast-buttons">
          { BUTTON_PROPS.map(el => 
              <Button key={el.id} className={`${position === 'Select Position' ? `${el.className} btn-disable` : `${el.className}`}`}
                label={el.label} handleClick={() => showToast(el.type)} /> )}
        </div>

        <div className="select">
            <input id="auto" type="checkbox" name="checkbox" value={checkValue} onChange={onCheckBoxChange} />
            <label htmlFor="auto">Auto Dismiss</label>
        </div>

        <div className="select">
            <input className={`${!checkValue ? 'disabled' : ''}`} type="text" name="checkbox" placeholder="Dismiss time Ex: 3000"
              autoComplete="false" onChange={onInputChange} />
        </div>

        <div className="select">
            <select name="position" value={position} onChange={selectPosition} className="position-select">
                <option>Select Position</option>
                <option value="top-right">Top Right</option>
                <option value="top-left">Top Left</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="bottom-right">Bottom Right</option>
            </select>
        </div>
      </div>

      <Toast toastList={list} position={position} autoDelete={checkValue} autoDeleteTime={autoDeleteTime} />
    </div>
  );
}

export default Notification;
