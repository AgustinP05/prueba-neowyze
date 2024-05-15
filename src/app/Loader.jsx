import Image from 'next/image'
export default function Loader () {
  return (
    <div className='w-full  flex flex-col items-center'>
      <Image
        src='/swlogo.svg'
        alt='Loading Logo'
        width={170}
        height={170}
        priority
      />
      <p>LOADING...</p>
    </div>
  )
}
