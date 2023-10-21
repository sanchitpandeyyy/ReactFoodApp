import React from 'react'
import { BiSearchAlt} from 'react-icons/bi';

const Button = () => {
  return (
    <div>
    <div className='flex justify-around'>
        <button className='border-2 border-blue-300 bg-yellow-500 p-4 hover:bg-yellow-300 font-black rounded-3xl mt-5'>Breakfast</button>
        <button className='border-2 border-blue-300 bg-yellow-500 p-4 hover:bg-yellow-300 font-black rounded-3xl mt-5'>Lunch</button>
        <button className='border-2 border-blue-300 bg-yellow-500 p-4 hover:bg-yellow-300 font-black rounded-3xl mt-5'>Dinner</button>
        <button className='border-2 border-blue-300 bg-yellow-500 p-4 hover:bg-yellow-300 font-black rounded-3xl mt-5'> All </button>
    </div>
    <div className='flex items-center'>
    <input type='search' placeholder='Search Here' className=' text-center border-2 border-cyan-300 rounded m-4 w-full h-10'/> <span className='bg-yellow-400 rounded-full p-4 cursor-pointer'> <BiSearchAlt/></span>
    
    </div>
    </div>
  )
}

export default Button