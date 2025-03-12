'use client';

import React, { useEffect, useRef,useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import AddQuestionDropdown from './AddQuestionDropdown';
import { InputType } from './InputType';

const HomePage = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [isShowQuestionType,setIsShowQuestionType] = useState(false);

  const dropdownRef = useRef(null);

  const [data,setData] = useState([]);

  const questionTypeName = {
    'Short answer':'text',
    'Long answer' : 'textarea',
    'Single select' : 'radio',
    'URL' : 'uri',
    'Date' : 'date',
  }

  // questionTypeDropDown un-visible on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsShowQuestionType(false); 
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(()=>{
    setIsDisable(data.length <= 0)
  },[data])
  const click = (e)=>{
    console.log(e.target.innerText);
    
    setData([...data, <InputType type={questionTypeName?.[e.target.innerText]} />])
  }


  return (
    <div className="w-full items-center flex flex-col justify-center h-screen">
      <div className="lg:w-[640px] w-full flex flex-col border-[1px] relative h-full">
        {/*  Header */}

        <Header isDisable={isDisable} setIsDisable={setIsDisable} />

        {/* Body */}
        <div className="overflow-y-auto scroll-smooth scrollbar-hide mt-10 sm:mb-12 mb-16 h-fit">
          <div className=' mt-4 md:mt-0 p-2 sm:p-12'>
            {/* Form Inputs  */}
            <div className=''>
              {
                data.map((Compo,index)=>(
                 <div key={index}>
                  {Compo}
                 </div>
                ))
              }
            </div>
            {/* Add Form Type Button */}
            <div className='w-full mt-[24px] flex flex-col justify-center items-center'>
              <button onClick={
                ()=>{setIsShowQuestionType(!isShowQuestionType)}
              } className={` custom-shadow-add-que cursor-pointer flex items-center justify-center  gap-[4px] border-1 pt-[6px] pr-[16px] pb-[6px] pl-[14px] rounded-[12px]  `}>
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.83337 7.99992H8.50004M13.1667 7.99992H8.50004M8.50004 7.99992V3.33325M8.50004 7.99992V12.6666"
                    stroke="#24292E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>



                <span className=' text-sm text-[##0D0D0D] font-[600] '>Add Question</span>
              </button>

              {
                isShowQuestionType && (
                 <AddQuestionDropdown click={click} setIsShowQuestionType={setIsShowQuestionType} dropdownRef={dropdownRef} /> 
                )
              }

            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer isDisable={isDisable} setIsDisable={setIsDisable} />

      </div>
    </div>
  )
}

export default HomePage
