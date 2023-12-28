import React from 'react'
import { LuLock } from "react-icons/lu";

const Footer = () => {

    return (
        <div className='md:flex lg:justify-between bg-primary relative p-5'>
            <div className='flex py-3 lg:w-5/12 lg:ml-12'>
                <div className='flex justify-center items-center text-white text-xs w-2/6 md:text-base'>Copyright (c) 2023</div>
                <div className='flex justify-center items-center border-l-2 pl-7 ml-3 w-3/6 lg:pl-3'>
                    <div className='text-white text-xs ml-2 md:ml-6 md:text-base'>Clarifionsupport@clarifion.com</div>
                </div>
            </div>
            <div className='flex justify-center items-center pt-4 md:pt-0 md:w-5/12 lg:w-2/6'>
            <LuLock color='#fff' />
            <div className='text-white text-xs ml-2 md:text-base'>Secure 256-Bit SSL Encryption</div>
          </div>
        </div>
    )
}

export default Footer
