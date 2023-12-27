import React from 'react'
import { CompletedCheck, ConfirmationIcon, DiscountIcon, SpecialOffer } from '../../assets/svg-icons'
import ProductImageSM from '../../assets/brand-images/product-image-sm.png'
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoArrowForward } from "react-icons/io5";
import { LuLock } from "react-icons/lu";
import PaymentMethods from '../../assets/brand-images/purchase-option-logos.png'
import SatisfactionLogo from '../../assets/brand-images/satisfaction-logo.png'
import ProductImage from '../../assets/brand-images/product-image-xl.png'

const Home = () => {
  return (
    <div className='py-12 md:py-0 px-3 bg-bgColor md:bg-white'>
      <div className='text-4xl md:text-5xl text-center'>
        Wait! Your Order In Progress.
      </div>
      <div className='text-base md:text-2xl text-lightGray text-center mt-4 font-manrope'>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </div>
      <div className='flex justify-between items-center my-6'>
        <div className='flex flex-col items-center'>
          <CompletedCheck />
          <div className='text-sm mt-2'>Cart Review</div>
        </div>
        <div className='flex flex-col items-center'>
          <CompletedCheck />
          <div className='text-sm mt-2'>Checkout</div>
        </div>
        <div className='flex flex-col items-center'>
          <SpecialOffer />
          <div className='text-sm mt-2 font-black'>Special Offer</div>
        </div>
        <div className='flex flex-col items-center'>
          <ConfirmationIcon />
          <div className='text-sm mt-2'>Confirmation</div>
        </div>
      </div>

      <div className='text-center text-2xl font-bold leading-9'>
        <span className='text-blue'>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className='text-blue'>$14 Each</span> ($84.00 Total!)
      </div>

      <div>
        <img className='rounded-lg my-4' src={ProductImage} alt="Product Image" />
      </div>

      <div className='flex mt-5'>
        <img className='w-24' src={ProductImageSM} alt="Clarifion Air Ionizer Image" />
        <div className='w-44 ml-4'>
          <div className='font-bold text-md'>Clarifion Air Ionizer</div>
          <div className='flex my-2'>
            <FaStar className='mr-1' size={14} color="#FFC000" />
            <FaStar className='mr-1' size={14} color="#FFC000" />
            <FaStar className='mr-1' size={14} color="#FFC000" />
            <FaStar className='mr-1' size={14} color="#FFC000" />
            <FaStar className='mr-1' size={14} color="#FFC000" />
          </div>

          <div>
            <div className='flex mt-4'>
              <input type="radio" name="fav_language" checked />
              <div className='ml-4 text-darkGray text-xs'>12 left in Stock</div>
            </div>
          </div>
        </div>
        <div className='w-24 ml-4 flex justify-between items-start'>
          <div style={{ textDecoration: 'line-through' }} className='font-bold text-sm text-midGray'>
            $180
          </div>
          <div className='text-xl font-bold text-blue'>
            $84
          </div>
        </div>
      </div>

      <div className='text-xs md:text-base text-lightGray text-center mt-4 mb-6 font-manrope'>
        Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
      </div>

      <div className='flex mt-4 items-center'>
        <FaCheck className='w-10' size={22} color="#2C7EF8" />
        <div className='text-xs text-lightGray'>
          Negative Ion Technology may <span className='font-bold'>help with allergens</span>
        </div>
      </div>
      <div className='flex mt-4 items-center'>
        <FaCheck className='w-10' size={22} color="#2C7EF8" />
        <div className='text-xs text-lightGray'>
          Designed for <span className='font-bold'>air rejuvenation</span>
        </div>
      </div>
      <div className='flex mt-4 items-center'>
        <FaCheck className='w-10' size={22} color="#2C7EF8" />
        <div className='text-xs text-lightGray'>
          <span className='font-bold'>Perfect for every room</span> in all types of places.
        </div>
      </div>
      <div className='flex bg-lightBlue rounded-xl justify-evenly items-center py-3 my-8'>
        <div className='bg-blue p-1 rounded-3xl h-7'>
          <AiOutlinePercentage color="#fff" size={18} />
        </div>
        <div className='text-md w-4/5'>
          Save <span className='text-blue'>53%</span> and get <span className='text-blue'>6 extra Clarifision</span> for only <span className='text-blue'>$14 Each</span>.
        </div>
      </div>
      <button className='w-full bg-secondary flex justify-center items-center text-white text-md font-bold rounded-full py-4'>
        YES-CLAIM MY DISCOUNT
        <IoArrowForward className='ml-4' size={20} color='#fff' />
      </button>
      <div className='border-2 rounded-md p-4 my-4'>
        <div className='flex border-b-2 pb-3'>
          <div className='text-lightGray text-xs w-24'>Free Shipping</div>
          <div className='flex justify-center items-center border-l-2 pl-2'>
            <LuLock color='#696969' />
            <div className='text-lightGray text-xs ml-2'>Secure 256-Bit SSL Encryption</div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img className='mt-4' src={PaymentMethods} alt="Payment options" />
        </div>
      </div>
      <div className='text-red font-bold text-center text-sm'>NO THANKS, I DON'T WANT THIS.</div>
      <div className='flex justify-between my-5'>
        <img className='w-16 h-16' src={SatisfactionLogo} alt="satisfaction logo" />
        <div className='w-9/12 text-sm'>If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</div>
      </div>
    </div>
  )
}

export default Home
