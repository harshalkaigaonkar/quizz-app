import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito, Poppins } from 'next/font/google'

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

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
