import { TextField, Button, Box } from '@mui/material';
import {  useNavigate } from 'react-router-dom';
const UserLogin = () => {
  const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
      password: data.get('password')
    }
    localStorage.setItem('email',actualData.email)
      localStorage.setItem('password',actualData.password)
      navigate('/dashboard');
  }
  return <>
    <Box component='form' sx={{ mt:0.5 ,height:300}} id='login-form' onSubmit={handleSubmit}>
      <TextField margin='normal' type='email' required fullWidth id='email' name='email' label='Email Address' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' min='8' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5,border:2, borderColor:"", borderRadius:50 }}>Login</Button>
      </Box>
      
    </Box>
  </>;
};

export default UserLogin;