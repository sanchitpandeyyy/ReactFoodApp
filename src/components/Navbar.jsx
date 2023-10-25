import React from 'react'
import Logo from '../img/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-24 bg-yellow-500'>
       <img src={Logo} alt='' className='w-20 h-20'/>
       <div className='flex justify-around w-full font-semibold'>
         <Link to={'/'}>Home</Link>
         <Link to={'/about'}>About</Link>
         <Link to={'/contact'}>Contact</Link>
         <Link to={'/cart'}>Cart</Link>
       </div>
    </div>
  )
}

export default Navbar