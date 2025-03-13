import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTitle } from '../redux/formSlices';

const Header = ({isDisable,setIsDisable,readOnly}) => {

  const data = useSelector((state) => state.input.data);
  const formTitle = useSelector((state) => state.input.title);
  const [percentage,setPercentage] = useState(10);

  const formTitileRef = useRef('');

  const dispatch = useDispatch();

  const previewButton = ()=>{
    const error = data.some((items)=>items?.isQuestion === false);
    if(error) {
      toast.dismiss()
      toast.error('fill the question name')
    } else if(!formTitle){
      toast.dismiss()
      toast.error('Form title missing.')
    }
  }

  const setTitleToRedux = ()=>{
    dispatch(setTitle(formTitileRef.current.value));
  }
    
  return (
    <div className="flex items-center justify-between h-[56px] border-b border-r w-full fixed top-0 lg:w-[640px] m:pl-[24px] sm:pr-[24px] pl-[12px] pr-[12px] bg-[#fff] ">
    <input className='text-base border-none w-[150px] focus:ring-0 focus:outline-none font-[600]  placeholder:text-[#959DA5] text-[#0D0D0D]' type="text" name="" id="" placeholder="Untitled form" defaultValue={formTitle || ''} onBlur={setTitleToRedux}  ref={formTitileRef} readOnly={readOnly} />

    {
      readOnly ? 
      <div className='flex flex-col gap-2'>
        <span className='text-sm font-[400] text-[#0D0D0D] '>Form completeness — {percentage}%</span>
        <div className="relative w-full h-1  bg-gray-300 rounded-full overflow-hidden">
  <div
    className="h-full bg-[#00AA45] rounded-full transition-all"
    style={{ width: `${percentage}%` }}
  ></div>
</div>
      </div>
      
      :
      <button onClick={previewButton} disabled={isDisable} className={` ${isDisable ? 'cursor-not-allowed' : 'cursor-pointer transition-all duration-300  shadow-[0px_3px_3px_-1.5px_#00000008] hover:shadow-[0px_12px_12px_-6px_#00000008,0px_6px_6px_-3px_#00000008,0px_3px_3px_-1.5px_#00000008]  '}  flex items-center justify-center pt-[6px] pr-[16px] pb-[6px] pl-[14px] gap-[4px] border-1 rounded-[12px] bg-[#fff] `}>
      <span className={`h-[20px] text-sm ${isDisable ? 'text-[#959DA5]' : 'text-[#0D0D0D]'  } font-[600] `}>Preview</span>
    {
        isDisable ?   <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.563 11.6318L11.4376 4.75711M11.4376 4.75711V11.3568M11.4376 4.75711H4.83799"
          stroke="#959DA5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg> : 
      <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.56297 11.6318L11.4376 4.75711M11.4376 4.75711V11.3568M11.4376 4.75711H4.83795"
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    
    }

  </button>
    }
    </div>
  )
}

export default Header
