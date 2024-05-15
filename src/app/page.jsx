import Image from 'next/image'
import Link from 'next/link'
export default function Home () {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b  bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30'>
          Bienvenido a la prueba tecnica NeoWyze
        </p>
        <div className='group rounded-lg border border-transparent px-5 py-4 transition-colors text-sky-300 hover:border-sky-300 hover:bg-neutral-800 hover:bg-opacity-30 hover:text-slate-300'>
          <Link
            className='pointer-events-none flex place-items-center p-8 lg:pointer-events-auto lg:p-0'
            href='https://www.linkedin.com/in/agustin-perea'
            target='_blank'
            rel='noopener noreferrer'
          >
            By{' '}
            {/* <Image
              src='/alogo.svg'
              alt='Agustin Logo'
              width={24}
              height={24}
              priority
            /> */}
            Agustin Perea
          </Link>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-3xl before:content-[''] after:absolute after:-z-20 after:h-[380px] after:w-full sm:after:w-[440px] after:bg-gradient-conic after:blur-3xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-60 before:lg:h-[660px] z-[-1]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] '
          src='/swlogo.svg'
          alt='Star Wars Logo'
          width={480}
          height={150}
          priority
        />
      </div>

      <div className='w-full mb-32 flex flex-col sm:flex-row justify-center text-center  lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>

        <Link
          href='/Films'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Films{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Mira la informacion de las peliculas sobre esta galaxia muy muy lejana
          </p>
        </Link>

        <Link
          href='/Personajes?page=1'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors  hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800/30'
          rel='noopener noreferrer'
        >
          <h2 className='mb-3 text-2xl font-semibold'>
            Personajes{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p className='m-0 max-w-[30ch] text-sm opacity-50'>
            Conoce a todos sin importar si es imperial o rebelde.
          </p>
        </Link>

      </div>
    </main>
  )
}
