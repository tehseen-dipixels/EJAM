import React from 'react'
import { ChildProps } from '../typecasting';
import Header from '../components/header.tsx';
import Footer from '../components/footer.tsx';

const Layout = ({ children }: ChildProps) => {
  
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
