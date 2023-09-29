import { Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'

const drawerWidth: number = 340

export const Chatroom = () => {
  return (
    <Box>
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>
            NASA
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='main'
        sx={{
          p: 3,
          height: '100vh',
          flexGrow: 1,
          // backgroundImage: 'url("images/chatroom-background2.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center top'
        }}>
        <Toolbar />
      </Box>
    </Box>
  )
}
