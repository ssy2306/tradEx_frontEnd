import { createTheme } from "@mui/system";

const theme = createTheme({
    palette: {
      background: {
        paper: '#050505',
        grey: '#111111'
      },
      text: {
        primary: '#1F1F1F',
        secondary: '#8C8C8C',
        logoColor: '#31C48D'
      },
      action: {
        active: '#001E3C',
      },
      success: {
        dark: '#009688',
      },
    },
  });

export default theme;