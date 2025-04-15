'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function Movies() {
  
  const products = [
    { id: 1, title:  'action fantasy', department: 'Avengers Endgame', price: '4.5      /     ',price2:' 5' , image:'/avengers.jpg'},
    { id: 2, title: 'action adventure', department: 'Adam Project', price: '3.8       /      ',price2:' 5' ,image:'/adam project.jpeg'},
    { id: 3, title: 'action', department: 'Bright', price: '4.8       /     ',price2:' 5',image:'/bright.jpg' },
    { id: 4, title: 'action fantasy', department: 'Captain America Brave New World', price: '5      /      ',price2:' 5' ,image:'/captain america.jpg'},
    { id: 5, title: 'action ', department: 'Carry On', price: '4.9       /     ',price2:' 5',image:'/carryon.jpg' },
    { id: 6, title: 'horror', department: 'Dark', price: '2.4      /      ',price2:' 5' ,image:'/dark.webp'},
    { id: 7, title: 'action', department: 'K.G.F Chapter 1', price: '4.5      /     ',price2:' 5' ,image:'/kgf.jpg'},
    { id: 8, title: 'adventure sci fi', department: 'Extinction', price: '4.7      /     ',price2:' 5' ,image:'/extinction.avif'},
    { id: 9, title: 'horror drama', department: 'Ghoul', price: '4.8       /      ',price2:' 5' ,image:'/ghoul.jpg'},
    { id: 10, title: 'action fantasy', department: 'Justice League', price: '5      /     ',price2:' 5' ,image:'/justice league.jpg'},
    { id: 11, title: 'action', department: 'Gray Man', price: '2.9     /     ',price2:' 5' ,image:'/grayman.webp'},
    { id: 12, title: 'action mystery', department: 'Leo', price: '3.8      /     ',price2:' 5' ,image:'/leo.webp'},
    { id: 13, title: 'action', department: 'Troll', price: '4.6       /      ',price2:' 5' ,image:'/troll.jpg'},
    { id: 14, title: 'action fantasy', department: 'Venom The Last Dance', price: '4.2      /     ',price2:' 5' ,image:'/venom.jpg'},
    { id: 15, title: 'horror', department: 'The Conjuring', price: '5      /     ',price2:' 5' ,image:'/conjuring.jpeg'},
  ];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // Calculate pagination indices
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  // Total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className='bg-gradient-to-r from-black via-red-950 to-black '>
    <div className="container mx-auto px-4 py-6 w-screen h-full  ">

      <h1 className="text-xl text-white  text-center mb-2">Featured Movies</h1>
      <h1 className="text-3xl text-red-600 font-bold text-center mb-10">Premium Movies</h1>
      
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 cursor-pointer md:grid-cols-3 lg:grid-cols-5 gap-10">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="border hover:border-red-500 rounded-xl p-4 hover:shadow-red-600 hover:shadow-lg transition-shadow"
          >
             <Image
        src={product.image}
        alt={product.title}
        width={300} // Width of the image
        height={300} // Height of the image
        className="border border-gray-700 rounded-md"
      />
      <h3 className=" font-bold text-red-600 mt-3 text-center">{product.title}</h3>
      <p className="text-white text-lg mb-2 text-center">{product.department}</p>
      <div className='text-center flex gap-1 justify-center h-12'>  <p className="text-green-500 font-bold text-center ">{product.price} </p> 
      <p className="text-green-500 font-bold text-center ">{product.price2} </p> 
       </div>

            
       
            
          </div>
          
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-2">
       
       
       
      </div>
    </div>
  </div>
  );
}