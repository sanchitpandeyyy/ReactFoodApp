import React, { useState } from 'react'
import Card from '../components/Card';
import FoodData from '../data/FoodData';
import Slider from './Slider';


const Home = () => {
    const [datas, setDatas] = useState(FoodData)
    
 const [search,setSearch] = useState('');
 console.log(search);
    
    return (
       
<div className='p-10 dark:bg-gray-800'>
   
   <Slider/>

        <form className=' mt-4'>   

     <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round"  stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={(e)=> setSearch(e.target.value)} type="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  " placeholder="Search Here" />
        
      </div>
     </form>


            <div className="flex justify-center flex-wrap gap-6 w-[90%] m-auto mt-8">
                {
                    datas.filter((data)=> {
                      return search.toLowerCase() === ''
                      ? data
                      : data.name.toLowerCase().includes(search)

                    }).map((data) => (
                        <Card key={data.name}
                            id={data.id}
                            title={data.name}
                            price={data.price}
                            img={data.img}
    
                        />

                    ))
                }
            </div>


        </div>
    )
}


export default Home