import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import HomePage from '~pages/home'
import LoginPage from '~pages/login'
import SettingsPage from '~pages/settings'
import Chatroom from '~widgets/chatroom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />}>
        <Route path='chat' element={<Chatroom />} />
      </Route>
      <Route path='login' element={<LoginPage />} />
      <Route path='settings' element={<SettingsPage />} />
    </>
  )
)
export const Router = () => {
  return <RouterProvider router={router} />
}
