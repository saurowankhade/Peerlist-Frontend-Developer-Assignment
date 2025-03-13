'use client';
import React, { useRef, useState } from 'react'
import Header from '../src/Components/Header'
import { useSelector } from 'react-redux';

const page = () => {
     const [selectedDate, setSelectedDate] = useState("");
     const dateInputRef = useRef(null);
     
    //  redux data
     const reduxData = useSelector((state) => state.input.data);
     
     const handleDateChange = (e) => {
    const inputDate = new Date(e.target.value);
    if (!isNaN(inputDate)) {
      const formattedDate = `${String(inputDate.getMonth() + 1).padStart(2, "0")}-${String(
        inputDate.getDate()
      ).padStart(2, "0")}-${inputDate.getFullYear()}`;
      setSelectedDate(formattedDate);
    }
  };


  return (
     <div className="w-full items-center flex flex-col justify-center h-screen">
          <div className="lg:w-[640px] w-full flex flex-col border-[1px] relative h-full">
            {/*  Header */}
    
            <Header readOnly={true} />
    
            {/* Body */}
            <div className="overflow-y-auto scroll-smooth scrollbar-hide mt-10 sm:mb-12 mb-16 h-fit">
              <div className=' mt-4 md:mt-0 p-2 sm:p-12'>
                {/* Form Inputs  */}

               
                    {
                        reduxData.map((item)=>(
                            <div key={item?.id} className={` ${item?.questionType === 'radio' ? 'gap-4' : 'gap-1.5'} flex flex-col mb-[27px] ` }>

                                <div>
                                <div className='font-[600] text-sm text-[#0D0D0D] '>{item?.question}</div>
                                <div className={` ${item?.isHint ? 'block' : 'hidden'} font-[400] text-[12px] text-[#0D0D0D] `}>{item?.hint}</div>
                                </div>

<div className="">
{item?.questionType === "radio" ? 
(
<div className="w-full">
{item?.options.map((opt, i) => (
    <div key={i} className="flex w-full items-center space-x-2 mb-2">
       <label className='flex gap-4 items-center'>
<input className='h-4 w-4 accent-[#00AA45]' type="radio" name="option" value={opt} /> {opt}
</label>
    </div> 
))}

</div>
) : 
item?.questionType === 'textarea' ? (
<textarea className="text-left p-2  w-full border h-[80px] pt-[6px] pr-2 pb-[6px] pl-2 resize-none rounded-[8px] gap-1  focus:ring-0 focus:outline-none bg-[#fff] shadow-input" />
) :  
item?.questionType === 'date' ? (
<div className="relative w-full group "  onClick={() => dateInputRef.current?.showPicker()}>
{/* Hidden Date Input */}
<input
type="date"
ref={dateInputRef}
onChange={handleDateChange}
className="absolute shadow-input inset-0 w-full h-full opacity-0 cursor-pointer"
/>


<div
className="flex shadow-input items-center justify-between w-full p-2 border bg-[#fff] rounded-[8px] cursor-pointer"
>
<span className={` ${selectedDate ? 'text-[#0D0D0D]' : 'text-[#959DA5]'} text-sm font-[400] `}>{selectedDate || "MM-DD-YYYY"}</span>

<svg className="icon-default block group-hover:hidden"
width={16}
height={16}
viewBox="0 0 16 16"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clipPath="url(#clip0_2054_728)">
<path
d="M12 1.33325V2.66659M4 1.33325V2.66659"
stroke="#959DA5"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
<path
d="M7.99704 8.66675H8.00304M7.99704 11.3334H8.00304M10.6607 8.66675H10.6667M5.33337 8.66675H5.33935M5.33337 11.3334H5.33935"
stroke="#959DA5"
strokeWidth={2}
strokeLinecap="round"
strokeLinejoin="round"
/>
<path
d="M2.33337 5.33325H13.6667"
stroke="#959DA5"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
<path
d="M1.66663 8.16213C1.66663 5.25729 1.66663 3.80485 2.50137 2.90243C3.33612 2 4.67962 2 7.36663 2H8.63329C11.3203 2 12.6638 2 13.4986 2.90243C14.3333 3.80485 14.3333 5.25729 14.3333 8.16213V8.50453C14.3333 11.4094 14.3333 12.8618 13.4986 13.7643C12.6638 14.6667 11.3203 14.6667 8.63329 14.6667H7.36663C4.67962 14.6667 3.33612 14.6667 2.50137 13.7643C1.66663 12.8618 1.66663 11.4094 1.66663 8.50453V8.16213Z"
stroke="#959DA5"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
<path
d="M2 5.33325H14"
stroke="#959DA5"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
</g>
<defs>
<clipPath id="clip0_2054_728">
<rect width={16} height={16} fill="white" />
</clipPath>
</defs>
</svg>


<svg className="icon-hover hidden group-hover:block" 
width={16}
height={16}
viewBox="0 0 16 16"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clipPath="url(#clip0_2054_66)">
<path
d="M12 1.33325V2.66659M4 1.33325V2.66659"
stroke="#959DA5"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
<path
d="M7.997 8.66675H8.003M7.997 11.3334H8.003M10.6607 8.66675H10.6667M5.33333 8.66675H5.33931M5.33333 11.3334H5.33931"
stroke="#0D0D0D"
strokeWidth={2}
strokeLinecap="round"
strokeLinejoin="round"
/>
<path
d="M2.33333 5.33325H13.6667"
stroke="#0D0D0D"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
<path
d="M1.66667 8.16213C1.66667 5.25729 1.66667 3.80485 2.50141 2.90243C3.33616 2 4.67966 2 7.36667 2H8.63333C11.3203 2 12.6639 2 13.4986 2.90243C14.3333 3.80485 14.3333 5.25729 14.3333 8.16213V8.50453C14.3333 11.4094 14.3333 12.8618 13.4986 13.7643C12.6639 14.6667 11.3203 14.6667 8.63333 14.6667H7.36667C4.67966 14.6667 3.33616 14.6667 2.50141 13.7643C1.66667 12.8618 1.66667 11.4094 1.66667 8.50453V8.16213Z"
stroke="#0D0D0D"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
<path
d="M2 5.33325H14"
stroke="#0D0D0D"
strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round"
/>
</g>
<defs>
<clipPath id="clip0_2054_66">
<rect width={16} height={16} fill="white" />
</clipPath>
</defs>
</svg>

</div>
</div>
)
: 
(
<input type={item?.questionType} className={` shadow-input text-left p-2  w-full border   h-[32px] rounded-[8px] gap-1  focus:ring-0 focus:outline-none bg-[#fff]`}  />

)
}

</div>

                            
                            </div>
                        ))
                    }
                    
    
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
