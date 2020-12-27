
// const styled = window.styled
// const keyframes = styled.keyframes







// const Li = styled.li`
//   background:red;

//   height: 4px;
//   border-radius: 2px;
//   transform-origin: 100% 2px;
//   width: 48px;
//   right: 0;
//   top: -10px;
//   position: absolute;
//   background: var(--color);
//   transform: rotateZ(0deg) translateX(-18px);
//   animation-duration: var(--duration);
//   animation-timing-function: ease;
//   animation-iteration-count: infinite;
//   animation-name: ${props=>pageAnimations[props.num]};
// `

import React, { useState } from 'react';

import './style.css';

const SpinnerBook = () => {


    const n2A = n => {
        let i=0;
        var arr=[];
        while(i<n)arr[i]=i++;
        return arr;
    };
    const pageAnimations = n2A(18).map( i => {
        let delay = i * 1.86;
        let delayAfter = i * 1.74;
        /*
        4 + delay
        13 + delayAfter
        54 + delay
        63 + delayAfter
        */
        return keyframes`
          ${4+delay}% {
            transform: rotateZ(0deg) translateX(-18px);
          }
          ${13+delayAfter}%, ${54+delay}% {
            transform: rotateZ(180deg) translateX(-18px);
          }
          ${63+delayAfter}% {
            transform: rotateZ(0deg) translateX(-18px);
          }
        ` })

    return(
        <div className="Container">
            <div className="book">
                <div className="inner">
                    <div className="left"></div>
                    <div className="middle"></div>
                    <div className="right"></div>
                </div>

                <ul>
                    { n2A(18).map(key=><Li num={key} key={key}/>) }
                </ul>
            </div>
        </div>
    );
}

export default SpinnerBook;