import React from 'react';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
    return (
        <Box sx={{
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
        }}>
            <center>
            <CircularProgress color='success' />
            <h2>
                Thankyou for being patient... We're cooking for you!
            </h2>
            </center>
        </Box>
    );
};

export default Loader;