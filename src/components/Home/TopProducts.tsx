import { useEffect } from "react"
import ProductCard from "../Cards/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { getAllProducts, getAllWishlist } from "../../redux/reducers/product/productSlice"

// import React from 'react'

const TopProducts = () => {
    const dispatch: AppDispatch = useDispatch()
    const { products, wishlist } = useSelector((state: RootState) => state.product)
    const { user } = useSelector((state: RootState) => state.user)
    useEffect(() => {
        dispatch(getAllProducts())
        if (user)
            dispatch(getAllWishlist())
    }, [])
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => b.price - a.price);
    const top4Products = sortedProducts.slice(0, 4);

    return (
        <>
            {top4Products.length === 0 ? (
                <>
                    Loading...
                </>
            ) : (
                <div className="rounded-md sm:block justify-between px-[10px] m-[20px]">
                    <h3 className="font-[550] text-skin-base text-[1.5rem]  hover:underline w-fit">Top Products</h3>
                    <div className="py-3 grid grid-cols-1 place-items-center gap-3 1100px:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full">
                        {top4Products.map((item, index) => (
                            <ProductCard key={index} data={item} wishlist={wishlist} />
                        ))}
                    </div>

                </div>
            )}

        </>
    )
}

export default TopProducts