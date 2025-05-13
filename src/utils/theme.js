import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  palette: {
    mode: "light",
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
      secondary: red[500]
    }
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});

export default theme;