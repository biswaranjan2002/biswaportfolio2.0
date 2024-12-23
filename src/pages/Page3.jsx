import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative flex items-center justify-center bg-white'>
      <img className='absolute z-20 w-[60vw] -mt-28' src='https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1254,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png'></img>
      <video autoPlay="true" loop muted className='h-[59.5vh] z-10 object-cover relative w-[48vw] -mt-[19.2vh]' src='../videos/compvid1.mp4'></video>
      <div className='h-0.5 top-[20%] w-3/5 z-0 absolute bg-zinc-800'></div>
      <div className='h-0.5 top-[45%] w-4/5 z-0 absolute bg-zinc-800'></div>
      <div className='h-0.5 top-[70%] w-full z-0 absolute bg-zinc-800'></div>
    </div>
  )
}

export default Page3