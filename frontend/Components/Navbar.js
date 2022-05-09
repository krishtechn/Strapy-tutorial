import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '../styles/Home.module.css';


const Navbar = ({title}) => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     <img src="./store.svg" alt="" width={40}/>
      <span className="ml-3 text-xl">{title}</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mx-3">
      <Link className='link' href='./Home'>Home</Link>
      <Link className='link' href='./About'>About</Link>
      <Link className='link' href='./Products'>Products</Link>
      <Link className='link' href='./Services'>Services</Link>
      <Link className='link' href='./Contact'>Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 bg-orange-400 text-white text-xl focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Register
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Navbar