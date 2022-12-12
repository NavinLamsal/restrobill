import {Card, Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import Registration from './Registration';
import UserLogin from './UserLogin';
import ImageLg from './ImageLg';
import Footer from './Footer';
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role='tabpanel' hidden={value !== index}>
      {
        value === index && (
          <Box>{children}</Box>
        )
      }
    </div>
  )
}
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return   <>

        <Card sx={{ ml:'34.4%' ,mt:3,textAlign:'center', boxShadow:' 3px 4px 10px rgba(0, 0, 5, 12)',position:'relative',display:'block',width:450}}>
        <ImageLg />
          <Box sx={{ mx: 2, height:480}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                <Tab label='Login' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                <Tab label='Registration' sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <UserLogin />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Registration />
            </TabPanel>
          </Box>
        </Card>
       
        <Footer />
  </>;
};

export default LoginReg;