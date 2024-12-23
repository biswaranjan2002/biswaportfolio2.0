import React, { useEffect, useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Page1() {

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)

    const mouseMoving = (e) => {
          setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/60);
          setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10);
    }

    useGSAP(function(){
        gsap.to(tiltRef.current,{
            transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 3,
            ease: 'power4.out'
        })
    },[xVal,yVal])

  return (
    <div id='Page1' onMouseMove={(e)=>{
      mouseMoving(e) 
      }} className='h-screen bg-white p-4'>
      <div 
        id='page1-in' 
        className='h-full w-full shadow-xl px-10 shadow-zinc-600 rounded-[40px] bg-cover' 
        style={{ backgroundImage: `url('./public/images/bg1.jpg')` }}
      >

        <img className='h-[150px] inline-block mt-3' src='https://biswaranjan2002.netlify.app/images/bslogo.png'></img>
        
        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  )
}

export default Page1