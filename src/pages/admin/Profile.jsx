import { RiEdit2Line, RiShieldCheckLine } from 'react-icons/ri'

export function Profile () {
  return (
    <>
      <div className='bg-secondary-100 p-8 rounded-xl mb-8'>
        <h1 className='text-xl text-gray-100'>Profile</h1>
        <hr className='my-8 border-gray-700' />
        <form>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Avatar</p>
            </div>
            <div className='flex-1'>
              <div className='relative mb-2'>
                <img src='https://img.freepik.com/foto-gratis/mujer-joven-hermosa-sueter-rosa-calido-aspecto-natural-sonriente-retrato-aislado-cabello-largo_285396-896.jpg' className='w-28 h-28 object-cover rounded-lg' />
                <label htmlFor='avatar' className='absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24'>
                  <RiEdit2Line />
                </label>
                <input type='file' id='avatar' className='hidden' />
              </div>
              <p className='text-gray-500 text-sm'>Allowed file types: png, jpg, jpeg.</p>
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Nombre Completo <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1 flex items-center gap-4'>
              <div className='w-full'>
                <input type='text' className='w-full py-2 px-4 outline-none bg-secondary-900 rounded-lg' placeholder='Nombre(s)' />
              </div>
              <div className='w-full'>
                <input type='text' className='w-full py-2 px-4 outline-none bg-secondary-900 rounded-lg' placeholder='Apellido(s)' />
              </div>
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Nombre de la Empresa <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1 '>
              <input type='text' className='w-full py-2 px-4 outline-none bg-secondary-900 rounded-lg' placeholder='Empresa(s)' />
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Número de contacto <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1 '>
              <input type='text' className='w-full py-2 px-4 outline-none bg-secondary-900 rounded-lg' placeholder='Numero' />
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>Página web <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1 '>
              <input type='text' className='w-full py-2 px-4 outline-none bg-secondary-900 rounded-lg' placeholder='Página web' />
            </div>
          </div>

          <div className='flex items-center mb-8'>
            <div className='w-1/4'>
              <p>País <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1 '>
              <select className='w-full py-2 px-4 outline-none bg-secondary-900 rounded-lg appearance-none'>
                <option value='' selected>Seleccione un país</option>
                <option value='argentina'>Argentina</option>
                <option value='colombia'>Colombia</option>
                <option value='peru'>Perú</option>
                <option value='venezuela'>Venezuela</option>
                <option value='mexico'>México</option>
                <option value='uruguay'>Uruguay</option>
              </select>
            </div>
          </div>

          <div className='flex items-center'>
            <div className='w-1/4'>
              <p>Ciudad <span className='text-red-500'>*</span></p>
            </div>
            <div className='flex-1 '>
              <select className='w-full py-2 px-4 outline-none bg-secondary-900 rounded-lg appearance-none'>
                <option value='' selected>Selecciona una ciudad</option>
                <option value='bogota'>Bogota</option>
                <option value='lima'>Lima</option>
                <option value='montevideo'>Montevideo</option>
                <option value='caracas'>Caracas</option>
                <option value='ciudad-de-mexico'>Ciudad de México</option>
              </select>
            </div>
          </div>
        </form>
        <hr className='my-8 border-gray-700' />
        <div className='flex justify-end'>
          <button className='bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors'>Guardar</button>
        </div>
      </div>

      <div className='bg-secondary-100 p-8 rounded-xl'>
        <h1 className='text-xl text-gray-100'>Usuario/Contraseña</h1>
        <hr className='my-8 border-gray-700' />
        <form className='mb-8'>
          <div className='flex items-center justify-between'>
            <div>
              <h5 className='text-gray-100 text-lg'>Correo electrónico</h5>
              <p className='text-gray-500 text-sm'>christopher@gmail.com</p>
            </div>
            <button className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-gray-100'>Cambiar email</button>
          </div>
          <hr className='my-8 border-gray-700 border-dashed' />
          <div className='flex items-center justify-between'>
            <div>
              <h5 className='text-gray-100 text-lg'>Contraseña</h5>
              <p className='text-gray-500 text-sm'>***************</p>
            </div>
            <button className='bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 transition-colors hover:text-gray-100'>Cambiar contraseña</button>
          </div>
        </form>
        <div className=' bg-green-600/10 px-4 py-8 rounded-lg border border-dashed border-green-600'>
          <div className='flex items-center gap-3 max-w-7xl mx-auto'>
            <div>
              <RiShieldCheckLine className='text-5xl text-green-600' />
            </div>
            <div className='flex-1'>
              <h5 className='text-gray-100 text-xl'>Asegura tu cuenta</h5>
              <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit et cumque aliquam repellendus perferendis impedit distinctio voluptatum delectus.</p>
            </div>
            <div>
              <button className='bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-4 rounded-lg text-gray-100'>Activar</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
