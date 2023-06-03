import React from 'react'
import Pointer from './svgs/pointer'

const ScoreMeter = ({score}: {score: number}) => {
    const turn: number = parseInt((score * 1.8).toFixed(), 10);
  return (
    <div className="relative w-80 h-80 flex justify-center items-center rounded-full">
        <div className="absolute top-0 w-full h-[50%] rounded-tr-full rounded-tl-full bg-gradient-meter-range"></div>
            <div className="z-10 w-[95%] h-[95%] flex justify-center items-center rounded-full bg-gradient-custom">
                <div className="relative w-[98%] h-[98%] z-20 rounded-full flex justify-center items-center bg-gradient-meter">
                <div className="absolute top-0 w-full h-[50%] flex justify-center items-center">
                    <div style={{transform: `rotate(${turn - 90}deg)`}} className="absolute origin-bottom w-20 h-full bg-transparent z-20 flex justify-start items-start">
                        <Pointer />
                    </div>
                    </div>
                    <div className="w-[75%] h-[75%] flex justify-center items-center z-30 rounded-full bg-white shadow-md">
                        <div className="w-[80%] h-[80%] flex justify-center items-center z-20 m-2 border rounded-full bg-white">
                        <p className={`text-black --font-nunito font-extrabold text-[32px] font-italic`}>{score}%</p>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ScoreMeter