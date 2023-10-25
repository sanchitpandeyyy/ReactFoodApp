import React from 'react'

function Card({img,title,price,id,desc}) {
  return (
    <div className="flex flex-col justify-between w-60 border border-gray-200 rounded-lg shadow-2xl bg-yellow-500" id={id}>
    <a href="#">
        <img className=" p-2 h-60 w-60 rounded-2xl" src={img} alt="product image" />
    </a>
    <div className="p-4">
        <a href="#" className='flex justify-between flex-col'>
            <h5 className="text-base font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <span className="font-extrabold text-red-900 dark:text-white">Rs {price}</span>
        </a>
        
        <div className="flex flex-col items-left justify-between">
            
            <a href="#" className="mt-3 w-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
  )
}

export default Card
