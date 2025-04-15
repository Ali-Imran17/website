'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex flex-wrap justify-between items-center px-4 py-3 bg-gradient-to-r from-black via-red-950 to-black w-full shadow-md">
      
     <Link href='/'  > <div className="text-red-600 text-3xl font-bold">NETFLIX</div></Link>

    
        <div className="md:hidden text-white text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row gap-6 md:gap-8 md:items-center text-lg font-bold text-white w-full md:w-auto mt-4 md:mt-0`}
        >
          <li>
            <Link href="/" className="hover:text-red-600 block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/webseries" className="hover:text-red-600 block">
              Web Series
            </Link>
          </li>
          <li>
            <Link href="/movies" className="hover:text-red-600 block">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/subscription" className="hover:text-red-600 block">
              Subscription
            </Link>
          </li>
          <li>
            <Link href="/commentbox" className="hover:text-red-600 block">
              Comment
            </Link>
          </li>
        </ul>

  
     
       
      </nav>

    

      
    </header>
  );
};

export default Navbar;

