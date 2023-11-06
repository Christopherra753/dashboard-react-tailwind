// Icons
import { useState } from 'react'
import { RiMailLine, RiLockLine, RiEyeLine, RiEyeOffLine } from 'react-icons/ri'

import { Link } from 'react-router-dom'

export function Login () {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto max-w-lg md:w-full'>
        <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>Iniciar Sesión</h1>
        <form className='mb-8'>
          <button className='flex items-center justify-center py-3 px-4 gap-4 bg-neutral-900 hover:bg-neutral-950 duration-150 w-full rounded-full mb-8 text-gray-100'>
            <img className='w-4 h-4' src='https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png' alt='' />
            Ingresa con google
          </button>
          <div className='relative mb-4'>
            <RiMailLine className='absolute text-primary top-1/2 -translate-y-1/2 left-4' />
            <input type='email' className='py-3 pl-10 pr-6 bg-secondary-900 w-full outline-none rounded-lg border border-secondary-900 focus:border-primary' placeholder='Correo Electrónico' />
          </div>
          <div className='relative mb-4'>
            <RiLockLine className='absolute text-primary top-1/2 -translate-y-1/2 left-4' />
            <input type={showPassword ? 'text' : 'password'} className='py-3 px-10 bg-secondary-900 w-full outline-none rounded-lg border border-secondary-900 focus:border-primary' placeholder='Contraseña' />
            {
            showPassword
              ? (
                <RiEyeLine onClick={() => setShowPassword(!showPassword)} className='absolute text-primary top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer' />
                )
              : (
                <RiEyeOffLine onClick={() => setShowPassword(!showPassword)} className='absolute text-primary top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer' />
                )
          }
          </div>
          <div>
            <button type='submit' className='bg-primary text-black uppercase font-bold w-full py-3 px-4 rounded-full duration-150'>Ingresar</button>
          </div>
        </form>
        <div className='flex flex-col items-center gap-4'>
          <Link className='hover:text-primary transition-colors' to='/forgotten-password'>¿Olvidaste tu contraseña?</Link>
          <span className='flex items-center gap-2'>
            ¿No tienes cuenta?
            <Link className='text-primary/90 hover:text-gray-100 transition-colors' to='/register'>Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
