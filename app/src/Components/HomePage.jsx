import React from 'react'
import Footer from './Footer';
const HomePage = () => {
  return (
    <div className="w-full items-center flex flex-col justify-center h-screen">
    <div className="lg:w-[640px] w-full flex flex-col border-[1px] relative h-full">
      {/*  Header */}
      <div className="p-4 h-[56px] border-b w-full fixed top-0 lg:w-[640px]">
       
      </div>
  
      {/* Body */}
      <div className="overflow-y-auto scrollbar-hide mt-16 mb-12 h-fit">
        
      </div>
  
      {/* Footer */}
      <Footer />
      
    </div>
  </div>
  )
}

export default HomePage
