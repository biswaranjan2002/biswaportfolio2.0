import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#banner',{
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear'
    })
  })

  return (
    <div className='absolute flex items-end gap-10 left-0 px-16 py-14 bottom-0 w-full'>
      <div>
        <h2 className='text-2xl font-[enzo3]'>BRAND DESIGN | WEBSITE DESIGN</h2>
        <h3 className='text-xl font-[enzo2]'>ReactJS | Tailwind CSS | GSAP | ThreeJS | LocomotiveJS</h3>
      </div>
      <div>
        <img id='banner' className='h-[6.5vw] -mb-3 opacity-90 mr-4' src='https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png'></img>
      </div>    
    </div>
  )
}

export default Page1Bottom