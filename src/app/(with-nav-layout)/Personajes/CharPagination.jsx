import Link from 'next/link'
import Image from 'next/image'

import { getId } from '../Films/[id]/CharCarrusel.jsx' // Importamos getId para tomar el id de las url

export default async function CharPagination ({ chars }) {
  return (
    <div className='w-[60%] mx-auto grid grid-cols-3  gap-4  text-center bg-slate-950  rounded-2xl p-4  relative mb-10 overflow-hidden'>

      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]' />

      {chars.map((character, index) => /* Se renderiza el componente por cada personaje de la pagina actual */
        <Link key={(index + 1)} href={'./Personajes/' + (getId(character.url))} className='group flex flex-col justify-center items-center py-4 h-80 w-60 mx-auto rounded-2xl transition-all border border-transparent overflow-hidden hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30'>

          <h2 className='mb-3 text-xl font-semibold'>{character.name}</h2>

          <div className='relative w-full h-full '>
            <div className='m-auto opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 absolute z-10  inset-0  object-cover w-[70%] h-[70%] rounded-3xl bg-slate-800/90 transition-all'>
              <div className='w-full h-full flex flex-col justify-center items-center font-bold transition-all'>
                <h3>{character.gender === 'male'
                  ? 'He is'
                  : character.gender === 'female' ? 'She is' : ''}  {character.gender === 'n/a' ? 'Is a droid' : character.gender}
                </h3>
                <h3>with {character.eye_color} {character.gender === 'n/a' ? 'lights' : 'eyes'}</h3>
              </div>

            </div>
            <Image
              className=' m-auto absolute  inset-0 object-cover transition-all duration-300 opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0'
              src='/sith.svg'
              alt='Jedi Logo'
              width={200}
              height={200}
              priority
            />
            {/* Aqui estan los iconos que se van a mostrar segun el genero */
              character.gender === 'n/a'
                ? <Image
                    className='m-auto absolute  inset-0  object-cover transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                    src='/droid.svg'
                    alt='Droid Logo'
                    width={170}
                    height={170}
                    priority
                  />
                : character.gender === 'male'
                  ? <Image
                      className='m-auto absolute  inset-0  object-cover transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                      src='/mando.svg'
                      alt='Male Logo'
                      width={180}
                      height={180}
                      priority
                    />
                  : character.gender === 'female'
                    ? <Image
                        className='m-auto absolute  inset-0  object-cover transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                        src='/grogu.svg'
                        alt='Female Logo'
                        width={170}
                        height={170}
                        priority
                      />
                    : <Image
                        className='m-auto absolute  inset-0  object-cover transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                        src='/char.svg'
                        alt='Character Logo'
                        width={170}
                        height={170}
                        priority
                      />
            }

          </div>

        </Link>)}

    </div>

  )
}
