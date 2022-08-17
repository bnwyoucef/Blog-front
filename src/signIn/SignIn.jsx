import React from 'react'
import { Grid } from '@mui/material'
import { LeftSide } from './LeftSide'
import RightSide from './RightSide'


const SignIn = () => {
  return (
    <Grid container spacing={0}>
        <Grid item md={6}>
            <LeftSide />
        </Grid>
        <Grid item md={6}>
            <RightSide />
        </Grid>
    </Grid>
  )
}

export default SignIn