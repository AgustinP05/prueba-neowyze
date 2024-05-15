'use client'

import Link from 'next/link'

import { getId } from '../Films/[id]/CharCarrusel.jsx' // Importamos getId para tomar el id de las url
import { useState } from 'react'

export default function NavPagination ({ prev, next, page }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false)// State para abrir/cerrar el menu
  const [isEyeColorOpen, setEyeColorOpen] = useState(false)// State para abrir/cerrar el eye color
  const [isGenderOpen, setGenderOpen] = useState(false)// State para abrir/cerrar el Gender
  const [filters, setFilters] = useState({ eyeColor: '', gender: '' })

  if (prev === null) { // Para que no baje de la pagina 1
    prev = `?page=${page}`
  }

  if (next === null) { // Para que no supere la ultima pagina
    next = `?page=${page}`
  }

  // { prev === null ? prev = `?page=${page}` : prev }
  // {next === null ? next = `?page=${page}` : next}

  // Listas de ejemplo para dropdown menu
  const eyeColorList = ['blue', 'yellow', 'brown', 'red', 'blue-gray', 'black', 'orange', 'hazel', 'pink', 'unknown', 'red, blue', 'gold', 'green, yellow']
  const genderList = ['male', 'female', 'n/a', 'none']

  // Actualizar el filtro// se le pasa por parametro el tipo de filtro y el valor del checkbox seleccionado
  const updateFilter = (filsterType, value) => { // Me costó un buen rato en youtube y stackoverflow hasta que me salió esto
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filsterType]: prevFilters[filsterType] === value ? '' : value // si por ejemplo [tipoFiltro]:viejoFiltro === nuevoFiltro ? *Se le saca el filtro* : nuevoFiltro //Basicamente si se hace check, se agrega, sino se quita

    }))// Entonces el setFilter retorna el objeto con los valores checkeados
  }

  // Forma la url segun los filtros aplicados para que las flechas de navegacion funcionen si hay filtro o no
  const constructUrl = (baseUrl, page, filters) => {
    let url = `${baseUrl}${page}`

    if (filters.eyeColor) { // Si esta checked, se le agrega a la url
      url += `&eye_color=${filters.eyeColor}`
    }
    if (filters.gender) { // Si esta checked, se le agrega a la url
      url += `&gender=${filters.gender}`
    }
    return url
  }
  return (

    <header className='w-full mb-5'>
      <h1 className=' text-xl font-bold text-center mb-2'>Todos los personajes:</h1>

      <div className='sticky top-10 z-50 w-full py-2 sm:py-0 h-32 sm:h-10 flex flex-col sm:flex-row justify-around items-center rounded-2xl bg-slate-800/60'>

        <span className='hidden sm:inline  w-[10%]' />
        <div className='flex justify-between items-center w-[50%] sm:w-[30%] md:w-[20%] lg:w-[10%] text-3xl sm:text-2xl '>

          <Link href={constructUrl('/Personajes', getId(prev), filters)} className='flex justify-center items-center rounded-full bg-slate-300 w-10 h-10 sm:w-7 sm:h-7 text-black font-bold hover:bg-slate-300/50 transition-all'>&lt;-</Link>
          <span className='flex justify-center items-center bg-slate-300/80 w-12 h-10 sm:w-10 sm:h-8 rounded-full text-black font-bold'>{page}</span> {/* Mostramos la pagina actual */}
          <Link href={constructUrl('/Personajes', getId(next), filters)} className='flex justify-center items-center rounded-full bg-slate-300 w-10 h-10 sm:w-7 sm:h-7 text-black font-bold hover:bg-slate-300/50 transition-all'>-&gt;</Link>

        </div>
        <div className='w-[50%] sm:w-[10%] h-10  flex justify-center bg-gray-700 sm:bg-transparent rounded-lg'>
          {/* Dropdown menu */}
          <div className='flex items-center justify-center p-4'>
            <button
              id='dropdownDefault'
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className='text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-lg sm:text-sm px-4 py-2.5 text-center inline-flex items-center'
              type='button'
            >
              Filter
              <svg
                className={`w-4 h-4 ml-2 transition-all ${isDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden='true'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
              </svg>
            </button>

            <div id='dropdown' className={`absolute top-32 sm:top-12 z-10 w-56 p-3 rounded-lg shadow bg-gray-700 transition-transform duration-300 ease-out origin-top ${isDropdownOpen ? 'scale-y-100' : 'scale-y-0'}`}>
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
                      {eyeColorList.map((eye, index) => (// 'eye' es cada elemento del array eyeColorList.

                        <li key={index} className='flex items-center'>
                          <Link href={constructUrl('/Personajes', '?page=1', filters)}>
                            <input
                              id={eye} type='checkbox' value={eye}
                              checked={filters.eyeColor === eye} // Si el filtro que está en la url es igual al 'eye' de esta li, checked=true
                              onChange={() => updateFilter('eyeColor', eye)} // Se fija en el tipo de filtro, en este caso 'eyeColor'. Y luego le pasamos el dato que se le agrega/quita al filtro
                              className='w-4 h-4  rounded text-primary-600 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500'
                            />
                          </Link>

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
                        <li key={index} checked={filters.gender === gender} className='flex items-center'>
                          <Link href={constructUrl('/Personajes', '?page=1', filters)}>
                            <input
                              id={gender} type='checkbox' value={gender}
                              checked={filters.gender === gender}
                              onChange={() => updateFilter('gender', gender)}
                              className='w-4 h-4 rounded text-primary-600 focus:ring-primary-500 focus:ring-primary-600 ring-offset-gray-700 focus:ring-2 bg-gray-600 border-gray-500'
                            />
                          </Link>

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
