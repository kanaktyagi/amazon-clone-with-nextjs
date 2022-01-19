import React from 'react';
import Header from '../components/Header';

export default function Checkout() {
  return(
       <div className='bg-gray-100'>
       <Header/>
       <main className='lg:flex max-w-screen-2xl mx-auto'>
       {/* Left */}
       <div className='flex-grow m-5 shadow-sm'>
       <Image
       src="http://links.papareact.com/ikj"
       width={1020}
       height={250}
       alt="image"
       objectFit="contain"
       />
       </div>
       {/*right*/}
       <div>
       </div>
       </main>
       </div>
       )
}
