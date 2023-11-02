import { Outlet } from 'react-router-dom'

export function LayoutAuth () {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <Outlet />
    </div>
  )
}
