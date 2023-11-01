import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

const CryptoBox = ({ data }) => {
  const { name, image, price_change_percentage_24h } = data;
  const isPositive = price_change_percentage_24h > 0;
  const bgColor = isPositive ? 'rgb(0,128,0, 0.4)' : 'rgb(255,0,0, 0.4)';
  const borderColor = isPositive ? 'green' : 'red';

  return ( 
    <Box
      sx={{
        padding: 1,
        margin: 0.1,
        width: '100px',
        height: '100px',
        background: bgColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: `2px solid ${borderColor}`,
        borderRadius: 1
      }}
    >
      <img src={image} alt={name} style={{ width: '40px', height: '40px' }} />
      <Typography variant="h6" style={{ fontSize: '15px'}}>{name}</Typography>
      <Typography variant="body2" style={{ fontSize: '10px'}} >
        {isPositive ? `+${price_change_percentage_24h}%` : `${price_change_percentage_24h}%`}
      </Typography>
    </Box>

  );
};

export default CryptoBox;
