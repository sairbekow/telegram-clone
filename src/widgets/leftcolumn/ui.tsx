import Drawer from '@mui/material/Drawer'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import FaceIcon from '@mui/icons-material/Face'
import SearchAppBar from '~features/search-app-bar'
import { useTheme } from '@mui/material'

const drawerWidth = 340

export const LeftColumn = () => {
  const theme = useTheme()
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        bgcolor: `${theme.palette.white.main}`,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant='permanent'
      anchor='left'>
      <SearchAppBar />
      <Divider />
      <List sx={{ bgcolor: `${theme.palette.white.main}` }}>
        {[
          'NASA',
          'Креативный Балдар',
          'Треугольник',
          'WWW',
          'NASA',
          'Креативный Балдар',
          'Треугольник',
          'WWW',
          'NASA',
          'Креативный Балдар',
          'Треугольник',
          'WWW',
          'NASA',
          'Креативный Балдар',
          'Треугольник',
          'WWW',
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
