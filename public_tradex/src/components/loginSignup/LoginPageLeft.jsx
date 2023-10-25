import { Box } from '@mui/material';
import React from 'react';
import theme from '../theme';
import logo from '../../tradex_long.svg'
import bggif from './bggif.gif'
const LoginPageLeft = () => {
    return (
        <Box flex={2} sx={{
            display: { xs:'none', sm: 'block'},
            padding: 7,
        }}>
            <img src={logo}/>   
            <Box paddingTop={12} paddingBottom={1}>
            <img src={bggif} style={{zIndex: '0',position: 'absolute' , opacity: '20%', paddingTop: 80, paddingLeft: 100 }} />
                <h1 style={{fontSize: '5.1rem'}}><p style={{color: theme.palette.text.logoColor,margin: 0}}>100+</p>Coins<br /> Introduced
                {/* <script>
                    i=1;
                    while (i &gt 0) {
                       DelayNode(1) 
                    }
                </script> */}
                </h1>  
               <p style={{paddingBottom: 32}}> Trading is subject to market risks, read all data carefully and we don't determine any advices.  </p>
            </Box>         
        </Box>
    );
}
export default LoginPageLeft;