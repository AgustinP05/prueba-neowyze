// En este componente se encontrará el componente principal de la ruta para Pelicula especifica. Así divido los componentes en la carta que tiene la info de la pelicula y abajo el carrucel con sus personajes
import FilmSpecific from './FilmSpecific'
import CharCarrusel from './CharCarrusel'

const fetchOneFilm = (id) => {
  return fetch(`https://swapi.dev/api/films/${id}`)
    .then(res => res.json())
}

export default async function FilmSpecificPage ({ params }) {
  const { id } = params // Algo que me agarró desprevenido es que el id de cada elemento de la api no corresponde al episode_id, sino que al index+1
  const film = await fetchOneFilm(id)

  return (
    <section className='flex flex-col'>
      <FilmSpecific film={film} />
      <CharCarrusel charList={film.characters} />
    </section>
  )
}
