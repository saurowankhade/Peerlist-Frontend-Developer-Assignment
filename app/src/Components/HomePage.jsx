'use client';

import React from 'react'
import Footer from './Footer';
import Header from './Header';


import  { useState } from 'react'
const HomePage = () => {
  
  const [isDisable,setIsDisable] = useState(true);
  return (
    <div className="w-full items-center flex flex-col justify-center h-screen">
    <div className="lg:w-[640px] w-full flex flex-col border-[1px] relative h-full">
      {/*  Header */}

      <Header isDisable={isDisable} setIsDisable={setIsDisable} />
  
      {/* Body */}
      <div className="overflow-y-auto scrollbar-hide mt-16 mb-12 h-fit">
        
      </div>
  
      {/* Footer */}
      <Footer  isDisable={isDisable} setIsDisable={setIsDisable} />
      
    </div>
  </div>
  )
}

export default HomePage
