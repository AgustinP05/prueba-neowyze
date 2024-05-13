export default function PersonajesLayout ({ children }) {
  return (
    <>
      <header className='w-full'>
        <h1 className=' text-xl font-bold text-center mb-2'>Todos los personajes:</h1>
        <div className='sticky top-10 z-50 w-full flex justify-around bg-blue-700 '>
          <span />
          <div>
            <button type='button'> Izq </button>
            <span>1</span>
            <button type='button'> Der </button>
          </div>
          <div>
            filtro<input type='checkbox' name='filter' id='filter' />
          </div>
        </div>
      </header>

      {children}
    </>

  )
}
