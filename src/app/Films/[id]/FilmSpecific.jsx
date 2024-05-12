import Image from 'next/image'

export default async function FilmSpecific (props) {
  const { film } = props // traemos el objeto film que viene por props, esta contiene todos los valores del film seleccionado

  return (
    <article className=''>
      <div className='w-[50%] flex justify-center mt-10 mb-6 mx-auto rounded-2xl pt-4 pb-4 bg-neutral-800 bg-opacity-30'>
        <div className='w-[500px] bg-neutral-600/50 rounded-2xl rounded-tr-none rounded-br-none'>
          <Image
            className=' m-auto'
            src='/jedi.svg'
            alt='Jedi Logo'
            width={175}
            height={175}
            priority
          />
        </div>
        <div className='flex flex-col justify-around bg-neutral-600 rounded-r-2xl text-center font-bold p-2'>
          <h1 className=' text-2xl'>Episodio {film.episode_id} <br />{film.title}</h1>
          <h3 className=' text-wrap text-slate-300/80'>Dirigido por {film.director}</h3>
        </div>

      </div>

    </article>
  )
}
