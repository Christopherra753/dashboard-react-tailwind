import { Outlet } from 'react-router-dom'
import { SideBar } from '../components/SideBar'
import { Header } from '../components/Header'

export function LayoutAdmin () {
  return (
    <div className='h-screen grid grid-cols-1 xl:grid-cols-6'>
      <SideBar />
      <div className='xl:col-span-5'>
        <Header />
        <div className='h-[90vh] overflow-y-auto p-8'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
