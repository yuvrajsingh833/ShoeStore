import React from 'react';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousal from '@/components/ProductDetailsCarousal';
import { IoMdHeartEmpty } from 'react-icons/io';
import RelatedProducts from '@/components/RelatedProducts';

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
    <Wrapper>
    
        <div className='flex flex-col lg:flex-row md:px-[10px] gap-[50px] lg:gap-[100px]'>
            {/* left column start */}
            <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
                <ProductDetailsCarousal/>
            </div>
            {/* left column end */}

            {/* Right column start */}
            <div className='flex-[1] py-3'>
           {/* Product Title */}
           <div className='text-[34px] font-semibold mb-2'>
            Jordan Retro 6 G
           </div>

           {/* Product SubTitle */}

           <div className='text-lg font-semibold mb-5'>
            Men&apos;s Gold Shoes
           </div>

           {/* Product Price */}
           
           <div className='text-lg font-semibold'>
            MRP: ₹ 19,695.00
           </div>
           <div className='text-md font-medium text-black/[0.5]'>
            incl. of all taxes
           </div>
           <div className='text-md font-medium text-black/[0.5] mb=20'>
            {`(Also include all applicable duties)`}
           </div>

          {/* PRODUCT SIZE RANGE START */}
          <div className=''mb-10>
            {/* HEADING START */}
            <div className=' flex justify-between mb-2'>
              <div className='text-md font-semibold'>
                Select Size
              </div>
              <div className='text-ms font-medium text-black/[0.5] cursor-pointer'>
                Select Guide 
              </div>
            </div>
            {/* HEADING END */}

            {/* SIZE START */}
            <div className='grid grid-cols-3 gap-2'>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK-6
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK-6.5
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK-7
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK-7.5
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK-8
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK-8.5
              </div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                UK-9
              </div>
              <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                UK-9.5
              </div>
              <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>
                UK-10
              </div>
          
            </div>
            {/* SIZE END */}

            {/* SHOW ERROR START */}
              <div className='text-red-600 mt-2'>
                    Size Selection is required
              </div>

            {/* SHOW ERROR START */}

          </div>

          {/* PRODUCT SIZE RANGE END */}

           {/* ADD TO CART BUTTON  START*/}
           <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium 
           transition-transform active:scale-95 mb-3 ' >
            Add to Cart
           </button>
           {/* ADD TO CART BUTTON  END*/}

           {/* WISHLIST BUTTON START  */}
           <button className='w-full py-4 rounded-full border-black
           text-lg font-medium transition-transform active:scale-95 
           flex items-center justify-center gap-2 hover:opacity-75 mb-10 '>
            Whislist
            <IoMdHeartEmpty size={20}/>
           </button>
           {/* WISHLIST BUTTON END  */}

           {/* PRODUCT DESCRIPTION  START*/}
           <div className='text-lg font-bold mb-5'>
            Product Details
            </div>
            <div className='text-md mb-5'>
             The Jordan Retro 6G is an iconic basketball shoe designed in collaboration with basketball legend
              Michael Jordan. Known for its timeless style and high-performance features, the Retro 6G pays homage 
              to the original design that debuted on the court in the early '90s. 
            </div>
            <div className='text-md mb-5'>
             The Jordan Retro 6G is an iconic basketball shoe designed in collaboration with basketball legend
              Michael Jordan. Known for its timeless style and high-performance features, the Retro 6G pays homage 
              to the original design that debuted on the court in the early '90s. 
            </div>
           
           
           {/* PRODUCT DESCRIPTION  END*/}


            </div>
            {/* Right column end */}
        </div>
        {/* RELATED PRODUCTS START*/}
        <RelatedProducts/>
        {/* RELATED PRODUCTS END*/}

    </Wrapper>
    </div>
    
  )
}

export default ProductDetails;
