import React from 'react'

const Page72 = () => {
  return (
    <div className='w-full flex h-screen bg-white'>
        <img className='h-[30vw] overflow-hidden relative z-0 -mt-[18vw]' src='./images/lap.jpg'></img>
        <video autoPlay loop muted className='absolute h-[21.9vw] ml-[7.32vw] -mt-[14.6vw] z-1' src='./videos/social media.mp4'></video>
        <h1 className='text-black font-[enzo1] z-20 uppercase -ml-[6vw] -mt-[13vw] text-[4vw]'>social-media-app</h1>
        <div className=''>
          <a href='https://github.com/biswaranjan2002/Simple-social-media-app' className='text-black font-[enzo3] bg-zinc-400 Hover:bg-yellow-300 h-[2vw] w-[7vw] text-center rounded-full absolute -mt-[8vw] text-[1.25vw] z-20 -ml-[39vw]'>Visit Site</a>
        </div>
    </div>
  )
}

export default Page72

