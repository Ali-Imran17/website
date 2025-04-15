'use client'
import Image from 'next/image';
import { useState } from 'react';

export default function Webseries() {
  // Data for the products
  const products = [
    { id: 1, title:  'crime action', department: 'Money Hiest', price: '4.5      /     ',price2:' 5' , image:'/money hiest.jpg'},
    { id: 2, title: 'crime action', department: 'Aranyak', price: '4.8      /      ',price2:' 5' ,image:'/aranyak.jpg'},
    { id: 3, title: 'crime action', department: 'Bard Of Blood', price: '5       /     ',price2:' 5',image:'/bard of blood.webp' },
    { id: 4, title: ' action', department: 'Betaal', price: '2.5       /      ',price2:' 5' ,image:'/betaal.jpg'},
    { id: 5, title: 'crime action', department: 'Money Hiest S2', price: '4.2       /     ',price2:' 5',image:'/mh2.jpg' },
    { id: 6, title: 'action horror', department: 'Stranger Things', price: '3.8       /      ',price2:' 5' ,image:'/stranger things.jpg'},
    { id: 7, title: 'action adventure', department: 'Game Of Thrones', price: '4.8       /     ',price2:' 5' ,image:'/game of thrones.webp'},
    { id: 8, title: 'action crime', department: 'Kaala Pani', price: '2.9       /     ',price2:' 5' ,image:'/kaala paani.jpg'},
    { id: 9, title: 'action', department: 'Kimmi San', price: '4.7     /      ',price2:' 5' ,image:'/kimmi san.png'},
    { id: 10, title: 'drama', department: 'Mai', price: '4.8      /     ',price2:' 5' ,image:'/mai.webp'},
    { id: 11, title: 'action crime', department: 'Mirzapur', price: '5      /     ',price2:' 5' ,image:'/mirzapur.jpg'},
    { id: 12, title: 'crime drama', department: 'Scam 1992', price: '4       /     ',price2:' 5' ,image:'/scam 1992.jpg'},
    { id: 13, title: 'fantasy ', department: 'Squid Game', price: '4.9       /      ',price2:' 5' ,image:'/squid.jpg'},
    { id: 14, title: 'action crime', department: 'Taaza Khabar', price: '3.8      /     ',price2:' 5' ,image:'/taaza khabar.jpg'},
    { id: 15, title: 'action crime', department: 'Farzi', price: '4.1      /     ',price2:' 5' ,image:'/farzi.jpg'},
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
    <div className="container mx-auto px-4 py-6  ">

<h1 className="text-xl text-white  text-center mb-2">Featured Webseries</h1>
      <h1 className="text-3xl text-red-600 font-bold text-center mb-10">Premium Webseries</h1>
      
      
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
