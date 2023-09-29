import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import Router from './providers'
import theme from '~shared/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

export default App
