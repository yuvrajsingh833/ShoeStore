import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useState,useEffect } from "react";



export default function Home({products}) {
    
    return <main>
        <HeroBanner/>

        <Wrapper>
            {/* Heading and Paragraph Start */}
            <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 fony-semibold leading-tight">
                Cushioning for Your Miles
            </div>
            <div className="text-md md:text-xl">
                A lightweight Nike <strong><span className="text-red-500">ZoomX </span></strong> midsole is combined with
                incresed stack heights to help provide cushioning 
                during extended strectches of running.
            </div>
            </div>
              {/* Heading and Paragraph End */}

            {/* Product Grid Start */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 
              px- md:px-0">

               {products?.data?.map((product)=>{
                    return <ProductCard key={product?.id} data={product?.attributes}/>
               })}
                    
              </div>

              {/* Product Grid End */}
        </Wrapper>
        </main>;
};

export async function getStaticProps(){
    const products=await fetchDataFromApi("/api/products?populate=*");

    return{
        props:{products}
    }

}

