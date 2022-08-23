import React from 'react'
import video2 from '../../images/video2.mp4'
import './leftSide.css';

export const LeftSide = () => {
  return (
    <div className="container-left-side">
        <div className="sub-container">
            <video className="left-animation" autoPlay muted loop>
                <source src={video2} type="video/mp4" />
            </video>
            <h2 id="left-title">DadLand Blog platform</h2>
            <p id="left-description">lorem ipsum dolor sit amet, consectet <br />lorem ipsum dolor</p>
        </div>
    </div>
  )
}
