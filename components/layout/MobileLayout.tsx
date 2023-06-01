import React, { ReactComponentElement, ReactNode } from 'react'

const MobileLayout = ({children}: {children: ReactNode}) => {
  return (
    <main className="min-h-screen h-full w-full inline-flex justify-center">
        <section className='relative bg-white w-[750px]'>
            {children}
        </section>
    </main>
  )
}

export default MobileLayout