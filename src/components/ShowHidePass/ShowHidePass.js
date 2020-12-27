import React, { useState } from 'react';
import showPwdImg from './show-password.svg';
import hidePwdImg from './hide-password.svg'

import './style.css';

const ShowHidePass = () => {
  const [pwd, setPwd] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);

	return (
      <div className="App">
          <div className="pwd-container">
              <input name="pwd" placeholder="Enter Password" type={isRevealPwd ? "text" : "password"} 
                    value={pwd} onChange={e => setPwd(e.target.value)} />
                    
              <img title={isRevealPwd ? "Hide password" : "Show password"} src={isRevealPwd ? hidePwdImg : showPwdImg}
                  onClick={() => setIsRevealPwd(prevState => !prevState)} />
          </div>
      </div>
	);
};


export default ShowHidePass;

