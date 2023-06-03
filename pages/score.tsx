import MobileLayout from "@/components/layout/MobileLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { GetStaticProps } from "next";
import Pointer from "@/components/svgs/pointer";
import ScoreMeter from "@/components/ScoreMeter";
import axios from "axios";

export default function Page({incorrect , correct}: {
  incorrect: number,
  correct: number
}) {
    const router = useRouter();
    const [score, setScore] = useState<number>(correct * 100/(correct+incorrect));
    
    const handleStartClick = () => {
      router.push("/");
    }
    return (
        <>
        <Head>
          <title>Score | Quizz</title>
        </Head>
        <MobileLayout>
          <div className="h-full w-full flex flex-col justify-end items-center bg-[#AF9CF3] bg-[url(/images/bg-confetti.png)] bg-contain bg-no-repeat bg-fixed">
            <div className="relative h-full top-20 flex flex-col items-center w-full bg-white rounded-t-[60px]">
              <p className="w-full my-6 text-center font-bold text-3xl text-black">Your result</p>
              <ScoreMeter score={score} />
              <div className="w-[90%] mb-20 flex flex-col gap-4">
                <div className="w-full h-20 p-4 flex flex-row justify-start items-center gap-3 rounded-[20px] cursor-pointer bg-[#44B77B] bg-opacity-[0.12] transition-border duration-300">
                  <div className="m-3 w-6 h-6 rounded-full bg-[#44B77B] flex justify-center items-center">
                  </div>
                  <p className="font-[600] m-3 text-black/50 whitespace-pre"><span className="text-black">{correct}</span>   Correct</p>
                </div>
                <div className="w-full h-20 p-4 flex flex-row justify-start items-center gap-3 rounded-[20px] cursor-pointer bg-[#FF3B3F] bg-opacity-[0.12] transition-border duration-300">
                  <div className="m-3 w-6 h-6 rounded-full bg-[#FF3B3F] flex justify-center items-center">
                  </div>
                  <p className="font-[600] m-3 text-black/50 whitespace-pre"><span className="text-black">{incorrect}</span>   Incorrect</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-evenly items-center sticky bottom-5">
                <button onClick={handleStartClick} className={`group relative w-[95%] bg-[#FF3B3F] rounded-[60px] text-2xl text-white font-black py-2 cursor-pointer`}>Start Again</button>
            </div>
          </div>
        </MobileLayout>
      </>
    )
  }

export const getStaticProps: GetStaticProps = async ({params}) => {
  // try {
    const {data} = await axios.get(`${process.env.BASE_URL}/api/score`);
    console.log(data)
    return {
      props: {
        ...data.data
      }
    }
  // } 
  // catch (err) {
    // return {
    //   redirect: {
    //     destination: '/questions',
    //     permanent: false,
    //   },
    // }
  // }
} 
