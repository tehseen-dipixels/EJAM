import React from 'react'
import { CompletedCheck, ConfirmationIcon, DiscountIcon, SpecialOffer, Verified } from '../../assets/svg-icons'
import ProductImageSM from '../../assets/brand-images/product-image-sm.png'
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { AiOutlinePercentage } from "react-icons/ai";
import { IoArrowForward } from "react-icons/io5";
import { LuLock } from "react-icons/lu";
import PaymentMethods from '../../assets/brand-images/purchase-option-logos.png'
import SatisfactionLogo from '../../assets/brand-images/satisfaction-logo.png'
import ProductImage from '../../assets/brand-images/product-image-xl.png'
import ClientImage1 from '../../assets/reviews-images/client1.png'
import { MdStarRate } from "react-icons/md";


const Home = () => {
  return (
    <div className='md:py-0 px-3 md:px-0 w-11/12 md:w-5/6 bg-bgColor lg:bg-white md:bg-none lg:mb-14 lg:py-12 lg:px-12 rounded-lg'>
      <div className='mt-12 lg:mt-0 text-4xl lg:text-5xl text-center'>
        Wait! Your Order In Progress.
      </div>
      <div className='text-base lg:text-2xl text-lightGray text-center mt-4 font-manrope'>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </div>
      {/* Progress Bar */}
      <div className='flex justify-between items-center my-10'>
        <div className='flex flex-col md:flex-row md:justify-center items-center'>
          <div className='flex lg:hidden justify-center items-center bg-green w-6 h-6 rounded-full'>
            <FaCheck color="#fff" />
          </div>
          <div className='hidden lg:flex justify-center items-center bg-green w-10 h-10 rounded-full'>
            <FaCheck size={22} color="#fff" />
          </div>
          <div className='text-xs mt-2 md:mt-0 md:ml-2 lg:hidden'>Cart Review</div>
          <div className='hidden lg:flex text-md ml-4'>Step 1: Cart Review</div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center items-center'>
          <div className='flex lg:hidden justify-center items-center bg-green w-6 h-6 rounded-full'>
            <FaCheck color="#fff" />
          </div>
          <div className='hidden lg:flex justify-center items-center bg-green w-10 h-10 rounded-full'>
            <FaCheck size={22} color="#fff" />
          </div>
          <div className='text-xs mt-2 md:mt-0 md:ml-2 lg:hidden'>Checkout</div>
          <div className='hidden lg:flex text-md ml-4'>Step 2: Checkout</div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center items-center'>
          <div className='flex lg:hidden justify-center items-center bg-blue w-6 h-6 rounded-full text-white'>
            3
          </div>
          <div className='hidden lg:flex justify-center items-center bg-blue w-10 h-10 rounded-full text-white text-lg'>
            3
          </div>
          <div className='text-xs mt-2 md:mt-0 md:ml-2 lg:hidden'>Special Offer</div>
          <div className='hidden lg:flex text-md ml-4 font-black'>Step 3: Special Offer</div>
        </div>
        <div className='flex flex-col md:flex-row md:justify-center items-center'>
          <div className='flex lg:hidden justify-center items-center border-blue border-2 w-6 h-6 rounded-full text-blue'>
            4
          </div>
          <div className='hidden lg:flex justify-center items-center border-blue border-2 w-10 h-10 text-lg rounded-full text-blue'>
            4
          </div>
          <div className='text-xs mt-2 md:mt-0 md:ml-2 lg:hidden'>Special Offer</div>
          <div className='hidden lg:flex text-md ml-4'>Step 4: Special Offer</div>
        </div>
      </div>
      {/* Mobile view title */}
      <div className='lg:hidden text-center text-3xl leading-9'>
        <span className='text-blue'>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className='text-blue'>$14 Each</span> ($84.00 Total!)
      </div>


      <div className='flex flex-col lg:flex-row lg:bg-bgColor rounded-xl lg:justify-evenly lg:py-10'>
        <div className='lg:w-5/12'>
          {/* Product image */}
          <img className='rounded-md mb-4 mt-6 lg:my-0' src={ProductImage} alt="Product Image" />
          {/* Client Review start */}
          <div className='mt-8 rounded-md p-8 bg-white hidden lg:flex lg:flex-col'>
            <div className='flex items-center'>
              <img src={ClientImage1} alt="Client Review image" />
              <div className='ml-4'>
                <div className='flex'>
                  <MdStarRate color='#FBBC04' />
                  <MdStarRate color='#FBBC04' />
                  <MdStarRate color='#FBBC04' />
                  <MdStarRate color='#FBBC04' />
                  <MdStarRate color='#FBBC04' />
                </div>
                <div className='flex'>
                  <span className='text-sm font-bold'>
                    Ken T.
                  </span>
                  <span className='flex text-lightGreen text-sm ml-3'>
                    <Verified />
                    <span className='ml-2'>Verified Customer</span>
                  </span>
                </div>
              </div>
            </div>
            <div className='text-lightGray text-base mt-4'>
              “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
            </div>
          </div>
          {/* Client Review end */}
        </div>

        <div className='lg:w-6/12'>
          <div className='text-left text-3xl leading-9 hidden lg:flex'>
            {/* Web title */}
            <div><span className='text-blue'>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span className='text-blue'>$14 Each</span> ($84.00 Total!)</div>
          </div>
          <div className='flex mt-5 relative'>
            {/* Product details start */}
            <img className='w-24 lg:w-28 lg:h-32' src={ProductImageSM} alt="Clarifion Air Ionizer Image" />
            <div className='w-44 ml-4'>
              <div className='font-bold lg:font-normal text-md'>Clarifion Air Ionizer</div>
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
              <div className='text-xs hidden lg:flex md:text-sm text-lightGray mt-2 font-manrope absolute'>
                Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
              </div>
            </div>
            <div className='w-24 ml-4 flex justify-between items-start'>
              <div style={{ textDecoration: 'line-through' }} className='font-bold text-sm lg:font-normal text-midGray'>
                $180
              </div>
              <div className='text-xl font-bold text-blue'>
                $84
              </div>
            </div>
          </div>

          <div className='text-xs lg:hidden relative md:text-base text-lightGray text-center mt-4 mb-6 font-manrope'>
            Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
          </div>
          {/* Product details checklist */}
          <div className='flex mt-4 lg:mt-6 items-center'>
            <FaCheck className='w-10' size={22} color="#2C7EF8" />
            <div className='text-sm text-lightGray'>
              Negative Ion Technology may <span className='font-bold'>help with allergens</span>
            </div>
          </div>
          <div className='flex mt-4 items-center'>
            <FaCheck className='w-10' size={22} color="#2C7EF8" />
            <div className='text-sm text-lightGray'>
              Designed for <span className='font-bold'>air rejuvenation</span>
            </div>
          </div>
          <div className='flex mt-4 items-center'>
            <FaCheck className='w-10' size={22} color="#2C7EF8" />
            <div className='text-sm text-lightGray'>
              <span className='font-bold'>Perfect for every room</span> in all types of places.
            </div>
          </div>
          {/* Product save discount card */}
          <div className='flex bg-lightBlue rounded-xl justify-evenly items-center py-3 my-8'>
            <div className='bg-blue p-1 rounded-3xl h-7'>
              <AiOutlinePercentage color="#fff" size={18} />
            </div>
            <div className='text-md w-4/5'>
              Save <span className='text-blue'>53%</span> and get <span className='text-blue'>6 extra Clarifision</span> for only <span className='text-blue'>$14 Each</span>.
            </div>
          </div>
          {/* Product claim discount button */}
          <button className='w-full bg-secondary flex justify-center items-center text-white text-md lg:text-xl rounded-full py-5'>
            YES-CLAIM MY DISCOUNT
            <IoArrowForward className='ml-4' size={22} color='#fff' />
          </button>
          {/* Order feature items */}
          <div className='border-2 rounded-md p-4 my-4 lg:flex lg:justify-between'>
            <div className='text-lightGray text-xs lg:text-sm w-24 hidden lg:flex'>Free Shipping</div>
            <div className='flex  border-b-2  lg:border-none pb-3 lg:pb-0'>
              <div className='text-lightGray text-xs lg:text-sm w-24 lg:hidden'>Free Shipping</div>
              <div className='flex justify-center items-center border-l-2 pl-2 md:pl-4'>
                <LuLock color='#696969' />
                <div className='text-lightGray text-xs ml-2'>Secure 256-Bit SSL Encryption</div>
              </div>
            </div>
            <div className='flex justify-center items-center lg:text-center lg:pl-4 lg:ml-4 lg:border-l-2'>
              <img className='mt-4 lg:mt-0' src={PaymentMethods} alt="Payment options" />
            </div>
          </div>
          <div className='text-red font-bold text-center text-sm lg:text-lg'>NO THANKS, I DON'T WANT THIS.</div>
          <div className='flex justify-between items-center my-5'>
            <div className='w-16 h-16 lg:w-2/12'>
              <img className='w-10/12' src={SatisfactionLogo} alt="satisfaction logo" />
            </div>
            <div className='w-10/12 text-sm lg:text-base lg:mt-8'>If you are not completely thrilled with your Clarifion - We have a <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
