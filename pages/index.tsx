import MobileLayout from "@/components/layout/MobileLayout";
import Head from "next/head";
import {Nunito, Poppins} from 'next/font/google';
import { useRouter } from "next/router";

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

  const handleStartClick = () => {
    router.push("/questions");
  }
  return (
    <>
      <Head>
        <title>Home | Quizz</title>
      </Head>
      <MobileLayout>
        <div className="h-full w-full flex flex-col justify-between items-center  bg-gradient-to-t from-[#AF9CF3] via-[#AF9CF3] to-[rgba(175, 156, 243, 0)]">
            <div className="mt-4 bg-[url(/images/upraised-full-logo.svg)] bg-no-repeat bg-center bg-contain w-60 h-12"></div>
            <div className="bg-white w-60 h-60 rounded-full flex items-center justify-center shadow-lg">
              <p className={`${poppins.variable} text-5xl font-[800] text-[#FF3B3C]`}>Quiz</p>
            </div>
            <button className="mb-4 bg-[#FF3B3F] p-4 w-4/5 rounded-[80px]" onClick={handleStartClick}>
              <p className={`${nunito.variable} text-2xl font-[900]`}>Start</p>
            </button>
        </div>
      </MobileLayout>
    </>
  )
}
