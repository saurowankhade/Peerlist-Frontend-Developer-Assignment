'use client';
import React from 'react'
import Header from '../src/Components/Header'

const page = () => {
  return (
     <div className="w-full items-center flex flex-col justify-center h-screen">
          <div className="lg:w-[640px] w-full flex flex-col border-[1px] relative h-full">
            {/*  Header */}
    
            <Header readOnly={true} />
    
            {/* Body */}
            <div className="overflow-y-auto scroll-smooth scrollbar-hide mt-10 sm:mb-12 mb-16 h-fit">
              <div className=' mt-4 md:mt-0 p-2 sm:p-12'>
                {/* Form Inputs  */}

                <div className='gap-1.5 flex flex-col mb-[27px]'>
                    <div className='font-[600] text-sm text-[#0D0D0D] '>Link to your Portfolio</div>

                        <input type={'text'} className={` shadow-input text-left p-2  w-full border h-[32px] rounded-[8px] gap-1  focus:ring-0 focus:outline-none bg-[#fff]`}  />
                    
                </div>

                
    
                {/* Submit button */}

            <div className='w-full mt-[24px] flex flex-col justify-end items-end'>
              <button  className={` custom-shadow-add-que cursor-pointer flex items-center justify-end  gap-[4px] border-1 pt-[6px] pr-[16px] pb-[6px] pl-[14px] rounded-[12px]  bg-[#00AA45] border-[#1E874B] text-[#FFFFFF]`}>

                <span className=' text-sm text-[##0D0D0D] font-[600] '>Save</span>
              </button>

            </div>
                
              </div>
            </div>
    
    
          </div>
        </div>
  )
}

export default page
