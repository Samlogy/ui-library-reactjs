import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import './style.css';

const Avatar = props => {  
  const { icon, imgUrl, name, size, shape, badge } = props;

  const colors = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
  // generate avatar initals
  const genAvatarInitials = name => {
    let nameArray = name.split(" ");
    if(nameArray.length <= 1)  return name.charAt(0).toUpperCase()
    return nameArray[0].charAt(0).toUpperCase() + nameArray[1].charAt(0).toUpperCase();
  };
  // generate avatar color
  const genAvatarColor = colors => {
      const index = Math.floor((Math.random() * colors.length) + 0);
      return colors[index];
  };  

  const genAvatar = (name, colors) => {
    const avatarInitial = genAvatarInitials(name);
    const avatarColor = genAvatarColor(colors);
    
    return <div className={`avatar avatar-${size} avatar-${shape}`} style={{ backgroundColor: avatarColor, color: '#fefefe'}} >
            <div className={`badge ${badge}`}></div>
            <h5 className="avatar__initials"> {avatarInitial} </h5>
          </div> 
  };

  const showAvatar = () => {
     if (imgUrl) return <div className={`avatar avatar-${size} avatar-${shape}`}>
                            <img className="avatar__img" src={imgUrl} alt="" />
                          </div> // imgUrl

      else if (icon) return <div className={`avatar avatar-${size} avatar-${shape}`}>
                              <div className="avatar__content-container">
                                <FaUser className="icon-user" />
                              </div>
                            </div> // icon

      else if (name) return genAvatar(name, colors) // name initials
  };

  return showAvatar() 
  
  
};

export default Avatar;