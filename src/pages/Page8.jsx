import React from 'react'
import Page81 from '../components/Page81'

const Page8 = () => {
  return (
    <div className='h-screen relative -mt-[43vw] p-6 bg-white'>
      <div className='h-full w-full overflow-hidden bg-black rounded-[50px]'>
        <video autoPlay="true" loop muted className='h-full w-full object-cover' src='./videos/back3.mp4'></video>
        <h1 className='font-[enzo4] text-[15vw] ml-6 absolute bottom-2 uppercase leading-none'>My <span className='text-yellow-200 text-[24vw]'>tech-skills</span></h1>
      </div>
    </div>
  )
}

export default Page8