import React, { useState } from 'react';
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
import { useDispatch} from 'react-redux';
import { setCurrentUser } from '../features/user/userSlice';
import axios from '../Api/Axios';

const RightSide = () => {
        const [values, setValues] = React.useState({
          showPassword: false,
        });
      
        const handleClickShowPassword = () => {
          setValues({
            ...values,
            showPassword: !values.showPassword,
          });
        };
      
        const handleMouseDownPassword = (event) => {
          event.preventDefault();
        };

        const dispatch = useDispatch();
    
        const [email,setEmail] = useState('');
        const [password,setPassword] = useState('');   

        async function handleSignInSubmit(event) {
          event.preventDefault();
          try {
            const user = {email,password};
            const response = await axios.post('auth/sign-in',user);
            if(response.data.succes) {
              dispatch(setCurrentUser(response.data));
            }
          } catch (error) {
            console.log(error.message);
          }
        }

  return (
    <div className="signIn-container">
        <h3>DadLand</h3>
        <p>Welcome again! Sign in to your account</p>
        <form className="signin-form" onSubmit={handleSignInSubmit}>
            <h2>Sign In</h2>
            <TextField
                id="standard-password-input"
                label="Email"
                type="text"
                autoComplete="current-password"
                variant="standard"
                sx={{width: "350px"}}
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <FormControl sx={{ m: 1, width: '350px' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={password}
                onChange={event => setPassword(event.target.value)}
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
            <Button variant="contained" style={{backgroundColor: '#426869',marginTop: '20px',padding:'7px 50px',borderRadius:'20px'}} type="submit">Sign in</Button>
            <p className="create-account">Dont have account?<Link id="create-account">Create account</Link></p>
        </form>
    </div>
  )
}

export default RightSide
