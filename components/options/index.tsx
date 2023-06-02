import Image from 'next/image';
import React, { useState } from 'react'
import TickIcon from '../svgs/tick-icon';

const AnswerOptions = ({questions, questionNo, selectedOptionIndex, setSelectedOptionIndex}: {
  questions: QuestionsTypes[], questionNo: number, selectedOptionIndex: number[], setSelectedOptionIndex: any
}) => {
  
  const onSelectOptionHandler = (e: any) => {
    const index: number = parseInt(e.target.id, 10);
    let error: undefined;
    if(selectedOptionIndex.length === 0) {
      setSelectedOptionIndex([index]);
    }
    else if (selectedOptionIndex.includes(index)) {
      setSelectedOptionIndex(selectedOptionIndex.filter(item => item !== index));
    } else if(questions[questionNo-1].multiOption) {
      setSelectedOptionIndex([...selectedOptionIndex, index]);
    }
    else {
      setSelectedOptionIndex([index])
    }
}
  return (
    <div className="my-10 mb-24 flex flex-col gap-4"onClick={onSelectOptionHandler} >
        {questions[questionNo-1].options.map((item, index) => (
          <div key={index} id={`${index}`} className={`${selectedOptionIndex.includes(index) ? "border-[#44B77B] bg-white ": "border-none "}
                 h-20 p-4 flex flex-row justify-start items-center gap-3 border rounded-[20px] cursor-pointer border-[4.44px] bg-[#F3F4FA] transition-border duration-300`}>
                  <div className="m-3 w-8 h-8 rounded-full border border-[3px] flex justify-center items-center">
                   {selectedOptionIndex.includes(index) && <TickIcon />}
                  </div>
              <p className="--font-nunito font-[600] m-3">{item}</p>
          </div>
        ))}
    </div>
  )
}

export default AnswerOptions