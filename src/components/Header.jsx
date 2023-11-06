import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLogoutCircleLine,
  RiThumbUpLine,
  RiChat3Line

} from 'react-icons/ri'

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import { Link } from 'react-router-dom'

export function Header () {
  return (
    <header className='h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end'>
      <nav className='flex items-center gap-x-2'>
        <Menu
          menuButton={
            <MenuButton className='relative hover:bg-secondary-100 p-2 rounded-lg transition-colors'>
              <RiNotification3Line />
              <span className='absolute top-0 right-0 bg-primary py-0.5 px-[5px] text-black rounded-full text-[8px] font-bold'>2</span>
            </MenuButton>
        }
          transition
          arrow
          align='end'
          arrowProps={{ className: 'bg-secondary-100' }}
          menuClassName='bg-secondary-100 p-4'
        >
          <h1 className='text-gray-300 text-center'>Notificaciones (2)</h1>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 p-0'>
            <Link to='/' className='flex items-center gap-4 py-2 px-4'>
              <img src='https://img.freepik.com/foto-gratis/retrato-hombre-joven-cabello-rizado-oscuro_176532-8137.jpg?w=996&t=st=1699112479~exp=1699113079~hmac=8b53cd7328f40504269a8fbd6e4b84a66108da373dfefd481ec303c51fe034d8' className='w-8 h-8 object-cover rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Christopher Romero </span>
                  <span className='text-[8px]'>04/11/23</span>
                </div>
                <p className='text-gray-500 text-xs w-[190px] truncate'>Lorem ipsum dolor sit amet.</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 p-0'>
            <Link to='/' className='flex items-center gap-4 py-2 px-4'>
              <RiThumbUpLine className='w-8 h-8 p-2 bg-blue-200 text-blue-700 rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Nuevo like</span>
                  <span className='text-[8px]'>04/11/23</span>
                </div>
                <p className='text-gray-500 text-xs w-[190px] truncate'>A Sebas Ramirez le gusta tu publicación</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 p-0'>
            <Link to='/hoola' className='flex items-center gap-4 py-2 px-4'>
              <RiChat3Line className='w-8 h-8 p-2 bg-yellow-200 text-yellow-700 rounded-full' />
              <div className='text-sm flex flex-col'>
                <div className='flex items-center justify-between gap-4'>
                  <span>Nuevo Comentario</span>
                  <span className='text-[8px]'>04/11/23</span>
                </div>
                <p className='text-gray-500 text-xs w-[190px] truncate'>Anyela Vega ha comentado tu publicación</p>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <div className='flex justify-center'>
            <MenuItem className='rounded-lg transition-colors font-semibold hover:text-black hover:bg-primary p-0 '>
              <Link to='/asdasd' className='text-gray-500 text-sm py-2 px-4'>Todas las notificaciones</Link>
            </MenuItem>
          </div>
        </Menu>

        <Menu
          menuButton={
            <MenuButton className='flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors'>
              <img src='https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?w=996&t=st=1699052100~exp=1699052700~hmac=fb09235b70e6eb9a93510091f79a5bbd0903362ad953eb2a28f2665fc539f4eb' className='w-6 h-6 object-cover rounded-full' />
              <span>Christopher Romero</span>
              <RiArrowDownSLine className='mt-0.5' />
            </MenuButton>
        }
          transition
          arrow
          arrowProps={{ className: 'bg-secondary-100' }}
          menuClassName='bg-secondary-100 p-4'
        >
          <MenuItem className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 p-0'>
            <Link to='/profile' className='flex items-center gap-x-4 px-4 py-2'>
              <img src='https://img.freepik.com/foto-gratis/joven-barbudo-camisa-rayas_273609-5677.jpg?w=996&t=st=1699052100~exp=1699052700~hmac=fb09235b70e6eb9a93510091f79a5bbd0903362ad953eb2a28f2665fc539f4eb' className='w-8 h-8 object-cover rounded-full' />
              <div className='flex flex-col'>
                <span className='text-sm'>Christopher Romero</span>
                <span className='text-[9px] text-gray-500'>christopher@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className='my-4 border-gray-500' />
          <MenuItem className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 p-0'>
            <Link to='/configuration' className='flex items-center gap-x-4 px-4 py-2'>
              <RiSettings3Line />
              Configuracion
            </Link>
          </MenuItem>
          <MenuItem className='rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 p-0'>
            <Link to='/logout' className='flex items-center gap-x-4 px-4 py-2'>
              <RiLogoutCircleLine />
              Cerrar sesión
            </Link>
          </MenuItem>

        </Menu>
      </nav>
    </header>
  )
}
