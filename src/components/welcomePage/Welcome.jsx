import React from 'react'
import './welocme.css';
import {Button} from '@mui/material';
import MovingText from 'react-moving-text';
import { Link } from 'react-router-dom';


const welcome = () => {
  return (
    <div className="container">
        <h1>DadLand</h1>
        <Link to="/sign-in">
            <Button variant="contained" id="btn-signIn" >Sign In</Button>
        </Link>
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
            <p className="welcome-slug">Write anything, Read anytime</p>
                <MovingText
                    type="spin"
                    duration="10000ms"
                    delay="3s"
                    direction="normal"
                    timing="ease"
                    iteration="2"
                    fillMode="none"
                >
                    <Link to="/sign-up" id='sign-up-link'>
                        <Button variant="contained" id="btn-start">GET STARTED</Button>
                    </Link>
                </MovingText>
            </MovingText>
        </div>
    </div>
  )
}

export default welcome