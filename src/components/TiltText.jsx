import React from 'react'

function TiltText(props) {
  return (
    <div id='tiltDiv' ref={props.abc} className='mt-[2vw] ml-6'>
        <h1 className='text-[4vw] leading-[10vw] uppercase font-[enzo3]'>I am <span className='text-black text-[7.5vw] font-[enzo1] font-semibold'>Bisw<span className='text-zinc-800'>ara</span><span className='text-zinc-500'>njan</span></span></h1>
        <h1 className='text-[8vw] leading-[0.1vw] font-[enzo5]'>WEB <span className='text-slate-800'>DESI<span className='text-red-500'>GNER</span></span></h1>
        <h1 className='text-[7vw] leading-[12.3vw] uppercase font-[enzo1] text-orange-200'>To <span className='text-purple-400'>Hire</span></h1>
    </div>  
  )
}

export default TiltText