import Link from 'next/link'

export default function navLayout ({ children }) {
  return (
    <>
      <header className='flex justify-center gap-x-3 text-center mb-10  text-neutral-800 uppercase items-center text-2xl font-bold h-10 bg-gradient-to-r from-blue-500/80 to-red-500/80'>
        <Link href='/' className='group flex flex-col relative items-center hover:text-xl transition-all'>Inicio<span className='absolute bottom-0 left-0 w-full h-1 bg-cyan-400 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100' /></Link>
        <Link href='/Films' className='group flex flex-col relative items-center hover:text-xl transition-all'>Films<span className='absolute bottom-0 left-0 w-full h-1 bg-cyan-400 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100' /></Link>
        <Link href='/Personajes' className='group flex flex-col relative items-center hover:text-xl transition-all'>Personajes<span className='absolute bottom-0 left-0 w-full h-1 bg-cyan-400 transition-transform transform scale-x-0 origin-left group-hover:scale-x-100' /></Link>
      </header>
      {children}
    </>
  )
}
