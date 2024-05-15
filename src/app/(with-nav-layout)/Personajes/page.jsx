// La forma de navegar entre paginas de personajes, es con la url next y previous

// import CharPagination from './CharPagination'
import NavPagination from './NavPagination'
import { fetchChar } from './filterLogic'
// import Image from 'next/image'

// Aplicando Lazy Loading para los componentes mas pesados //Basado en https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading
import dynamic from 'next/dynamic'
const DynamicCharPagination = dynamic(() => import('./CharPagination'), {
  loading: () => {
    return (
      <p>...CARGANDOOOOOO PAGINACIOOOOON</p>
    )
  }

})

export default async function Personajes (context) {
  const page = context.searchParams.page
  const filter = {
    eyeColor: context.searchParams.eye_color || '',
    gender: context.searchParams.gender || ''
  }

  const charsData = await fetchChar(page, filter) // el '?page=X' actual que viene en la url. Por defecto es el 1
  const chars = charsData.results // charData tiene toda la informacion del fetching. Sin embargo, toda la informacion que buscamos está dentro de results
  // console.log({ context })

  return (
    <section>
      {/* A NavPagination le pasamos la pagina actual, la siguiente y la anterior. Mientras que CharPagination recibe los datos del fetch hecho. Cada vez que cambiamos de pagina, hace otra vez la llamada a la API  */}
      <NavPagination page={context.searchParams.page} prev={charsData.previous} next={charsData.next} />
      <DynamicCharPagination chars={chars} />
      {/* <CharPagination chars={chars} /> */}
    </section>
  )
}
