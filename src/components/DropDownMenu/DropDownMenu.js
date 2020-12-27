import React, { useState } from 'react';
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { HiPencilAlt } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa';

import './style.css';

const DropDownMenu = () => {
   const [dropDown, setDropDown] = useState({ key: null, active: false });

   const Menu = [
      {  
         label: 'Delete',
         icon: <FaTrash />,
      },
      {  
         label: 'Delete',
         icon: <HiPencilAlt />,
      },
      {  
         label: 'All',
         icon: <FaTrash />,
      }
   ];

   const close = e => {
      e.preventDefault();
      setDropDown({...dropDown, active: false});
   };
   const toggle = e => {
      e.preventDefault();  
      setDropDown({...dropDown, active: !dropDown.active});
   }; 

      return   <div className="dropdown-menu" tabIndex="0" onBlur={e => close(e)}>
                  <div className={`toggle ${dropDown.active ? 'active' : ''}`} 
                        onClick={e => toggle(e)}>
                     <span> <BiDotsVerticalRounded /> </span>
                  </div>

                  <div className={`menu ${dropDown.active ? 'expanded' : 'collapsed'}`}>
                     <ul>
                        { Menu.map((el, index) => 
                           <li key={index}>
                              <span>  {el.icon}  </span>
                              <span className="label"> {el.label} </span>
                           </li>)}
                     </ul>
                  </div>
               </div>
};


export default DropDownMenu;
