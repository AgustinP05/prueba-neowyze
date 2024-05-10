// import Link from 'next/link'
// import Image from 'next/image'

import FilmSpecific from './FilmSpecific'
import CharCarrucel from './CharCarrucel'

const fetchOneFilm = (id) => {
  return fetch(`https://swapi.dev/api/films/${id}`)
    .then(res => res.json())
}

export default async function FilmSpecificPage ({ params }) {
  const { id } = params // Algo que me agarró desprevenido es que el id de cada elemento de la api no corresponde al episode_id, sino que al index+1
  const film = await fetchOneFilm(id)

  return (
    <section>
      <FilmSpecific film={film} />
      <CharCarrucel charList={film.characters} />
    </section>
  )
}
