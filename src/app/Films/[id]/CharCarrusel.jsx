import Link from 'next/link'
import Image from 'next/image'

const getId = (url) => {
  return url.split('/').filter(Boolean).pop() // Increible truco guardado de los cursos de cuando empecé. Utilizo el split para crear un array que separe cada elemento entre '/'. Y el pop() el ultimo elemento de este array, que justamente es el numero que necesito
}

export default async function CharCarrusel (props) {
  const { charList } = props // Algo que me agarró desprevenido es que el id de cada elemento de la api no corresponde al episode_id, sino que al index+1

  const charData = await Promise.all(charList.map((charUrl) => fetch(charUrl).then(res => res.json()))) // Promise.all. El viejo truco que utilizo para esperar a que todas las solicitudes terminen para continuar

  return (
    <section className='flex justify-center'>
      <div className='charcarrusel flex gap-x-4 px-4 w-[81%] overflow-hidden hover:overflow-x-auto '>
        {charData.map((char, index) =>

          <Link key={(index + 1)} href={'../Personajes/' + getId(char.url)} className='bg-purple-500/30 flex flex-col flex-shrink-0 justify-center items-center py-4 h-80 w-60 rounded-2xl transition-all border border-transparent hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30 '>
            <Image
              className='m-auto'
              src='/char.svg'
              alt='Character Logo'
              width={175}
              height={175}
              priority
            />
            <h3 className='font-bold'>{char.name}</h3>
          </Link>)}
      </div>
    </section>
  )
}
