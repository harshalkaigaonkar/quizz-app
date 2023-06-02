import MobileLayout from "@/components/layout/MobileLayout";
import Head from "next/head";
import {Nunito, Poppins} from 'next/font/google';
import { useRouter } from "next/router";
import { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import Image from "next/image";
import AnswerOptions from "@/components/options";
import RightArrow from "@/components/svgs/right-arrow";

const nunito = Nunito({
  weight: ['600', '800', '900'],
  style: ['italic'],
  variable: '--font-nunito',
  preload: false
})

const poppins = Poppins({
  weight: ['600', '800', '900'],
  style: ['italic'],
  variable: '--font-poppins',
  preload: false
})

export default function Home({questions}: QuestionPageProps) {
    const router = useRouter();
    const [questionNo, setQuestionNo] = useState<number>(1);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number[]>([]);
    const [score, setScore] = useState<number>(0);
    const [error, setError] = useState<string>("");

    const setErrorFunction = (er: string) => {
        setError(er);
        setTimeout(() => {
            setError("");
        }, 5000);
    }
    
    
    const handleStartClick = () => {
        if(selectedOptionIndex.length > 0)
        {
            if(!questions[questionNo-1].multiOption) {
                console.log(questions[questionNo-1].answer[0] === selectedOptionIndex[0], "hwloj")
            } else 
            console.log( "jsygadfyg",
                questions[questionNo-1].answer.length === selectedOptionIndex.length && !selectedOptionIndex.some((item) => !questions[questionNo-1].answer.includes(item))
            )
        }
        else {
            setErrorFunction("Please Select at least one option!");
            return;
        }
        if(questionNo === questions.length)
            router.push("/score");
        else
            setQuestionNo(questionNo+1);
    }
    const style = {
        "--tw-value": `${questionNo * 100/questions.length}%`
    } as React.CSSProperties;

    return (
        <>
        <Head>
          <title>Questions | Quizz</title>
        </Head>
        <MobileLayout>
          <div className="h-full w-full flex flex-col justify-end items-center bg-[#AF9CF3] bg-[url(/images/bg-confetti.png)] bg-contain bg-no-repeat bg-fixed text-black">
            <div className="relative top-20 h-full w-full flex flex-col items-center animate-bounce">
                <div className="absolute top-0 bg-white w-40 h-40 rounded-full inline-flex justify-center items-center">
                    <div className="w-[70%] h-[70%] z-20 rounded-full flex justify-center items-center bg-gradient-custom" style={style}>
                        <progress className="hidden" max="100" value="40"></progress>
                        <p className={`text-black ${nunito.variable} font-extrabold text-[32px] font-italic`}>{questionNo}<span className="text-[#999999] text-sm">/{questions.length}</span></p>
                    </div>
                </div>
                <div className="pt-20 h-full px-5 mt-20 w-full bg-white rounded-t-[30px]">
                    <p className={`${poppins.variable} text-[25px] font-extrabold`}>{questions[questionNo-1].question}</p>
                    {questions[questionNo-1].img && (
                        <div className="relative w-full h-80 overflow-hidden">
                            <Image className="scale-150" src={questions[questionNo-1].img as string} alt="question_img" objectFit="contain" layout="fill" priority />
                        </div>
                    )}
                    <AnswerOptions questions={questions} questionNo={questionNo} selectedOptionIndex={selectedOptionIndex} setSelectedOptionIndex={setSelectedOptionIndex} />
                </div>
            </div>
            <div className="w-full h flex flex-col justify-evenly items-center sticky bottom-5">
                <div className={`mb-1 w-full inline-block align-middle`}>
                    <p className="w-full text-center font-medium text-sm text-red-600 animate-bounce">{error}</p>
                </div>
                <button onClick={handleStartClick} className={`${nunito.variable} group relative w-[95%] bg-[#FF3B3F] rounded-[60px] text-3xl text-white font-bold py-2`}>Next<span className="absolute right-0 py-2 px-10 transition duration-300 group-hover:translate-x-4 animate-bounce"><RightArrow /></span></button>
            </div>
          </div>
        </MobileLayout>
      </>
    )
  }

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            questions: [
                {
                    id: 1,
                    question: "How do you judge what should be added in the next version of the app?",
                    options: [
                        "Data Analysis",
                        "User's feedback",
                        "Copy from similar product",
                        "Copy from similar product",
                        "Make a questionary",
                        "Personal feeling"
                    ],
                    multiOption: false,
                    answer: [2],
                },
                {
                    id: 2,
                    question: "How do you judge what should be added in the next version of the app?",
                    options: [
                        "Data Analysis",
                        "User's feedback",
                        "Copy from similar product",
                        "Make a questionary",
                        "Personal feeling"
                    ],
                    multiOption: true,
                    answer: [2, 4],
                    img: "/images/2-q-img.png",
                },
                {
                    id: 3,
                    question: "How do you judge what should be added in the next version of the app?",
                    options: [
                        "Data Analysis",
                        "User's feedback",
                        "Copy from similar product",
                        "Make a questionary",
                        "Personal feeling"
                    ],
                    multiOption: true,
                    answer: [2, 3],
                },
            ]
        }
    }
} 
