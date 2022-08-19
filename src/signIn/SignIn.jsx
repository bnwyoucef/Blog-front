import React from 'react';
import { Grid } from '@mui/material';
import { LeftSide } from './LeftSide';
import RightSide from './RightSide';
import MainPage from '../components/main/MainPage';
import { useSelector } from 'react-redux';


const SignIn = () => {
  const user = useSelector(state => state.user);
  return (
    <>
    {user.currentUser.succes ? <MainPage />:
    <Grid container spacing={0}>
        <Grid item md={6}>
            <LeftSide />
        </Grid>
        <Grid item md={6}>
            <RightSide />
        </Grid>
    </Grid>
  }</>
  )
}

export default SignIn