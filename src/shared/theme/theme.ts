import { createTheme } from '@mui/material'
import { indigo, blue } from '@mui/material/colors'

export const theme = createTheme({
  spacing: 8,
  palette: {
    mode: 'light',
    primary: {
      main: blue[700],
      light: blue[700],
      dark: indigo[500],
    },
    white: {
      main: '#fff',
    },
    info: {
      main: '#717579',
    },
  },
  zIndex: {
    mobileStepper: 50,
    fab: 100,
    appBar: 150,
    drawer: 200,
    modal: 250,
    snackbar: 300,
    tooltip: 350,
  },
  typography: {
    fontSize: 16,
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Apple Color Emoji"',
      '"Segoe UI"',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      '"Fira Sans"',
      '"Droid Sans"',
      '"Helvetica Neue"',
      'sans-serif',
    ].join(','),
    h3: {
      fontSize: 18,
    },
  },
})
