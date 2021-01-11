import React, { useState, useEffect } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import './style.css'

const Rate = (props) => { 
  const { defaultValue, onChange, outOf, toolTips } = props;
  // const [desc, setDesc] = useState({ show: false, values: toolTips });
  
  
  const getStars = outOf => {
    let nbr = outOf ? outOf : 5;
    return Array(nbr).fill().map((_, i) => i+1);
  };

  const [rate, setRate] = useState({ stars: getStars(outOf), rating: defaultValue | 1, hovered: 0, selectedIcon: <AiFillStar />, deselectedIcon: <AiOutlineStar /> });

    const changeRating = newRating => {
        setRate({...rate, rating: newRating})
        if (onChange) onChange(newRating);
        // if (desc.values) setRate({...rate, rating: desc.values[rate.rating - 1]})
    };
    const hoverRating = rating => setRate({...rate, hovered: rating});

      return (
          <div>
              <div className="rating">
                  {rate.stars.map((star, index) => {
                      return (
                          <span key={index} onClick={() => { changeRating(star); }}
                              onMouseEnter={() => { hoverRating(star); }} onMouseLeave={() => { hoverRating(0); }} >

                              { rate.rating < star ?
                                   rate.hovered < star ? rate.deselectedIcon : rate.selectedIcon : rate.selectedIcon }

                          </span>) })}

                  {/* Tool Tips */}
                  {/* { desc.values && desc.values ? <span className="rate-desc"> { desc.values[desc.value - 1] } </span> : '' } */}
              </div>
          </div>
      );
}

export default Rate;