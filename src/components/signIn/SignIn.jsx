import React from 'react';
import { Grid } from '@mui/material';
import { LeftSide } from './LeftSide';
import RightSide from './RightSide';
import MainPage from '../main/MainPage';
import { useSelector } from 'react-redux';


const SignIn = () => {
  const user = useSelector(state => state.user);
  return (
    <>
    {user.currentUser.succes ? <MainPage />:
    <Grid container spacing={0}>
        <Grid item xs={0} sm={4} md={6}>
            <LeftSide />
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
            <RightSide />
        </Grid>
    </Grid>
  }
  </>
  )
}

export default SignIn