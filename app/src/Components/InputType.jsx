'use client';
import { useRef, useState } from "react";

export const InputType = ({ type ,dragHandleProps }) => {
    const [options, setOptions] = useState(["Option 1", "Option 2"]); // Default option

    const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef(null);

  const handleDateChange = (e) => {
    const inputDate = new Date(e.target.value);
    if (!isNaN(inputDate)) {
      const formattedDate = `${String(inputDate.getMonth() + 1).padStart(2, "0")}-${String(
        inputDate.getDate()
      ).padStart(2, "0")}-${inputDate.getFullYear()}`;
      setSelectedDate(formattedDate);
    }
  };

    // Add new option
    const addOption = () => {
        setOptions([...options, `Option ${options.length + 1}`]);
    };

    // Remove an option
    const removeOption = (index) => {
        setOptions(options.filter((_, i) => i !== index));
    };


    const icons = {
        text : ()=>(
            <svg
  width={36}
  height={20}
  viewBox="0 0 36 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.5">
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
    <path
      d="M24 8L28 12L32 8"
      stroke="#0D0D0D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
</svg>

        ),
        textarea : ()=>(
            <svg
  width={36}
  height={20}
  viewBox="0 0 36 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.5">
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
    <path
      d="M24 8L28 12L32 8"
      stroke="#0D0D0D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
</svg>

        ),
        radio: ()=>(
            <svg
  width={36}
  height={20}
  viewBox="0 0 36 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.5">
    <g clipPath="url(#clip0_2042_926)">
      <path
        d="M10 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6025 5.39763 18.3334 10 18.3334Z"
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 13.3334C11.8409 13.3334 13.3333 11.841 13.3333 10.0001C13.3333 8.15913 11.8409 6.66675 10 6.66675C8.15905 6.66675 6.66667 8.15913 6.66667 10.0001C6.66667 11.841 8.15905 13.3334 10 13.3334Z"
        fill="#0D0D0D"
        stroke="#0D0D0D"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </g>
    <path
      d="M24 8L28 12L32 8"
      stroke="#0D0D0D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
  <defs>
    <clipPath id="clip0_2042_926">
      <rect width={20} height={20} fill="white" />
    </clipPath>
  </defs>
</svg>

        ),
        date: () => (<svg
            width={36}
            height={20}
            viewBox="0 0 36 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g opacity="0.5">
                <path
                    d="M15 1.66675V3.33341M5 1.66675V3.33341"
                    stroke="#0D0D0D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.99625 10.8333H10.0038M9.99625 14.1666H10.0038M13.3258 10.8333H13.3333M6.66667 10.8333H6.67414M6.66667 14.1666H6.67414"
                    stroke="#0D0D0D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2.91667 6.66675H17.0833"
                    stroke="#0D0D0D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2.08333 10.2027C2.08333 6.57162 2.08333 4.75607 3.12677 3.62803C4.1702 2.5 5.84957 2.5 9.20833 2.5H10.7917C14.1504 2.5 15.8298 2.5 16.8732 3.62803C17.9167 4.75607 17.9167 6.57162 17.9167 10.2027V10.6307C17.9167 14.2618 17.9167 16.0773 16.8732 17.2053C15.8298 18.3333 14.1504 18.3333 10.7917 18.3333H9.20833C5.84957 18.3333 4.1702 18.3333 3.12677 17.2053C2.08333 16.0773 2.08333 14.2618 2.08333 10.6307V10.2027Z"
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
                <path
                    d="M24 8L28 12L32 8"
                    stroke="#0D0D0D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
        ),
        uri : ()=>(
            <svg
  width={36}
  height={20}
  viewBox="0 0 36 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g opacity="0.5">
    <path
      d="M7.91667 12.0833L12.0833 7.91663"
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
    <path
      d="M24 8L28 12L32 8"
      stroke="#0D0D0D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </g>
</svg>

        )

    }

    return (
        <div className="border p-4 mb-4 gap-2 flex flex-col rounded-[16px] hover:bg-[#FAFBFC]">


            <div className="flex items-center justify-between gap-2">
                <div className="flex flex-col w-full gap-2">
                    <input className="w-full focus:ring-0 focus:outline-none text-sm text-[#0D0D0D] font-[600] placeholder:text-[#959DA5] " type="text" name="" id="" placeholder="Write a question" />

                    <input className="w-full focus:ring-0 focus:outline-none text-[12px] text-[#0D0D0D] font-[400] placeholder:text-[#959DA5] " type="text" name="" id="" placeholder="Write a help text or caption (leave empty if not needed)." />
                </div>
                <div className="flex gap-2 items-center">
                    <span onClick={()=>{
                    }} className="">
                    {
                         icons?.[type]()
                    }
                    </span>

                    <span {...dragHandleProps} className=" cursor-grab  hover:border bg-white rounded-[12px]">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.5">
                                <path
                                    d="M8.875 7H8.88029M8.875 12H8.88029M8.875 17H8.88029M15.5364 7H15.5417M15.5364 12H15.5417M15.5364 17H15.5417"
                                    stroke="#0D0D0D"
                                    strokeWidth={3}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                        </svg>

                    </span>
                </div>
            </div>


           <div className="">
           {type === "radio" ? 
             (
                <div className="w-full">
                    {options.map((opt, i) => (
                        <div key={i} className="flex w-full items-center space-x-2 mb-2">
                            <input className=" accent-[#00AA45]" type="radio" name={''} value={opt} />
                            <input
                                type="text"
                                value={opt}
                                onChange={(e) => {
                                    const newOptions = [...options];
                                    newOptions[i] = e.target.value;
                                    setOptions(newOptions);
                                }}
                                className="border p-1 rounded-[8px]  shadow-[0px 1px 1px -0.5px #00000008] pt-1.5 pr-2 pb-1.5 pl-2  w-full focus:ring-0 focus:outline-none text-sm font-[400] text-[#0D0D0D] shadow-input"
                            />

                            {
                                options.length-1 === i && (
                                    <button onClick={() => addOption()} className="cursor-pointer">
                                        <svg
  width={16}
  height={16}
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.33333 7.99992H8M12.6667 7.99992H8M8 7.99992V3.33325M8 7.99992V12.6666"
    stroke="#0D0D0D"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

                                    </button>
                                )
                            }
                        </div>
                    ))}
                   
                </div>
            ) : 
            type === 'textarea' ? (
            <textarea className="text-left p-2  w-full border h-[80px] pt-[6px] pr-2 pb-[6px] pl-2 resize-none rounded-[8px] gap-1  focus:ring-0 focus:outline-none bg-[#F6F8FA] shadow-input" />
            ) :  
            type === 'date' ? (
                <div className="relative w-full group "  onClick={() => dateInputRef.current?.showPicker()}>
      {/* Hidden Date Input */}
      <input
        type="date"
        ref={dateInputRef}
        onChange={handleDateChange}
        className="absolute shadow-input inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      
      {/* Custom Input Field */}
      <div
        className="flex shadow-input items-center justify-between w-full p-2 border bg-[#F6F8FA] rounded-[8px] cursor-pointer"
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
                <input type={type} className={` shadow-input text-left p-2  w-full border   h-[32px] rounded-[8px] gap-1  focus:ring-0 focus:outline-none bg-[#F6F8FA]`}  />

            )
        }
           </div>

        </div>
    );
};
