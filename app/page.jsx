import React from 'react'
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Link from 'next/link.js';



export default function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      
    </div>
  );
}
