import React, { useState } from 'react';

import './style.css';

const Form = () => {

    // const inputs = document.querySelectorAll('input');

    //     inputs.forEach(el => {
    //     el.addEventListener('blur', e => {
    //         if(e.target.value) {
    //         e.target.classList.add('dirty');
    //         } else {
    //         e.target.classList.remove('dirty');
    //         }
    //     })
    //     })
  
    // onSubmit / form validation / style form / input type / input name / placeholders / value / 

  return (
    <form method="POST">
        <label className="custom-field">
            <input type="email" required />
            <span className="placeholder">Enter Email</span>
        </label>

        <label className="custom-field one">
            <input type="text" required />
            <span className="placeholder">Enter Text</span>
        </label>

        <label className="custom-field two">
            <input type="url" required />
            <span className="placeholder">Enter URL</span>
        </label>

        <label className="custom-field three">
            <input type="password" required />
            <span className="placeholder">Enter Password</span>
            <span className="border"></span>
        </label>
    </form>
  );
};

export default Form;
