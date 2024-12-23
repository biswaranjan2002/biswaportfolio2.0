import React, { useEffect, useRef } from 'react'

const Page7 = () => {

  return (
    <div className='w-full flex h-screen bg-white'>
        <img className='h-[30vw] overflow-hidden relative z-0 mt-5' src='./images/lap.jpg'></img>
        <video autoPlay loop muted className='absolute h-[21.8vw] ml-[7.32vw] mt-[4.8vw] z-1' src='./videos/portfolio.mp4'></video>
        <h1 className='text-black font-[enzo1] z-20 uppercase -ml-[6vw] mt-[7vw] text-[4vw]'>Portfolio 1.0</h1>
        <div>
          <a href='https://biswaranjan2002.netlify.app/' className='text-black font-[enzo3] bg-zinc-400 Hover:bg-yellow-300 h-[1.5vw] w-[6vw] text-center rounded-full mt-[12vw] z-20 absolute -ml-[28.4vw]'>Visit Site</a>
        </div>
    </div>
  )
}

export default Page7