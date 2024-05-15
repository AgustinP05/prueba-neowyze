import FilmsList from './filmsList'

// Lazy Loading
import { Suspense } from 'react'
import Loader from '@/app/Loader'

export default async function Films ({ params }) {
  return (
    <Suspense fallback={<Loader />}>
      <h1 className=' text-xl font-bold text-center mb-5'>Todos las peliculas:</h1>
      <FilmsList />
    </Suspense>
  )
}
