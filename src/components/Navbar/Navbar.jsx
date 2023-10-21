import React from 'react'
import Logo from '../../img/Logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className='h-20 w-screen py-4 px-8 flex  justify-between items-center sticky top-0 z-10 bg-yellow-500'>
       <img src={Logo} alt='' className='w-20 h-20'/>
       <div className='flex justify-around w-full font-semibold'>
         <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-100} duration={500}   className='cursor-pointer'>Home</Link>
         <Link className='cursor-pointer'>About</Link>
         <Link className='cursor-pointer'>Contact</Link>
         <Link className='cursor-pointer'>Cart</Link>
       </div>
    </div>
  )
}

export default Navbar