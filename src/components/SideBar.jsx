import { Link } from 'react-router-dom'
import { RiBarChart2Line } from 'react-icons/ri'

export function SideBar () {
  return (
    <div className='h-[100vh] w-full overflow-y-auto fixed -left-full top-0 bg-secondary-100 xl:static p-8'>
      <div>
        <h1 className='text-center text-2xl font-bold text-white mb-10'>Admin</h1>
        <nav>
          <Link to='/' className='flex items-center gap-4 py-2 px-4 rounded-lg'>
            <RiBarChart2Line className='text-primary' />
            Analytic
          </Link>
        </nav>
      </div>
    </div>
  )
}
