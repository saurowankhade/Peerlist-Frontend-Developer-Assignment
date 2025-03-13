'use client';
import React from 'react'
import Header from '../src/Components/Header'
import Footer from '../src/Components/Footer'

const page = () => {
  return (
     <div className="w-full items-center flex flex-col justify-center h-screen">
          <div className="lg:w-[640px] w-full flex flex-col border-[1px] relative h-full">
            {/*  Header */}
    
            <Header />
    
            {/* Body */}
            <div className="overflow-y-auto scroll-smooth scrollbar-hide mt-10 sm:mb-12 mb-16 h-fit">
              <div className=' mt-4 md:mt-0 p-2 sm:p-12'>
                {/* Form Inputs  */}

                <div className='gap-1.5 flex flex-col mb-[27px]'>
                    <div className='font-[600] text-sm text-[#0D0D0D] '>Link to your Portfolio</div>

                        <input type={'text'} className={` shadow-input text-left p-2  w-full border h-[32px] rounded-[8px] gap-1  focus:ring-0 focus:outline-none bg-[#fff]`}  />
                    
                </div>

                
    
                {/* Submit button */}

                
                
              </div>
            </div>
    
            {/* Footer */}
            <Footer />
    
          </div>
        </div>
  )
}

export default page
