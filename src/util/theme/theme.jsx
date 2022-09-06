import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#f47721',
    },
    secondary: {
      main: '#386daa',
    },
    background: {
      default: '#ffffff',
      paper: '#F5F5F5',
    },
    text: {
      secondary: '#ffffff',
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

export default theme;
