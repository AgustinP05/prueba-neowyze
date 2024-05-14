import Image from 'next/image'

export default async function CharSpecific (props) {
  const { char } = props // traemos el objeto film que viene por props, esta contiene todos los valores del film seleccionado

  return (
    <article className='h-[500px]'>
      <div className='w-[50%] h-full flex justify-center  mb-6 mx-auto rounded-2xl py-4 px-6 bg-gray-400/30 bg-opacity-30'>
        <div className='flex w-full bg-neutral-300/80 rounded-2xl justify-between'>
          <div className='w-[45%] flex justify-center items-center my-4 ml-4 bg-slate-950 rounded-2xl border-dashed border-8 border-slate-100'>
            {/* Aqui estan los iconos que se van a mostrar segun el genero */
              char.gender === 'n/a'
                ? <Image
                    src='/char.svg'
                    alt='Droid Logo'
                    width={170}
                    height={170}
                    priority
                  />
                : char.gender === 'male'
                  ? <Image
                      src='/mando.svg'
                      alt='Male Logo'
                      width={180}
                      height={180}
                      priority
                    />
                  : char.gender === 'female'
                    ? <Image
                        src='/grogu.svg'
                        alt='Female Logo'
                        width={170}
                        height={170}
                        priority
                      />
                    : <Image
                        src='/sith.svg'
                        alt='Sith Logo'
                        width={170}
                        height={170}
                        priority
                      />
          }
          </div>
          <div className='w-[50%] flex flex-col rounded-r-2xl text-center font-bold p-2'>
            <h1 className=' text-5xl text-sky-800/80 mt-2 underline text-wrap'>{char.name}</h1>
            <ul className=' text-lg flex flex-col text-right mt-4 pr-4 list-none'>
              <li className=' text-wrap text-sky-950/80'>{(char.gender === 'n/a' || char.gender === 'none') ? 'Made' : 'Born'} in the year {char.birth_year}</li>
              <li className=' text-wrap text-sky-950/80'>Height of {char.height} centimeters</li>
              <li className=' text-wrap text-sky-950/80 first-letter:uppercase'>{char.skin_color} {(char.gender === 'n/a' || char.gender === 'none') ? 'metal' : 'complexion'}</li>
              <li className=' text-wrap text-sky-950/80'>{char.eye_color === 'unknown' ? `No ${(char.gender === 'n/a' || char.gender === 'none') ? 'lights' : 'eyes'} register` : 'With ' + char.eye_color + ` ${(char.gender === 'n/a' || char.gender === 'none') ? 'lights' : 'eyes'}`}</li>
              <li className=' text-wrap text-sky-950/80 first-letter:uppercase'>{(char.gender === 'n/a' || char.hair_color === 'n/a') ? 'None' : char.hair_color} hair</li>
              <li className=' text-wrap text-sky-950/80'>Mass {char.mass === 'unknown' ? 'not filed' : `of ${char.mass} kg`}</li>
            </ul>

            <Image
              className='rounded-full rotate-12 relative bottom-16'
              src='/sith.svg'
              alt='Sith Logo'
              width={220}
              height={220}
              priority
            />

          </div>
        </div>

      </div>

    </article>
  )
}
