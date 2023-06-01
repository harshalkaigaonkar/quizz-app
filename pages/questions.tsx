import MobileLayout from "@/components/layout/MobileLayout";
import Head from "next/head";
import {Nunito, Poppins} from 'next/font/google';
import { useRouter } from "next/router";
import { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";

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

type QuestionPageProps = {
    questions: 
        {
            id: number,
            question: string,
            options: [string],
            multiOption: boolean,
            img?: string,
            answer: number|number[]
        }[]
}

export default function Home({questions}: QuestionPageProps) {
    const router = useRouter();
    const [questionNo, setQuestionNo] = useState<number>(1);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number[]>([]);
    
    const handleStartClick = () => {

      router.push("/score");
    }
    const onSelectOptionHandler = (e: any) => {
        //logic remaining
        const index: number = e.target.id;
        let error: undefined;
        if(selectedOptionIndex.includes(index)) {
            selectedOptionIndex.splice(selectedOptionIndex.indexOf(index), 1);
        }
        else {
            if(selectedOptionIndex.length === 0) {
                
            }
            if(questions[1].multiOption) {

            }
        }
        setSelectedOptionIndex(selectedOptionIndex);
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
            <div className="relative top-20 h-full w-full flex flex-col items-center">
                <div className="absolute top-0 bg-white w-40 h-40 rounded-full inline-flex justify-center items-center">
                    <div className="w-[70%] h-[70%] z-20 rounded-full flex justify-center items-center bg-gradient-custom" style={style}>
                        <progress className="hidden" max="100" value="40"></progress>
                        <p className={`text-black ${nunito.variable} font-extrabold text-[32px] font-italic`}>{questionNo}<span className="text-[#999999] text-sm">/{questions.length}</span></p>
                    </div>
                </div>
                <div className="pt-20 h-full px-5 mt-20 w-full bg-white rounded-t-[30px]">
                    <p className={`${poppins.variable} text-[25px] font-extrabold`}>{questions[1].question}</p>
                    <div className="my-10 mb-24 flex flex-col gap-4" onClick={onSelectOptionHandler}>
                        {questions[1].options.map((item, index) => (
                            <>
                                <div key={index} id={`${index}`} className={`${selectedOptionIndex.includes(index) && "border-[#44B77B]"}
                                    p-4 flex flex-row justify-start items-center gap-3 border rounded-[20px] cursor-pointer bg-[#F3F4FA] hover:bg-black/10`}>
                                    <span className="m-3 w-6 h-6 rounded-full border border-black" />
                                    <p className={`${nunito.variable} font-[600] m-3`}>{item}</p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center sticky bottom-5">
                <button onClick={handleStartClick} className={`${nunito.variable} w-[95%] bg-[#FF3B3F] rounded-[60px] text-3xl text-white font-bold py-2`}>Next</button>
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
                    answer: 2,
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
                    multiOption: false,
                    answer: 2,
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
