import Box from '@mui/material/Box'
import LeftColumn from '~widgets/leftcolumn'
import Chatroom from '~widgets/chatroom'
export const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <LeftColumn />
      <Chatroom />
    </Box>
  )
}
