import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { createTheme } from '@mui/system';
import LoginPageLeft from './LoginPageLeft';
import LoginPageRight from './LoginPageRight';
import theme from '../Theme';

const LoginPage = () => {

  return (
    <Box sx={{ bgcolor: theme.palette.background.grey , display: '-ms-flexbox', height: '100%'}}>

      <Stack direction='row' spacing={2} justifyContent="space-between">
        <LoginPageLeft />
        <LoginPageRight />
      </Stack>
    </Box>
  );
};

export default LoginPage;
