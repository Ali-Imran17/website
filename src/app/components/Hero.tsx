'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const products = [
    { id: 1, title:  'action fantasy', department: 'Avengers Endgame', price: '4.5 /', price2: '5', image: '/avengers.jpg' },
    { id: 2, title: 'action adventure', department: 'Adam Project', price: '3.8 /', price2: '5', image: '/adam project.jpeg' },
    { id: 3, title: 'action', department: 'Bright', price: '4.8 /', price2: '5', image: '/bright.jpg' },
    { id: 4, title: 'action fantasy', department: 'Captain America Brave New World', price: '5 /', price2: '5', image: '/captain america.jpg' },
    { id: 5, title: 'action ', department: 'Carry On', price: '4.9 /', price2: '5', image: '/carryon.jpg' },
    { id: 6, title: 'horror', department: 'Dark', price: '2.4 /', price2: '5', image: '/dark.webp' },
    { id: 7, title: 'action', department: 'K.G.F Chapter 1', price: '4.5 /', price2: '5', image: '/kgf.jpg' },
    { id: 8, title: 'adventure sci fi', department: 'Extinction', price: '4.7 /', price2: '5', image: '/extinction.avif' },
    { id: 9, title: 'horror drama', department: 'Ghoul', price: '4.8 /', price2: '5', image: '/ghoul.jpg' },
    { id: 10, title: 'action fantasy', department: 'Justice League', price: '5 /', price2: '5', image: '/justice league.jpg' },
    { id: 11, title: 'action', department: 'Gray Man', price: '2.9 /', price2: '5', image: '/grayman.webp' },
    { id: 12, title: 'action mystery', department: 'Leo', price: '3.8 /', price2: '5', image: '/leo.webp' },
    { id: 13, title: 'action', department: 'Troll', price: '4.6 /', price2: '5', image: '/troll.jpg' },
    { id: 14, title: 'action fantasy', department: 'Venom The Last Dance', price: '4.2 /', price2: '5', image: '/venom.jpg' },
    { id: 15, title: 'horror', department: 'The Conjuring', price: '5 /', price2: '5', image: '/conjuring.jpeg' },
    { id: 16, title: 'crime action', department: 'Money Hiest', price: '4.5 /', price2: '5', image: '/money hiest.jpg' },
    { id: 17, title: 'crime action', department: 'Aranyak', price: '4.8 /', price2: '5', image: '/aranyak.jpg' },
    { id: 18, title: 'crime action', department: 'Bard Of Blood', price: '5 /', price2: '5', image: '/bard of blood.webp' },
    { id: 19, title: 'action', department: 'Betaal', price: '2.5 /', price2: '5', image: '/betaal.jpg' },
    { id: 20, title: 'crime action', department: 'Money Hiest S2', price: '4.2 /', price2: '5', image: '/mh2.jpg' },
    { id: 21, title: 'action horror', department: 'Stranger Things', price: '3.8 /', price2: '5', image: '/stranger things.jpg' },
    { id: 22, title: 'action adventure', department: 'Game Of Thrones', price: '4.8 /', price2: '5', image: '/game of thrones.webp' },
    { id: 23, title: 'action crime', department: 'Kaala Pani', price: '2.9 /', price2: '5', image: '/kaala paani.jpg' },
    { id: 24, title: 'action', department: 'Kimmi San', price: '4.7 /', price2: '5', image: '/kimmi san.png' },
    { id: 25, title: 'drama', department: 'Mai', price: '4.8 /', price2: '5', image: '/mai.webp' },
    { id: 26, title: 'action crime', department: 'Mirzapur', price: '5 /', price2: '5', image: '/mirzapur.jpg' },
    { id: 27, title: 'crime drama', department: 'Scam 1992', price: '4 /', price2: '5', image: '/scam 1992.jpg' },
    { id: 28, title: 'fantasy ', department: 'Squid Game', price: '4.9 /', price2: '5', image: '/squid.jpg' },
    { id: 29, title: 'action crime', department: 'Taaza Khabar', price: '3.8 /', price2: '5', image: '/taaza khabar.jpg' },
    { id: 30, title: 'action crime', department: 'Farzi', price: '4.1 /', price2: '5', image: '/farzi.jpg' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="bg-gradient-to-r from-black via-red-950 to-black">
      <div className="text-center w-full bg-gradient-to-r from-black via-red-950 to-black">
        <h1 className="text-red-950 text-3xl font-semibold">.</h1>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mt-28 font-bold">
          Unlimited movies,<br /> TV shows, and more
        </h2>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6">
        <h1 className="text-xl text-white text-center mb-11 mt-2">
          Starts at Rs 250. Cancel anytime.
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="border hover:border-red-900 rounded-xl p-4 hover:shadow-red-900 hover:shadow-lg transition-shadow"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="border border-gray-700 rounded-md w-full h-64 object-cover"
              />
              <h3 className="font-bold text-red-600 mt-3 text-center">{product.title}</h3>
              <p className="text-white text-lg mb-2 text-center">{product.department}</p>
              <div className="flex gap-1 justify-center h-12">
                <p className="text-green-500 font-bold">{product.price}</p>
                <p className="text-green-500 font-bold">{product.price2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

