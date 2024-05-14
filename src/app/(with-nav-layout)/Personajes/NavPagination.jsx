'use client'

import Link from 'next/link'

import { getId } from '../Films/[id]/CharCarrusel.jsx' // Importamos getId para tomar el id de las url
import { useState } from 'react'

export default function NavPagination ({ prev, next, page }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
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
          {/* Dropdown menu */}
          <div className=' flex items-center justify-center p-4'>
            <button
              id='dropdownDefault'
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              type='button'
            >
              Filter
              <svg
                className='w-4 h-4 ml-2'
                aria-hidden='true'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
              </svg>
            </button>

            <div id='dropdown' className={`${isDropdownOpen ? 'scale-y-100' : 'scale-y-0'} absolute top-12 z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700 transition-all`}>
              <h6 className='mb-3 text-sm font-medium text-gray-900 dark:text-white'>Category</h6>
              <ul className='space-y-2 text-sm' aria-labelledby='dropdownDefault'>
                <li className='flex items-center'>
                  <input
                    id='apple' type='checkbox' value=''
                    className='w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                  />
                  <label htmlFor='apple' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-100'>Apple (56)</label>
                </li>
                {/* Repite para los otros elementos */}
              </ul>
            </div>
            {/*  */}
          </div>

        </div>

      </div>
    </header>

  )
}
