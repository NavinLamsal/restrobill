import React from 'react'
import logo from './images/img4.jpg';
import { Box } from '@mui/material';


const ImageLg = () => {
  return (
    <>
      <Box sx={{textAlign:'center',mt:2 }}>
        <img src={logo} className="logo" alt="logo" height={80} width={100}  />
      </Box>
    </>
  )
}

export default ImageLg
