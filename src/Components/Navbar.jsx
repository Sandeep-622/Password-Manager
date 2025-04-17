import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-400 flex items-center justify-between px-5 h-14'>
      <div className='font-bold logo'>PassOP</div>
      <ul className='flex gap-3'>
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
    </nav>
  )
}

export default Navbar
