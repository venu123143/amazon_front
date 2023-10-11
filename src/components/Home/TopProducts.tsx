import ProductCard from "../Cards/ProductCard"
import { topProducts } from "../../static/staticData"

// import React from 'react'
const TopProducts = () => {
    return (
        <>
            <div className="rounded-md sm:block justify-between px-[10px] m-[20px]">
                <h3 className="font-[550] text-[1.5rem]  hover:underline w-fit">Top Products</h3>
                <div className="py-3 grid grid-cols-1 place-items-center gap-3 1100px:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full">
                    {topProducts.map((item, index) => (
                        <ProductCard key={index} img={item.image} price={item.price} title={item.title} />      
                    ))}

                </div>

            </div>
        </>
    )
}

export default TopProducts