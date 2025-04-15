'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Webseries() {
  const products = [
    { id: 1, title: 'crime action', department: 'Money Heist', price: '4.5', price2: '5', image: '/money hiest.jpg' },
    { id: 2, title: 'crime action', department: 'Aranyak', price: '4.8', price2: '5', image: '/aranyak.jpg' },
    { id: 3, title: 'crime action', department: 'Bard Of Blood', price: '5', price2: '5', image: '/bard of blood.webp' },
    { id: 4, title: 'action', department: 'Betaal', price: '2.5', price2: '5', image: '/betaal.jpg' },
    { id: 5, title: 'crime action', department: 'Money Heist S2', price: '4.2', price2: '5', image: '/mh2.jpg' },
    { id: 6, title: 'action horror', department: 'Stranger Things', price: '3.8', price2: '5', image: '/stranger things.jpg' },
    { id: 7, title: 'action adventure', department: 'Game Of Thrones', price: '4.8', price2: '5', image: '/game of thrones.webp' },
    { id: 8, title: 'action crime', department: 'Kaala Pani', price: '2.9', price2: '5', image: '/kaala paani.jpg' },
    { id: 9, title: 'action', department: 'Kimmi San', price: '4.7', price2: '5', image: '/kimmi san.png' },
    { id: 10, title: 'drama', department: 'Mai', price: '4.8', price2: '5', image: '/mai.webp' },
    { id: 11, title: 'action crime', department: 'Mirzapur', price: '5', price2: '5', image: '/mirzapur.jpg' },
    { id: 12, title: 'crime drama', department: 'Scam 1992', price: '4', price2: '5', image: '/scam 1992.jpg' },
    { id: 13, title: 'fantasy', department: 'Squid Game', price: '4.9', price2: '5', image: '/squid.jpg' },
    { id: 14, title: 'action crime', department: 'Taaza Khabar', price: '3.8', price2: '5', image: '/taaza khabar.jpg' },
    { id: 15, title: 'action crime', department: 'Farzi', price: '4.1', price2: '5', image: '/farzi.jpg' },
  ];

  const [currentPage] = useState(1);
  const itemsPerPage = 15;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  return (
    <div className="bg-gradient-to-r from-black via-red-950 to-black w-full min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-xl text-center">Featured Webseries</h2>
        <h1 className="text-4xl font-bold text-red-600 text-center mb-12">Premium Webseries</h1>

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
