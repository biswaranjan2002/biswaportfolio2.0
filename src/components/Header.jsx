import React from 'react'
import { Link } from 'react-scroll';

function Header() {
  return (
    <div className='absolute w-full flex items-center justify-end z-10 p-20'>
      <Link to="Page12" smooth={true} duration={500}>
        <button className='bg-zinc-900 bg-opacity-60 border-4 text-white text-2xl px-6 py-1 hover:bg-gray-500 rounded-full'>
          Hire Me
        </button>
      </Link>
    </div>
  )
}

export default Header
