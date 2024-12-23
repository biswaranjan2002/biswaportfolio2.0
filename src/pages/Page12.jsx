import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-scroll';

const Page12 = () => {
  
  return (
    <div id='Page12' className='h-screen relative -mt-[8vw] p-6 bg-white'>
      <div className='h-full w-full overflow-hidden bg-black rounded-[50px]'>
        <video autoPlay="true" loop muted className='h-full w-full object-cover' src='./videos/space1.mp4'></video>
        <h1 className='font-[enzo4] text-[15vw] ml-6 absolute top-[3vw] uppercase leading-none'>contact</h1>
        <div className='ml-7 absolute bg-zinc-300 h-[4px] rounded-full w-[16vw] top-[16.5vw]'></div>
        <div>
          <i className="ri-phone-line text-[2vw] text-yellow-100 top-[23.5vw] ml-6 absolute"></i>
          <h1 className='font-[enzo1] text-[2vw] ml-14 absolute top-[24vw] uppercase leading-none'>+91 94392 03705</h1>
        </div>
        <div>
          <i className="ri-mail-send-line text-[2vw] text-yellow-100 top-[26vw] ml-6 absolute"></i>
          <h1 className='font-[enzo1] text-[2vw] ml-16 absolute top-[26.5vw] leading-none'>biswaranjan4864@gmail.com</h1>
        </div>
        <div>
          <i className="ri-linkedin-box-fill text-[2vw] text-yellow-100 top-[28.5vw] ml-6 absolute"></i>
          <a className='font-[enzo1] text-[2vw] ml-16 absolute top-[29vw] leading-none ' href='https://www.linkedin.com/in/biswaranjan-sahoo3705/'>LinkedIn</a>
        </div>
        <div>
          <i className="ri-github-fill text-[2vw] text-yellow-100 top-[31vw] ml-6 absolute"></i>
          <a className='font-[enzo1] text-[2vw] ml-16 absolute top-[31.5vw] leading-none ' href='https://github.com/biswaranjan2002'>Github</a>
        </div>
        <div>
          <h1 className='font-[enzo2] text-[2vw] ml-6 absolute bottom-[6.5vw] leading-none'>IT IS NOT JUST ABOUT SOLVING THE PROBLEM
          </h1>
          <h1 className='font-[enzo2] text-[2vw] ml-6 absolute bottom-[4vw] leading-none'>BUT <span className='font-[enzo1]'>OFFERING THE TRANSFORMATION!</span></h1>
          <img className='top-[3vw] absolute right-[2.95vw] h-[10vw]' src='https://biswaranjan2002.netlify.app/images/bslogo.png'></img>
        </div>
        <Link to="Page1" smooth={true} duration={500}>
          <div className='bg-white absolute bottom-[3.5vw] bg-opacity-50 right-[4vw] w-[30vh] h-[8vh] rounded-xl border-[3px] hover:bg-zinc-700 border-black flex justify-center items-center'>
            <button className='text-black font-bold text-[1.85vw] font-[enzo1]'>Back to Top</button>
            <i className="ri-arrow-up-circle-line text-orange-200 text-[2.3vw]"></i>
          </div>
        </Link>      
      </div>
    </div>
  )
}

export default Page12