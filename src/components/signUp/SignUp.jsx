import React from 'react';

import { Grid } from '@mui/material';

import LeftCreateAccount from './LeftCreateAccount';
import RightCreateAccount from './RightCreateAccount';
import MainPage from '../main/MainPage';
import { useSelector } from 'react-redux';

const SignUp = () => {
  const user = useSelector(state => state.user);
  return (
    <>
    {user.currentUser.succes ? <MainPage />:
      <Grid container spacing={0}>
          <Grid item xs={0} sm={4} md={6}>
              <LeftCreateAccount />
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
              <RightCreateAccount />
          </Grid>
      </Grid>
    }
  </>
  )
}

export default SignUp
