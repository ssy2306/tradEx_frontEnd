import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const CryptoBox = ({ data }) => {
  const { name, image, price_change_percentage_24h, id, symbol } = data;
  const isPositive = price_change_percentage_24h > 0;
  const bgColor = isPositive ? 'rgb(0,128,0, 0.4)' : 'rgb(255,0,0, 0.4)';
  const borderColor = isPositive ? 'green' : 'red';

  let navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the chart route with the crypto id
    navigate(`/chart/${id}`);
  };

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
        borderRadius: 1,
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <img src={image} alt={name} style={{ width: '40px', height: '40px' }} />
      <Typography variant="h6" style={{ fontSize: '15px'}}>{symbol}</Typography>
      <Typography variant="body2" style={{ fontSize: '10px'}} >
      <b>  {isPositive ? `+${price_change_percentage_24h}%` : `${price_change_percentage_24h}%`}</b>
      </Typography>
    </Box>

  );
};

export default CryptoBox;
