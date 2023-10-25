import React from 'react'
import slider1 from '../img/slider1.webp';
import slider2 from '../img/slider2.webp';
import slider3 from '../img/slider3.webp';
import img4 from '../img/burger.jpg';

const Home = () => {
  return (
    <div className='p-10'>

<div id="default-carousel" className="relative w-full bg-blue-500 " data-carousel="slide">
    
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
         
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={slider1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
        </div>
   
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={slider2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src={slider3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
        </div>
    </div>

    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
  
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"  fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"  fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>


<div className="flex justify-around">

<div class="w-1/4 mt-10 p-4 flex justify-center items-center flex-col rounded-lg shadow bg-yellow-500">
    <a href="#">
       <img src={img4} alt='' className='rounded-3xl p-5 h-52 '/>
    </a>
    <p class="mb-3 font-normal text-white text-center">Latte Baa Ko Burger</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add To Cart
      
    </a>
</div>

<div class="w-1/4 mt-10 p-4 flex justify-center items-center flex-col rounded-lg shadow bg-yellow-500">
    <a href="#">
       <img src={img4} alt='' className='rounded-3xl p-5 h-52 '/>
    </a>
    <p class="mb-3 font-normal text-white text-center">Latte Baa Ko Burger</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add To Cart
      
    </a>
</div>

<div class="w-1/4 mt-10 p-4 flex justify-center items-center flex-col rounded-lg shadow bg-yellow-500">
    <a href="#">
       <img src={img4} alt='' className='rounded-3xl p-5 h-52 '/>
    </a>
    <p class="mb-3 font-normal text-white text-center">Latte Baa Ko Burger</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add To Cart
      
    </a>
</div>


</div>

    </div>
  )
}

export default Home