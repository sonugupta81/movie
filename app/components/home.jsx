import React from 'react'
import { Search } from 'lucide-react';


const home =()=> {
  return (
    <div className='flex min:h-screen w-screen item-center justify-center pt-8 md:pt-40 bg-blue-300 pb-10 px-4 '>
      <div className='flex  w-90 md:w-300 rounded-full bg-white '>
        <input type="text" placeholder='Search for movies, series, anime...' className='w-full border-none bg-transparent px-4 py-1 text-gray-500 outline-none'/>
        <button className='m-3 rounded-4xl bg-teal-800 px-4 md:px-8 md:py-4 py-2 text-white hover:bg-teal-700 hover:cursor-pointer flex gap-2'><Search/>Search</button>
      </div>
    </div>
    
  )
} 
export default home;
