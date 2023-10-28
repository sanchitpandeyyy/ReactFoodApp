import React from 'react'
import Popup from './Popup';

function Card({img,title,price,id}) {


  return (
    <div  className="cursor-pointer flex flex-col justify-between w-60 border  rounded-2xl shadow-2xl bg-[#1C2C59] " id={id}>
    <a>
        <img className=" p-2 h-60 w-60 rounded-2xl" src={img} alt="product image" />
    </a>
    <div className="p-4">
        <a className='cursor-pointer flex justify-between flex-col '>
            <h5 className="text-base font-black tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <span className="font-extrabold text-sm mt-3 mb-3 text-red-900 dark:text-white">Rs {price}</span>
        </a>
        
        <div className="flex flex-col items-left justify-between">
        <Popup/>     
        </div>

    </div>
</div>
  )
}

export default Card
