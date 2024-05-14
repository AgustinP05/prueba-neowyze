'use client'

import Link from 'next/link'

import { getId } from '../Films/[id]/CharCarrusel.jsx' // Importamos getId para tomar el id de las url
import { useState } from 'react'

export default function NavPagination ({ prev, next, page }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false)// State para abrir/cerrar el menu
  const [isEyeColorOpen, setEyeColorOpen] = useState(false)// State para abrir/cerrar el eye color
  const [isGenderOpen, setGenderOpen] = useState(false)// State para abrir/cerrar el Gender

  if (prev === null) { // Para que no baje de la pagina 1
    prev = `?page=${page}`
  }

  if (next === null) { // Para que no supere la ultima pagina
    next = `?page=${page}`
  }

  // { prev === null ? prev = `?page=${page}` : prev }
  // {next === null ? next = `?page=${page}` : next}

  // Listas de ejemplo para dropdown menu
  const eyeColorList = ['blue', 'yellow', 'Brown', 'red', 'blue-gray', 'black', 'orange', 'hazel', 'pink', 'unknown', 'red, blue', 'gold', 'green, yellow']
  const genderList = ['male', 'female', 'n/a', 'none']
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
          <div className='flex items-center justify-center p-4'>
            <button
              id='dropdownDefault'
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center'
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

            <div id='dropdown' className={`absolute top-12 z-10 w-56 p-3 rounded-lg shadow bg-gray-700 transition-transform duration-300 ease-out origin-top ${isDropdownOpen ? 'scale-y-100' : 'scale-y-0'}`}>
              <h6 className='mb-3 text-sm font-medium text-white'>Category</h6>
              <ul className='space-y-2 text-sm' aria-labelledby='dropdownDefault'>
                {/* Categoria Ojos */}
                <li className='flex flex-col items-center'>
                  <button
                    onClick={() => setEyeColorOpen(!isEyeColorOpen)}
                    className='flex justify-between items-center w-full text-gray-100'
                  >
                    Eye color
                    <svg className={`w-4 h-4 ml-2 transition-transform ${isEyeColorOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                    </svg>
                  </button>
                  {isEyeColorOpen && (

                    <ul className='mt-2 space-y-2 pl-4'>
                      {eyeColorList.map((eye, index) => (
                        <li key={index} className='flex items-center'>
                          <input id={eye} type='checkbox' value={eye} className='w-4 h-4  rounded text-primary-600 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500' />
                          <label htmlFor={eye} className='ml-2 text-sm font-medium text-gray-100'>{eye}</label>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Categoría Genero */}
                <li className='flex flex-col items-center'>
                  <button
                    onClick={() => setGenderOpen(!isGenderOpen)}
                    className='flex justify-between items-center w-full text-gray-100'
                  >
                    Gender
                    <svg className={`w-4 h-4 ml-2 transition-transform ${isGenderOpen ? 'rotate-180' : ''}`} fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                    </svg>
                  </button>
                  {isGenderOpen && (
                    <ul className='mt-2 space-y-2 pl-4'>
                      {genderList.map((gender, index) => (
                        <li key={index} className='flex items-center'>
                          <input id={gender} type='checkbox' value={gender} className='w-4 h-4 rounded text-primary-600 focus:ring-primary-500 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500' />
                          <label htmlFor={gender} className='ml-2 text-sm font-medium text-gray-100'>{gender}</label>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
            {/*  */}
          </div>

        </div>

      </div>
    </header>

  )
}
