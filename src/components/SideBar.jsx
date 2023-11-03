import { Link } from 'react-router-dom'
import { useState } from 'react'

// Iconos
import {
  RiBarChart2Line,
  RiEarthLine,
  RiMessageLine,
  RiCalendarTodoLine,
  RiLogoutCircleLine,
  RiArrowRightSLine,
  RiMenu3Line,
  RiCloseLine,
  RiHeadphoneLine
} from 'react-icons/ri'

export function SideBar () {
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className={`h-[100vh] overflow-y-auto fixed top-0 bg-secondary-100 xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto p-4 flex flex-col justify-between z-50 ${showMenu ? 'left-0' : '-left-full'} transition-all`}>
        <div>
          <h1 className='text-center text-2xl font-bold text-white mb-10'>Admin</h1>
          <ul>
            <li>
              <Link to='/' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiBarChart2Line className='text-primary' />
                Analíticas
              </Link>
            </li>
            <li>
              <button onClick={() => setShowSubmenu(!showSubmenu)} className='flex items-center justify-between py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors w-full'>
                <span className='flex items-center gap-4'>
                  <RiEarthLine className='text-primary' />
                  Redes Sociales
                </span>
                <RiArrowRightSLine className={`${showSubmenu && 'rotate-90'} transition-all mt-1`} />
              </button>
              <ul className={`${showSubmenu ? 'h-[120px]' : 'h-0'} overflow-y-hidden transition-all`}>
                <li>
                  <Link className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors' to='/'>Post de Red</Link>
                </li>
                <li>
                  <Link className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors' to='/'>Estadistica</Link>
                </li>
                <li>
                  <Link className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors' to='/'>Perfiles</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiMessageLine className='text-primary' />
                Mensajes
              </Link>
            </li>
            <li>
              <Link to='/' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiHeadphoneLine className='text-primary' />
                Soporte Tecnico
              </Link>
            </li>
            <li>
              <Link to='/' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
                <RiCalendarTodoLine className='text-primary' />
                Cadendario
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link to='/' className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
            <RiLogoutCircleLine className='text-primary' />
            Cerrar Sesion
          </Link>
        </nav>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'>
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  )
}
