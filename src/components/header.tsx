import React from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FreeDelivery, HappyCustomer, MoneyBackGuarantee, SatisfactionGuarantee } from '../assets/svg-icons';
import Carousel from "react-multi-carousel";
import BrandLogo from '../assets/brand-images/brand-logo.png'
import McfeeLogo from '../assets/brand-images/macfee-logo.png'
import NortonLogo from '../assets/brand-images/norton-logo.png'

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="absolute left-5 top-6" onClick={() => onClick()}><SlArrowLeft size={15} color={'#fff'} /></button>;
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className="absolute right-5 top-6" onClick={() => onClick()}><SlArrowRight size={15} color={'#fff'} /></button>;
};

const Header = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const offerArray = [
    {
      offerText: '30-DAY SATISFACTION GUARARANTEE',
      svg: <SatisfactionGuarantee />,
    },
    {
      offerText: 'FREE DELIVERY ON ORDERS OVER $40.00',
      svg: <FreeDelivery />
    },
    {
      offerText: '50.000+HAPPYCUSTOMERS',
      svg: <HappyCustomer />
    },
    {
      offerText: '100% MONEY BACK GUARANTEE',
      svg: <MoneyBackGuarantee />
    },
  ]

  const carouselJSX = () => (
    <Carousel
      containerClass="carousel-container"
      draggable={true}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      responsive={responsive}
    >
      {
        offerArray.map((v, i) => (
          <div className='flex justify-center items-center'>
            {v.svg}
            <span className='text-white text-xs ml-2'>{v.offerText}</span>
          </div>
        ))
      }

    </Carousel>
  )
  const highlightJSX = () => (
    <div className='flex justify-evenly w-full'>
      {
        offerArray.map((v, i) => (
          <div className='flex justify-center items-center'>
            {v.svg}
            <span className='text-white text-xs ml-2'>{v.offerText}</span>
          </div>
        ))
      }
    </div>
  )

  const mobileHeaderJSX = () => (
    <div className='flex bg-white justify-between items-center my-5 mx-4'>
      <img className='w-28' src={BrandLogo} alt="Clarifion Logo" />
      <div className='flex justify-center items-center'>
        <img className='w-11' src={McfeeLogo} alt="Mcfee Logo" />
        <img className='w-11 ml-4' src={NortonLogo} alt="Norton Logo" />
      </div>
    </div>
  )

  const desktopHighlightJSX = () => (
    <div className='flex bg-white justify-between items-center my-5 mx-10'>
      <img className='w-48' src={BrandLogo} alt="Clarifion Logo" />
      <div className='flex justify-center items-center'>
        <img className='w-20' src={McfeeLogo} alt="Mcfee Logo" />
        <img className='w-20 ml-4' src={NortonLogo} alt="Norton Logo" />
      </div>
    </div>
  )

  return (
    <div>
      <div className='bg-primary relative p-5'>
        <div className='lg:hidden'>
          {
            carouselJSX()
          }
        </div>
        <div className='hidden lg:flex'>
          {
            highlightJSX()
          }
        </div>
      </div>
      <div className='flex bg-white justify-between items-center my-5 mx-4 xl:my-8 md:mx-10 xl:mx-32 '>
        <img className='w-28 md:w-48' src={BrandLogo} alt="Clarifion Logo" />
        <div className='flex justify-center items-center'>
          <img className='w-11 md:w-20' src={McfeeLogo} alt="Mcfee Logo" />
          <img className='w-11 md:w-20 ml-4 xl:ml-8' src={NortonLogo} alt="Norton Logo" />
        </div>
      </div>
    </div>
  )
}

export default Header
