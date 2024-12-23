import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page81 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from(".rotatetext12",{
        transform:'rotateX(-90deg)',
        opacity: 0,
        duration: 1.2,
        stagger: 1,
        scrollTrigger:{
          trigger: ".rotatetext12",
          delay: 0.5,
          start:"top 80%",
          end:"top -100%",
          scrub: 2
        }
    })
  })

  return (
    <div id='section22' className='bg-white text-center p-20 text-black'>
      <div className='rotatetext12 '>
        <h1 className='text-[38vw] uppercase leading-[30vw] text-black font-[enzo4]'>html</h1>
      </div>
      <div className='rotatetext12'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>css</h1>
      </div>
      <div className='rotatetext12'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>javascript</h1>
      </div>
      <div className='rotatetext12'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>reactjs</h1>
      </div>
      <div className='rotatetext12'>
        <h1 className='text-[36vw] uppercase leading-[30vw]  text-black font-[enzo4]'>threejs</h1>
      </div>
      <div className='rotatetext12'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>gsap</h1>
      </div>
      <div className='rotatetext12'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>MERN..!</h1>
      </div>
    </div>
  )
}

export default Page81