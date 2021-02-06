import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi'


import './style.css';

const DropDownMenu = props => {
   const { menu } = props;
   const [dropDown, setDropDown] = useState({ key: null, active: false });

   const close = e =>  setDropDown({...dropDown, active: false});
   const toggle = () => setDropDown({...dropDown, active: !dropDown.active});

      return   <div className="dropdown-menu" tabIndex="0" onBlur={() => close()}>
                  <div className={`toggle ${dropDown.active ? 'active' : ''}`} 
                        onClick={() => toggle()}>
                     <span> <BiDotsVerticalRounded /> </span>
                  </div>

                  <div className={`menu ${dropDown.active ? 'expanded' : 'collapsed'}`}>
                     <ul>
                        { menu.map((el, index) => 
                           <li key={index}> <span> {el.icon} </span> <span className="label"> {el.label} </span> </li>) }
                     </ul>
                  </div>
               </div>
};


export default DropDownMenu;
