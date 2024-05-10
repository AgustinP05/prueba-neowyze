import Image from 'next/image'

export default async function FilmSpecific (props) {
  const { film } = props // traemos el objeto film que viene por props, esta contiene todos los valores del film seleccionado

  return (
    <article className='flex'>
      <div className='w-[500px]'>
        <Image
          className=' m-auto'
          src='/jedi.svg'
          alt='Jedi Logo'
          width={175}
          height={175}
          priority
        />
      </div>
      <div>
        <h1>Episodio {film.episode_id} <br />{film.title}</h1>
        <h3>Dirigido por {film.director}</h3>

      </div>

      <div />
    </article>
  )
}
