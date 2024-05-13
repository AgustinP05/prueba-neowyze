// Yo usualmente utilizaria el Hook useEffect() para hacer el fetching de datos con react. Pero por las caracteristicas de Next, el fetching ocurre en el lado del servidor en lugar de hidratarse en el lado del cliente como haría con los Hooks.
import Link from 'next/link'
import Image from 'next/image'

const fetchFilms = () => {
  return fetch('https://swapi.dev/api/films')
    .then(res => res.json())
}

export default async function FilmsList ({ params }) {
  const filmsData = await fetchFilms()
  const films = filmsData.results // filmsData tiene toda la informacion del fetching. Sin embargo, toda la informacion que buscamos está dentro de results

  // Para ver en consola
  // films.map(film => (console.log(film.title)))

  return (
    <div className='w-[60%] mx-auto grid grid-cols-3 gap-4  text-center'>
      {films.map((film, index) =>
        <Link key={(index + 1)} href={'./Films/' + (index + 1)} className='group flex flex-col justify-center items-center py-4 h-80 w-60 mx-auto rounded-2xl transition-all border border-transparent hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30'>

          {/* Titulo de la pelicula */}
          <small className='font-bold'>Episodio {film.episode_id}</small>
          <h2 className='mb-3 text-xl font-semibold'>{film.title}</h2>

          {/* Cuando se hace hover, aparecen los sith */}
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
