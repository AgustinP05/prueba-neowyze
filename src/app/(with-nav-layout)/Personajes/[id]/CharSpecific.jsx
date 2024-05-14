import Image from 'next/image'

export default async function CharSpecific (props) {
  const { char } = props // traemos el objeto film que viene por props, esta contiene todos los valores del film seleccionado

  return (
    <article className='h-[500px]'>
      <div className='w-[50%] h-full flex justify-center  mb-6 mx-auto rounded-2xl py-4 px-6 bg-gray-400/30 bg-opacity-30'>
        <div className='flex w-full bg-neutral-300/80 rounded-2xl justify-between'>
          <div className='flex justify-center items-center w-[400px] my-4 ml-4 bg-slate-950 rounded-2xl'>
            <Image
              className=' m-auto'
              src='/jedi.svg'
              alt='Jedi Logo'
              width={175}
              height={175}
              priority
            />
          </div>
          <div className='flex flex-col  rounded-r-2xl text-center font-bold p-2'>
            <h1 className=' text-5xl text-sky-800/80 mt-2 underline text-wrap'>{char.name}</h1>
            <ul className=' text-lg flex flex-col text-right mt-4 pr-4 list-none'>
              <li className=' text-wrap text-sky-950/80'>Born in the year {char.birth_year}</li>
              <li className=' text-wrap text-sky-950/80'>Height of {char.height} centimeters</li>
              <li className=' text-wrap text-sky-950/80 first-letter:uppercase'>{char.skin_color} complexion</li>
              <li className=' text-wrap text-sky-950/80'>With {char.eye_color} eyes</li>
              <li className=' text-wrap text-sky-950/80 first-letter:uppercase'>{char.hair_color} hair</li>
              <li className=' text-wrap text-sky-950/80'>Mass of {char.mass} kg</li>
            </ul>

          </div>
        </div>

      </div>

    </article>
  )
}
