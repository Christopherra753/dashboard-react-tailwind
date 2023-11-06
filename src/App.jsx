import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Layout
import { LayoutAdmin } from './layouts/LayoutAdmin'

// Pages auth
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'

// Pages admin
import { Home } from './pages/admin/Home'
import { Chat } from './pages/admin/Chat'

// Pages error
import { Error404 } from './pages/Error404'
import { ForgottenPassword } from './pages/auth/ForgottenPassword'
import { Profile } from './pages/admin/Profile'

function App () {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='forgotten-password' element={<ForgottenPassword />} />

        <Route path='/' element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path='chat' element={<Chat />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
