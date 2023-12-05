import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import BlurOnOutlinedIcon from '@mui/icons-material/BlurOnOutlined';
import './navbar.css';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <BlurOnOutlinedIcon sx={{ fontSize: 32, color: '#fff' }} />
            <Typography variant="h6" component="div" sx={{ color: '#fff', marginLeft: '8px', width: '100%' }}>
              {/* Apply the Text class to the span */}
              <span className='Text'>AskBot</span>
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
