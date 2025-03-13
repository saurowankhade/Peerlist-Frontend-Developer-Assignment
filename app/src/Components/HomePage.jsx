'use client';

import React, { useEffect, useRef,useState } from 'react'
import Footer from './Footer';
import Header from './Header';
import AddQuestionDropdown from './AddQuestionDropdown';
import { InputType  } from './InputType';
import { DragDropContext ,Droppable ,Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addInput, reorderInputs } from '../redux/formSlices';

const HomePage = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [isShowQuestionType,setIsShowQuestionType] = useState(false);

  const dropdownRef = useRef(null);


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


  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.input.data); // Get Redux data

  useEffect(()=>{
    setIsDisable(reduxData.length <= 0)
  },[reduxData])
  
  const dragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // If dropped outside, do nothing

    const newData = [...reduxData]; // Clone Redux state
    const [movedItem] = newData.splice(source.index, 1);
    newData.splice(destination.index, 0, movedItem);

    dispatch(reorderInputs(newData)); 
   
};

const click = (result)=>{    

  const newId = reduxData.length; // Get the next index based on existing data

  dispatch(addInput({
    id: newId,
    questionType: result,
        hint : '',
        isHint : false ,
      ...(result === 'radio' ? { options: [] } : {}),
      isQuestion : false,
  }));
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
            

      <DragDropContext onDragEnd={dragEnd}>
      <Droppable droppableId="droppable-0" isDropDisabled={false} isCombineEnabled={false} ignoreContainerClipping={false} direction='vertical'>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="">
            {reduxData.map((items, index) => (
              <Draggable key={`draggable-${index}`} draggableId={`draggable-${index}`} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    // {...provided.dragHandleProps} // Ensure draggable
                    className="bg-white "
                  >
                    {/* {Compo} */}
                    <InputType index={items?.id} id={index} key={items?.id} type={items?.questionType} dragHandleProps={provided.dragHandleProps} />
                    {/* <Compo index={index}  /> */}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>

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
