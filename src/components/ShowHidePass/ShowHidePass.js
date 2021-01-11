import React, { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

import './style.css';

const ShowHidePass = () => {
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

	return (
      <div className="App">
          <div className="pwd-container">
              <input name="pwd" placeholder="Enter Password" type={isRevealPwd ? "text" : "password"} 
                    value={pwd} onChange={e => setPwd(e.target.value)} />

              { isRevealPwd ? 
                <AiFillEyeInvisible className="icon-hide" onClick={() => setIsRevealPwd(prevState => !prevState)} /> : 
                <AiFillEye className="icon-show" onClick={() => setIsRevealPwd(prevState => !prevState)}/> }
          </div>
      </div>
	);
};


export default ShowHidePass;

