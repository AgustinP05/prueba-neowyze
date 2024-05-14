'use client'

import Link from 'next/link'

import { getId } from '../Films/[id]/CharCarrusel.jsx' // Importamos getId para tomar el id de las url

export default function NavPagination ({ prev, next, page }) {
  if (prev === null) { // Para que no baje de la pagina 1
    prev = `?page=${page}`
  }

  if (next === null) { // Para que no supere la ultima pagina
    next = `?page=${page}`
  }

  // { prev === null ? prev = `?page=${page}` : prev }
  // {next === null ? next = `?page=${page}` : next}
  return (

    <header className='w-full mb-5'>
      <h1 className=' text-xl font-bold text-center mb-2'>Todos los personajes:</h1>

      <div className='sticky top-10 z-50 w-full h-10 flex justify-around items-center rounded-2xl bg-slate-800/60'>

        <span className='w-[10%]' />
        <div className='flex justify-between items-center w-[10%] text-2xl '>

          <Link href={`/Personajes${getId(prev)}`} className='flex justify-center items-center rounded-full bg-slate-300 w-7 h-7 text-black font-bold hover:bg-slate-300/50 transition-all'>&lt;-</Link>
          <span className='flex justify-center items-center bg-slate-300/80 w-10 h-8 rounded-full text-black font-bold'>{page}</span> {/* Mostramos la pagina actual */}
          <Link href={`/Personajes${getId(next)}`} className='flex justify-center items-center rounded-full bg-slate-300 w-7 h-7 text-black font-bold hover:bg-slate-300/50 transition-all'>-&gt;</Link>

        </div>
        <div className='w-[10%] flex justify-center'>
          filtro<input type='checkbox' name='filter' id='filter' />
        </div>

      </div>
    </header>

  )
}
