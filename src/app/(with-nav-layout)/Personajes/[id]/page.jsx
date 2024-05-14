// En este componente se encontrará el componente principal de la ruta para Personaje especifica. Aquí se estará llamando a la API
import CharSpecific from './CharSpecific'

const fetchOneChar = (id) => {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
}

export default async function PersonajesSpecificPage ({ params }) {
  const { id } = params // Algo que me agarró desprevenido es que el id de cada elemento de la api no corresponde al episode_id, sino que al index+1
  const char = await fetchOneChar(id)

  return (
    <section className='h-[800px] flex flex-col justify-center'>

      <CharSpecific char={char} />
    </section>
  )
}
