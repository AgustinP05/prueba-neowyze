// La forma de navegar entre paginas de personajes, es con la url next y previous

import CharPagination from './CharPagination'
import NavPagination from './NavPagination'

export const fetchChar = (page = 1) => {
  return fetch(`https://swapi.dev/api/people/?page=${page}`)
    .then(res => res.json())
}

export default async function Personajes (context) {
  const charsData = await fetchChar(context.searchParams.page) // context es el '?page=X' actual que viene en la url. Por defecto es el 1
  const chars = charsData.results // charData tiene toda la informacion del fetching. Sin embargo, toda la informacion que buscamos está dentro de results
  // console.log({ context })

  return (
    <section>
      {/* A NavPagination le pasamos la pagina actual, la siguiente y la anterior. Mientras que CharPagination recibe los datos del fetch hecho. Cada vez que cambiamos de pagina, hace otra vez la llamada a la API  */}
      <NavPagination page={context.searchParams.page} prev={charsData.previous} next={charsData.next} />
      <CharPagination chars={chars} />
    </section>
  )
}
