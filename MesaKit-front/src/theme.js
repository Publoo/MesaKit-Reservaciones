// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light', // Puedes cambiar a 'dark' si prefieres
    primary: {
      main: '#2E7D32', // Verde bosque
    },
    secondary: {
      main: '#FF9800', // Naranja vibrante
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#4f4f4f',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
