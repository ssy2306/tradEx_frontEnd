import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { createTheme } from '@mui/system';
import LoginPageLeft from './LoginPageLeft';
import LoginPageRight from './LoginPageRight';
import theme from '../Theme';

import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await axios.post(' /login', formData); // Send a POST request to /login endpoint with the form data
      // Handle the response here, e.g., set user state or show a success message
      console.log('Login response:', response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Login error:', error);
    }
  };
  return (
    <Box sx={{ bgcolor: theme.palette.background.grey , display: '-ms-flexbox', height: '100%'}}>

      <Stack direction='row' spacing={2} justifyContent="space-between">
        <LoginPageLeft />
        <LoginPageRight 
        formData={formData}
        setFormData={setFormData}
        handleLogin={handleLogin}
         />
      </Stack>
    </Box>
  );
};

export default LoginPage;
