import Link from 'next/link';
import React from 'react';
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {
  return (
    <header>
      <nav className="flex flex-wrap justify-between items-center px-6 py-3 bg-gradient-to-r from-black via-red-950 to-black w-full">
        {/* Logo */}
        <div className="text-red-600 text-4xl font-semibold">
   NETFLIX
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 ml-24 text-lg font-bold">
          <li>
            <Link href="/" className="text-white hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/webseries" className="text-white hover:text-red-600">
              Web Series
            </Link>
          </li>
          <li>
            <Link href="/movies" className="text-white hover:text-red-600">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/subscription" className="text-white hover:text-red-600">
              Subscription
            </Link>
          </li>
          <li>
            <Link href="/commentbox" className="text-white hover:text-red-600">
              Comment 
            </Link>
          </li>
        </ul>

    
        <div className="flex items-center bg-transparent to-black border border-white hover:border-red-600 text-white px-3 py-1 rounded-lg w-64 md:w-80">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full px-2"
          />
          <FaSearch className="text-gray-400 hover:text-red-600 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;





