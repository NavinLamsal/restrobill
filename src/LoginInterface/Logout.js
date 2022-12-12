import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/login/register')
  }
  return <>
        <Button variant='contained'  onClick={handleLogout} sx={{ ml:160 ,mt:0,textTransform:'none', border:0 }}>Logout</Button>

  </>;
};

export default Logout;
