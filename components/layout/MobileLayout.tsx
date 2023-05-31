import React, { ReactComponentElement, ReactNode } from 'react'

const MobileLayout = ({children}: {children: ReactNode}) => {
  return (
    <main className="h-screen w-full inline-flex justify-center">
        <section className='bg-white w-[750px]'>
            {children}
        </section>
    </main>
  )
}

export default MobileLayout