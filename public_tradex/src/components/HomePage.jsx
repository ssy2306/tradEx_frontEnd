  // HomePage.js
  import { ThemeProvider, createTheme } from '@mui/system';
  import { styled } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import Grid from '@mui/material/Unstable_Grid2';
  import axios from "axios";
  import { useState } from 'react';
  import { server } from "../main"
  import { Stack } from '@mui/material';

  const theme = createTheme({
    palette: {
      background: {
        paper: '#050505',
      },
      text: {
        primary: '#1F1F1F',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
  });

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1F1F1F' : '#111111',
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  //   padding: theme.spacing(1),
  // }));

  // const coinCardStyle = styled('div')({
  //   backgroundColor: theme.palette.background.paper,
  //   padding: theme.spacing(2),
  //   textAlign: 'left  ',
  //   color: theme.palette.text.secondary,
  //   borderRadius: 10,
  //   margin: 10,
  //   width: '100%'
  // });

  const Item = styled('div')({
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    textAlign: 'left  ',
    color: theme.palette.text.secondary,
    borderRadius: 10,
    margin: 10,
    width: '100%'
  });


  function HomePage() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Box sx={{
            bgcolor: 'pallete.background.paper',
            boxShadow: 1,
            borderRadius: 2,
            padding: 2,
            minWidth: 300,
            margin: '15px',
            width: '100%',
            flexGrow: 1,
            display: 'flex'
          }}>
            <h1>Home</h1>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Item>

                </Item>
                <Item>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 2, sm: 4, md: 6 }}
                  >
                  {Array.from(Array(6)).map((_, index) => (
                  <Grid spacing={{ xs: 2, sm: 4, md: 6 }} key={index}>
                        <Box sx={{ color: 'text.secondary' }}>Sessions</Box>
                        <Box sx={{ color: 'white', fontSize: 34, fontWeight: 'medium' }}>
                          98.3 K
                        </Box>
                        <Box
                          sx={{ color: 'success.dark', fontSize: 16, verticalAlign: 'sub' }}
                        />
                        <Box
                          sx={{
                            color: 'success.dark',
                            display: 'inline',
                            fontWeight: 'medium',
                            mx: 0.5,
                          }}
                        >
                          18.77%
                        </Box>
                        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
                          vs. last week
                        </Box>
                        </Grid>
                  ))}
                  </Stack>
                </Item>
          
              </Grid>
          </Box>
        </ThemeProvider>
      </div>
    );
  }

  export default HomePage;
