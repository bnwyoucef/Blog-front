import React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';  
import { Button, Link } from '@mui/material';
import './RightSide.css';

const RightSide = () => {
        const [values, setValues] = React.useState({
          amount: '',
          password: '',
          weight: '',
          weightRange: '',
          showPassword: false,
        });
      
        const handleChange = (prop) => (event) => {
          setValues({ ...values, [prop]: event.target.value });
        };
      
        const handleClickShowPassword = () => {
          setValues({
            ...values,
            showPassword: !values.showPassword,
          });
        };
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };
    
  return (
    <div className="signIn-container">
        <h3>DadLand</h3>
        <p>Welcome again! Sign in to your account</p>
        <form className="signin-form">
            <h2>Sign In</h2>
            <TextField
                id="standard-password-input"
                label="Email"
                type="text"
                autoComplete="current-password"
                variant="standard"
                sx={{width: "350px"}}
            />
            <FormControl sx={{ m: 1, width: '350px' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
            />
            </FormControl>
            <Link to="/reset-password" id="reset-password">
                Reset password
            </Link>
            <Button variant="contained" style={{backgroundColor: '#426869',marginTop: '20px',padding:'7px 50px',borderRadius:'20px'}}>Sign in</Button>
            <p className="create-account">Dont have account?<Link>Create account</Link></p>
        </form>
    </div>
  )
}

export default RightSide
