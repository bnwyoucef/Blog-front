import React from 'react'
import './welocme.css';
import {Button} from '@mui/material';
import MovingText from 'react-moving-text'


const welcome = () => {
  return (
    <div className="container">
        <h1>DadLand</h1>
        <Button variant="contained" id="btn-signIn" >Sign In</Button>
        <div className="center-content">
            <MovingText
                type="unfold"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
            >
            <p id="welcome-text">Welcome to DadLand! <br /> <span id="under-welcome">Blogs,idea and more.</span></p>
            <p>Write anything, Read anytime</p>
                <MovingText
                    type="spin"
                    duration="10000ms"
                    delay="3s"
                    direction="normal"
                    timing="ease"
                    iteration="2"
                    fillMode="none"
                >
                    <Button variant="contained" id="btn-start">GET STARTED</Button>
                </MovingText>
            </MovingText>
        </div>
    </div>
  )
}

export default welcome