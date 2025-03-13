import React from 'react'

const AddQuestionDropdown = ({dropdownRef,click,setIsShowQuestionType,className= ''}) => {
      const inputType = [
        {
          id:1,
          typeName:'Short answer',
          typeIcon: ()=>(
            <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 7.5H10.8333"
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg> )
        },
    
        {
          id:2,
          typeName:'Long answer',
          typeIcon: ()=>(
            <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 5H10.8333"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 10H17.5"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 15H17.5"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          )
        },
    
        {
          id:3,
          typeName:'Single select',
          typeIcon: ()=>(
            <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2007_1208)">
        <path
          d="M10.0001 18.3334C14.6025 18.3334 18.3334 14.6025 18.3334 10.0001C18.3334 5.39771 14.6025 1.66675 10.0001 1.66675C5.39771 1.66675 1.66675 5.39771 1.66675 10.0001C1.66675 14.6025 5.39771 18.3334 10.0001 18.3334Z"
          stroke="#0D0D0D"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10.0001 13.3334C11.841 13.3334 13.3334 11.841 13.3334 10.0001C13.3334 8.15913 11.841 6.66675 10.0001 6.66675C8.15913 6.66675 6.66675 8.15913 6.66675 10.0001C6.66675 11.841 8.15913 13.3334 10.0001 13.3334Z"
          fill="#0D0D0D"
          stroke="#0D0D0D"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2007_1208">
          <rect width={20} height={20} fill="white" />
        </clipPath>
      </defs>
    </svg>
    
    
          )
        },
    
        {
          id:4,
          typeName:'URL',
          typeIcon: ()=>(
            <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.91675 12.0835L12.0834 7.91675"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M14.0386 12.1746L16.2132 10C17.9289 8.28427 17.9289 5.50252 16.2132 3.78679C14.4975 2.07107 11.7157 2.07107 10 3.78679L7.82537 5.96142M12.1746 14.0386L10 16.2132C8.28427 17.929 5.50253 17.929 3.7868 16.2132C2.07107 14.4975 2.07107 11.7157 3.7868 10L5.96142 7.82538"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          
    
          )
        },
    
        {
          id:5,
          typeName:'Date',
          typeIcon: ()=>(
            <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 1.66675V3.33341M5 1.66675V3.33341"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.99633 10.8333H10.0038M9.99633 14.1666H10.0038M13.3259 10.8333H13.3334M6.66675 10.8333H6.67422M6.66675 14.1666H6.67422"
              stroke="#0D0D0D"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.91675 6.66675H17.0834"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.08325 10.2027C2.08325 6.57162 2.08325 4.75607 3.12669 3.62803C4.17012 2.5 5.84949 2.5 9.20825 2.5H10.7916C14.1503 2.5 15.8298 2.5 16.8732 3.62803C17.9166 4.75607 17.9166 6.57162 17.9166 10.2027V10.6307C17.9166 14.2618 17.9166 16.0773 16.8732 17.2053C15.8298 18.3333 14.1503 18.3333 10.7916 18.3333H9.20825C5.84949 18.3333 4.17012 18.3333 3.12669 17.2053C2.08325 16.0773 2.08325 14.2618 2.08325 10.6307V10.2027Z"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 6.66675H17.5"
              stroke="#0D0D0D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          
          
    
          )
        }
    
      ];

      const questionTypeName = {
        'Short answer':'text',
        'Long answer' : 'textarea',
        'Single select' : 'radio',
        'URL' : 'uri',
        'Date' : 'date',
      }
      
      
  return (
    <div  ref={dropdownRef}  className={`${className ? className : 'relative'} z-50 mt-2 w-[150px] md:w-[300px] bg-[#fff] p-[4px] rounded-[16px] border gap-[8px] custom-shadow-show-type ${className} `}>
                <div className='w-full'>
                  <div className='h-[36px] rounded-[8px] gap-[16px] pt-2 pr-4 pb-2 pl-4 bg-[#FAFBFC] text-[#6A737D] font-[400] text-[12px] uppercase '>Input Type</div>
                </div>
                {
                  inputType.map((inputData)=>(
                    <button onClick={(e)=>{
                      click(questionTypeName?.[e.target.innerText])
                      setIsShowQuestionType(false)
                      
                    }} className='
                     cursor-pointer h-[36px] w-full flex items-center gap-2 rounded-[12px] p-2 hover:bg-[#FAFBFC]' key={inputData?.id}>
                      {inputData?.typeIcon()}
                      <span className='text-sm font-[500] text-[#0D0D0D] '>{inputData?.typeName}</span>
                    </button>
                  ))
                }

              </div>
  )
}

export default AddQuestionDropdown
