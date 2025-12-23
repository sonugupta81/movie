import React from 'react'
import { Search } from 'lucide-react';
import { BsBackspace } from "react-icons/bs";
import Link from 'next/link';

const navbar =()=> {
  
  return (
    <>
    <div className='md:px-80 pt-10 pb-5 bg-blue-300  flex justify-center gap-50 md:gap-4 items-center md:gap-25'>
      <p className='font-bold text-xl text-teal-900'>Movie<span className='text-red-500'>Hub</span></p>
      <div className='flex md:gap-15 hidden md:flex'>
        <p className='hover:cursor-pointer   font-bold text-lg '>
         Home
        </p>
        <p className='hover:cursor-pointer  font-bold text-lg '>
         Movie
        </p>
        <p className='hover:cursor-pointer  font-bold text-lg '>
         Series
        </p>
        <p className='hover:cursor-pointer  font-bold text-lg '>
         Anime
        </p>

      </div>
      <div>
        <Search color='black' className='hover:cursor-pointer'/>
        
      </div>
    </div>
    </>
  );
}
export default navbar;