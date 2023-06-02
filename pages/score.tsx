import MobileLayout from "@/components/layout/MobileLayout";
import Head from "next/head";
import {Nunito, Poppins} from 'next/font/google';
import { useRouter } from "next/router";
import { useState } from "react";
import { GetStaticProps } from "next";
import Pointer from "@/components/svgs/pointer";
import ScoreMeter from "@/components/ScoreMeter";

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


export default function Home() {
    const router = useRouter();
    const [score, setScore] = useState<number>(0);
    
    const handleStartClick = () => {

      router.push("/");
    }
    return (
        <>
        <Head>
          <title>Score | Quizz</title>
        </Head>
        <MobileLayout>
          <div className="h-full w-full flex flex-col justify-end items-center bg-[#AF9CF3] bg-[url(/images/bg-confetti.png)] bg-contain bg-fixed bg-no-repeat">
            <div className="h-4/5 flex flex-col items-center w-full bg-white rounded-t-[60px]">
              <p className="w-full my-6 text-center --font-nunito font-bold text-3xl text-black">Your result</p>
              <ScoreMeter score={score} />
            </div>
          </div>
        </MobileLayout>
      </>
    )
  }

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {}
    }
} 
