import Link from 'next/link'
import Image from 'next/image'
import { getId } from '../Films/[id]/CharCarrusel.jsx' // Importamos getId para tomar el id de las url

const fetchChar = () => {
  return fetch('https://swapi.dev/api/people?limit=82')
    .then(res => res.json())
}

export default async function CharPagination () {
  const charData = await fetchChar()
  const chars = charData.results // charData tiene toda la informacion del fetching. Sin embargo, toda la informacion que buscamos está dentro de results

  // Para ver en consola
  // chars.map(char => (console.log(char.url)))

  return (
    <div className='w-[60%] mx-auto grid grid-cols-3  gap-4  text-center bg-slate-950  rounded-2xl p-4  relative'>
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]' />

      {chars.slice(0, 10).map((character, index) =>
        <Link key={(index + 1)} href={'./Personajes/' + (getId(character.url))} className='group flex flex-col justify-center items-center py-4 h-80 w-60 mx-auto rounded-2xl transition-all border border-transparent hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30'>

          {/* <small className='font-bold'>Episodio {film.episode_id}</small> */}
          <h2 className='mb-3 text-xl font-semibold'>{character.name}</h2>

          <div className='relative w-full h-full '>
            <Image
              className=' m-auto absolute  inset-0 object-cover transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0'
              src='/jedi.svg'
              alt='Jedi Logo'
              width={175}
              height={175}
              priority
            />
            <Image
              className='m-auto absolute  inset-0  object-cover transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
              src='/sith.svg'
              alt='Jedi Logo'
              width={200}
              height={200}
              priority
            />
          </div>

        </Link>)}

    </div>
  )
}
