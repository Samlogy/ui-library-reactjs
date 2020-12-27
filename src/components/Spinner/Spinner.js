import React, { useState } from 'react';

import './style.css';

const Spinner= () => {


    return(
        <div className="spinner">
            <div className="spinner__circle">
                <div className="spinner__circle-gradient"></div>

                <div className="spinner__circle-inner"></div>
            </div>
        </div>
    );
}

export default Spinner;