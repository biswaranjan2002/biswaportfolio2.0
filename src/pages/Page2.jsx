import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to('#banner',{
      rotate: 360,
      duration: 3.5,
      repeat: -1,
      ease: 'linear'
    })
  })


  useGSAP(function(){
    gsap.from(".rotatetext",{
        transform:'rotateX(-90deg)',
        opacity: 0,
        duration: 1.2,
        stagger: 1,
        scrollTrigger:{
          trigger: ".rotatetext",
          delay: 0.5,
          start:"top 80%",
          end:"top -250%",
          scrub: 2
        }
    })
  })

  return (
    <div id='section2' className='bg-white text-center p-20 text-black'>
      <h3 className='text-gray-600 text-3xl font-[enzo2]'>Portfolio 2.0 | Biswaranjan Sahoo | designed and developed</h3>
      <div className='rotatetext mt-24'>
        <h1 className='text-[38vw] uppercase leading-[30vw] text-black font-[enzo4]'>IMPACTFUL</h1>
      </div>
      <div className='rotatetext'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>design</h1>
      </div>
      <div className='rotatetext'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>is the</h1>
      </div>
      <div className='rotatetext'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>design</h1>
      </div>
      <div className='rotatetext'>
        <h1 className='text-[36vw] uppercase leading-[30vw]  text-black font-[enzo4]'>that</h1>
      </div>
      <div className='rotatetext'>
        <h1 className='text-[38vw] uppercase leading-[30vw]  text-black font-[enzo4]'>redefines</h1>
      </div>
      <div className='rotatetext relative'>
        <video autoPlay="true" loop muted src='./videos/astro3.mp4' className='absolute h-[40vw] w-full object-cover rounded-[60px] -z-10'></video>
        <h1 className='text-[38vw] opacity-40 z-0 uppercase leading-[40vw]  text-black font-[enzo4]'>creativity</h1>
      </div>
      <div className='h-[3px] rounded-xl w-full relative mt-[5vw] left-1/2 -translate-x-1/2 bg-zinc-500'>
      </div>
      
      <div className='roatatetext mt-[4vw]'>
        <h1 className='text-black text-3xl font-[enzo2] font-semibold'>I value <span className='text-yellow-700 font-[enzo1]'>quality,</span><span className='text-blue-700 font-[enzo1]'> empathy</span> and <span className='text-red-500 font-[enzo1]'>integrity</span> above all metrices...😊</h1>
        <div className='flex justify-center gap-[18vw] mt-7'>
          <img id='banner' className='h-[7.4vw]' src='https://cdn-icons-png.flaticon.com/512/1212/1212289.png'></img>
          <img id='banner' className='h-[7vw]' src='https://cdn-icons-png.flaticon.com/512/5706/5706788.png'></img>
          <img id='banner' className='h-[7vw]' src='https://icon-library.com/images/integrity-icon/integrity-icon-21.jpg'></img>
        </div>
      </div>

      <div className='h-[3px] rounded-xl w-full relative mt-14 left-1/2 -translate-x-1/2 bg-zinc-500'>
      </div>
    </div>
  )
}

export default Page2