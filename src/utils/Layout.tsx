import React from 'react'
import { ChildProps } from '../typecasting';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';

const Layout = ({ children }: ChildProps) => {
  
  return (
    <div>
      <Header />
      <div className='w-full flex justify-center flex-col items-center bg-bgColor lg:bg-white pb-6 lg:pb-0'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
