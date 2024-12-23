import React from 'react'

const Page73 = () => {
  return (
    <div className='w-full flex h-[48vw] bg-white justify-end items-center'>
      <div className='relative -mt-[46vw]'>
        <img className='h-[30vw] -mt-[25vw] overflow-hidden relative -z-0' src='./images/lap.jpg' alt='Laptop' />
        <video autoPlay loop muted className='absolute left-[7.37vw] h-[21.9vw] bottom-[4.7vw] z-0' src='./videos/Apmosys.mp4'></video>
        <h1 className='text-black font-[enzo1] z-50 absolute leading-none uppercase text-right text-[4vw] -ml-[30.3vw] -mt-[25vw]'>
          Sample Company
          <br />
          Landing Page
        </h1>
        <div className=''>
          <a className='text-black font-[enzo3] bg-zinc-400 Hover:bg-orange-300 h-[2vw] w-[7vw] absolute text-center rounded-full -mt-[16.7vw] z-50 -ml-[1.1vw] text-[1.3vw]' href='https://salusahoo89.wixsite.com/apmosys'>Visit Site</a>
        </div>
      </div>
    </div>
  )
}

export default Page73