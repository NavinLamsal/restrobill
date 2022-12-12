import { TextField, FormControlLabel, Checkbox, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import UserLogin from './UserLogin';

const Registration = () => {
  const [login, setlogin] = useState(true);
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      tc: data.get('tc')
    }
    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        localStorage.setItem('email', actualData.email)
        localStorage.setItem('password', actualData.password)
        localStorage.setItem('tc', actualData.tc)
        document.getElementById('registration-form').reset()
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        setlogin(!login);
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
    {login ? (

      <Box component='form'  sx={{ mt: 1.5 }} id='registration-form' onSubmit={handleSubmit}>
        <TextField margin='dense'  required fullWidth id='name' name='name' label='Name' />
        <TextField margin='dense' type='email' required fullWidth id='email' name='email' label='Email Address' />
        <TextField margin='dense' required fullWidth id='password' name='password' label='Password' type='password' />
        <TextField margin='dense' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' />
        <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="Agreed to term and condition." />
        <Box textAlign='center'>
          <Button type='submit' variant='contained' sx={{ mt: 0.5, mb: 0.2, px: 5, border: 2, borderColor: "", borderRadius: 50 }}>Register</Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
      </Box>
    ) : (
      <UserLogin />
    )}
  </>;
};

export default Registration;
