import { RiMailLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
export function ForgottenPassword () {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto max-w-lg md:w-full'>
        <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white mb-8 text-center'>Recuperar Contraseña</h1>
        <form className='mb-8'>
          <div className='relative mb-4'>
            <RiMailLine className='absolute text-primary top-1/2 -translate-y-1/2 left-4' />
            <input type='email' className='py-3 pl-10 pr-6 bg-secondary-900 w-full outline-none rounded-lg border border-secondary-900 focus:border-primary' placeholder='Correo Electrónico' />
          </div>
          <div>
            <button type='submit' className='bg-primary text-black uppercase font-bold w-full py-3 px-4 rounded-full duration-150'>Enviar Instrucciones</button>
          </div>
        </form>
        <div className='flex flex-col items-center justify-center gap-3'>
          <span className='flex items-center gap-2'>
            ¿Ya tienes cuenta?
            <Link className='text-primary/90 hover:text-gray-100 transition-colors' to='/login'>Ingresa</Link>
          </span>
          <span className='flex items-center gap-2'>
            ¿No tienes cuenta?
            <Link className='text-primary/90 hover:text-gray-100 transition-colors' to='/register'>Registrate</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
