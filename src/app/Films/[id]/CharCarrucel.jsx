import Link from 'next/link'

const getId = (url) => {
  return url.split('/').filter(Boolean).pop() // Increible truco guardado de los cursos de cuando empecé. Utilizo el split para crear un array que separe cada elemento entre '/'. Y el pop() el ultimo elemento de este array, que justamente es el numero que necesito
}

export default async function CharCarrucel (props) {
  const { charList } = props // Algo que me agarró desprevenido es que el id de cada elemento de la api no corresponde al episode_id, sino que al index+1

  const charData = await Promise.all(charList.map((charUrl) => fetch(charUrl).then(res => res.json()))) // Promise.all. El viejo truco que utilizo para esperar a que todas las solicitudes terminen para continuar

  return (
    <section>
      <div className='flex px-4'>
        {charData.map((char, index) =>

          <Link key={(index + 1)} href={'../Personajes/' + getId(char.url)}>

            Nombre:{char.name} <br />url:{getId(char.url)}
          </Link>)}
      </div>
    </section>
  )
}
