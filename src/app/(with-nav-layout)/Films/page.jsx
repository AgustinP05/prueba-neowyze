// import FilmsList from './filmsList'

// Lazy Loading
import Loader from '@/app/Loader'
import dynamic from 'next/dynamic'
const DynamicFilmList = dynamic(() => import('./FilmsList'), {
  loading: () => <Loader />
})

export default async function Films ({ params }) {
  return (
    <section>
      <DynamicFilmList />
    </section>
  )
}
