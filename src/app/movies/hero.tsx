'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Movies() {
  const products = [
    { id: 1, title: 'action fantasy', department: 'Avengers Endgame', price: '4.5', price2: '5', image: '/avengers.jpg' },
    { id: 2, title: 'action adventure', department: 'Adam Project', price: '3.8', price2: '5', image: '/adam project.jpeg' },
    { id: 3, title: 'action', department: 'Bright', price: '4.8', price2: '5', image: '/bright.jpg' },
    { id: 4, title: 'action fantasy', department: 'Captain America Brave New World', price: '5', price2: '5', image: '/captain america.jpg' },
    { id: 5, title: 'action', department: 'Carry On', price: '4.9', price2: '5', image: '/carryon.jpg' },
    { id: 6, title: 'horror', department: 'Dark', price: '2.4', price2: '5', image: '/dark.webp' },
    { id: 7, title: 'action', department: 'K.G.F Chapter 1', price: '4.5', price2: '5', image: '/kgf.jpg' },
    { id: 8, title: 'adventure sci-fi', department: 'Extinction', price: '4.7', price2: '5', image: '/extinction.avif' },
    { id: 9, title: 'horror drama', department: 'Ghoul', price: '4.8', price2: '5', image: '/ghoul.jpg' },
    { id: 10, title: 'action fantasy', department: 'Justice League', price: '5', price2: '5', image: '/justice league.jpg' },
    { id: 11, title: 'action', department: 'Gray Man', price: '2.9', price2: '5', image: '/grayman.webp' },
    { id: 12, title: 'action mystery', department: 'Leo', price: '3.8', price2: '5', image: '/leo.webp' },
    { id: 13, title: 'action', department: 'Troll', price: '4.6', price2: '5', image: '/troll.jpg' },
    { id: 14, title: 'action fantasy', department: 'Venom The Last Dance', price: '4.2', price2: '5', image: '/venom.jpg' },
    { id: 15, title: 'horror', department: 'The Conjuring', price: '5', price2: '5', image: '/conjuring.jpeg' },
  ];

  const [currentPage] = useState(1);
  const itemsPerPage = 15;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-black via-red-950 to-black px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-xl text-center">Featured Movies</h2>
        <h1 className="text-4xl font-bold text-red-600 text-center mb-12">Premium Movies</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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
                className="w-full h-64 object-cover rounded-md mb-4 border border-gray-800"
              />
              <h3 className="text-red-600 font-bold text-center capitalize">{product.title}</h3>
              <p className="text-white text-center text-lg mt-1">{product.department}</p>
              <div className="flex justify-center items-center gap-1 mt-2">
                <span className="text-green-500 font-semibold">{product.price}</span>
                <span className="text-green-500 font-semibold">/ {product.price2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
