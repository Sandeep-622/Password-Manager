import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 flex items-center px-5 h-14 text-white'>
      <div className='container mx-auto px-40 flex justify-between'>
        <div className='font-bold logo text-2xl '>
          <span className='text-green-600'>&lt;</span>
          Pass
          <span className='text-green-600'>OP/ &gt;</span>
        </div>
        <ul className='flex gap-3 justify-center'>
          <li>
            <a className='hover:font-bold' href="/">Home</a>
          </li>
          <li>
            <a className='hover:font-bold' href="#">About</a>
          </li>
          <li>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul>
        <div>
          <button>Github</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
