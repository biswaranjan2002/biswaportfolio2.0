import React from 'react'

const Page4 = () => {
  const handleClick = () => {
    window.open('https://drive.google.com/file/d/1IJPwZbGoHYFtwlepyQGyJkMWCw20AaIR/view?usp=sharing', '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className='h-screen relative p-6 bg-white'>
      <div className='h-full w-full overflow-hidden bg-black rounded-[50px]'>
        <video autoPlay="true" loop muted className='h-full w-full object-cover' src='./videos/back1.mp4'></video>
        <h1 className='font-[enzo4] text-[24vw] ml-6 absolute bottom-60 uppercase'>About</h1>
        <h1 className='font-[enzo4] text-[18vw] ml-6 absolute  uppercase -bottom-16'>and <span className='text-yellow-100 text-[24vw]'>Resume</span></h1>
      </div>
      <div onClick={handleClick}  className='bg-white absolute bottom-[5.523vw] bg-opacity-50 right-[32vw] w-[20vh] h-[8vh] rounded-xl border-[3px] hover:bg-zinc-700 border-black flex justify-center items-center'>
        <button className='text-black font-bold text-[1.85vw] font-[enzo1]'>Click here</button>
      </div>
    </div>
  )
}

export default Page4