import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from(".rotatetext1",{
        transform:'rotateX(-90deg)',
        opacity: 0,
        duration: 1.2,
        stagger: 1,
        scrollTrigger:{
          trigger: ".rotatetext1",
          delay: 0.5,
          start:"top 80%",
          end:"top -200%",
          scrub: 2
        }
    })
  })

  return (
    <div id='section21' className='bg-white text-center p-20 text-black'>
      <div className='rotatetext1 '>
        <h1 className='text-[38vw] uppercase leading-[30vw] text-black font-[enzo4]'>bringing</h1>
      </div>
      <div className='rotatetext1'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>creativity</h1>
      </div>
      <div className='rotatetext1'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>and</h1>
      </div>
      <div className='rotatetext1'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>ideas</h1>
      </div>
      <div className='rotatetext1'>
        <h1 className='text-[36vw] uppercase leading-[30vw]  text-black font-[enzo4]'>into</h1>
      </div>
      <div className='rotatetext1'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>reality!</h1>
      </div>
    </div>
  )
}

export default Page5