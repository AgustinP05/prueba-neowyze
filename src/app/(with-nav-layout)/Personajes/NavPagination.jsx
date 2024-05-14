'use client'

import Link from 'next/link'

import { getId } from '../Films/[id]/CharCarrusel.jsx' // Importamos getId para tomar el id de las url

export default function NavPagination ({ prev, next, page }) {
  if (prev === null) {
    prev = `?page=${page}`
  }

  if (next === null) {
    next = `?page=${page}`
  }

  // { prev === null ? prev = `?page=${page}` : prev }
  // {next === null ? next = `?page=${page}` : next}
  return (

    <header className='w-full'>
      <h1 className=' text-xl font-bold text-center mb-2'>Todos los personajes:</h1>
      <div className='sticky top-10 z-50 w-full flex justify-around bg-blue-700 '>
        <span />
        <div>

          <Link href={`/Personajes${getId(prev)}`}>Prev</Link>
          <span>{page}</span> {/* Mostramos la pagina actual */}
          <Link href={`/Personajes${getId(next)}`}>Next</Link>

        </div>
        <div>
          filtro<input type='checkbox' name='filter' id='filter' />
        </div>
      </div>
    </header>

  )
}
