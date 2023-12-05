import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import theme from '../theme';
const LoginPageRightRegister = ({ formData, setFormData, handleLogin }) => {
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    return (
        <Box  flex={2} sx={{padding: 7, bgcolor:theme.palette.background.paper, textAlign: 'left', }}>
                <h2 style={{paddingTop: '8rem', fontSize: '2.5rem', paddingBottom: 0, margin: 0}} >Welcome Back !</h2>
                <p style={{fontSize: '1.4 rem', color: theme.palette.text.secondary, marginTop: 0, marginBottom: '3rem'}}> We,re happy to see you back here </p>
                <form onSubmit={handleLogin}>
                
                <Box  component="form" noValidate  autoComplete="off" >
                    <label htmlFor="name"  style={{color: theme.palette.text.secondary}}>Name</label><br />
                    <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                        background: 'none',
                        borderColor: theme.palette.text.logoColor,
                        borderRadius: 5,
                        height: 40,
                        minWidth: 300,
                        maxWidth: 500,
                        width: '100%',
                        fontSize: '1rem',
                        padding: 2,
                        paddingLeft: 10,
                        borderBlockStyle: 'solid',

                    }}
                    />
                </Box>


                <Box  component="form" noValidate  autoComplete="off" >
                    <label htmlFor="username"  style={{color: theme.palette.text.secondary}}>Email</label><br />
                    <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                        background: 'none',
                        borderColor: theme.palette.text.logoColor,
                        borderRadius: 5,
                        height: 40,
                        minWidth: 300,
                        maxWidth: 500,
                        width: '100%',
                        fontSize: '1rem',
                        padding: 2,
                        paddingLeft: 10,
                        borderBlockStyle: 'solid',

                    }}
                    />
                </Box>
                <Box >
                    
                <br/>
                    <label htmlFor="password"  style={{color: theme.palette.text.secondary}}>Password</label><br/>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    style={{
                        background: 'none',
                        borderColor: theme.palette.text.logoColor,
                        borderRadius: 5,
                        height: 40,
                        minWidth: 300,
                        maxWidth: 500,
                        width: '100%',
                        padding: 2,
                        paddingLeft: 10,
                        borderBlockStyle: 'solid',

                    }}
                    />
                </Box>
                
                <Box sx={{color: theme.palette.text.secondary, textAlign: 'center', marginTop: 5}}>
                    Already a user?
                    <span style={{fontSize: '1 rem', color: theme.palette.text.logoColor}}>
                        <b> &nbsp; Login</b>
                    </span>
                </Box>
                <Box >
                 <center >  <button type="submit" style={{background: theme.palette.text.logoColor, color:'white', padding: 10, marginTop: 30, border: 0, borderRadius: 5, width: '20rem', fontSize: '1rem'}}>Login</button>
                 </center> </Box>
                </form>
               
    </Box>
    );
}

export default LoginPageRightRegister;