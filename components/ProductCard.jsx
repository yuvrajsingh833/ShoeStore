import { getDiscountedPricePercenatge } from '@/utils/helpers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';

const ProductCard = ({data, key}) => {
 
  
  return (
    <div>
      <Link href={`/product/${data?.slug}`}>
       <Image
       width={500}
       height={500}
       src={data?.thumbnail?.data?.attributes?.url}
       alt={data?.name}/>
        <div className='p-4 text-black/[0.9]'>
            <h2 className='text-lg font-medium'>{data?.name}</h2>
            <div className='flex items-center text-black/[0.5]'>
              <p className='mr-2 text-lg font-semibold'>&#8377;{data?.price}</p>
              {data?.orginal_price && (
                <>
                <p className='text-base font-medium line-through'>&#8377;{data?.orginal_price}</p>
                <p className='ml-auto text-base font-medium text-green-500'>{getDiscountedPricePercenatge(data?.orginal_price,data?.price)}% off</p>
                </>
              )}

              </div>    
        </div>
      </Link>
    </div>
  )
};

export default ProductCard;
