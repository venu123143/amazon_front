import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import SpecialProdCard from "../Cards/SpecialProdCard"
import { AppDispatch, RootState } from "../../redux/store"
import { getAllProducts, getAllWishlist } from "../../redux/reducers/product/productSlice"

const SpecialCart = () => {
    const dispatch: AppDispatch = useDispatch()
    const { products, wishlist } = useSelector((state: RootState) => state.product)
    const { user } = useSelector((state: RootState) => state.user)
    useEffect(() => {
        dispatch(getAllProducts({}))
        if (user)
            dispatch(getAllWishlist())
    }, [])
    return (
        <>
            {products.length === 0 ? (
                <>
                    Loading...
                </>
            ) : (
                <div className="rounded-md sm:block justify-between px-[10px] sm:m-[20px] select-none ">
                    <h3 className="font-[550] text-[1.5rem] text-skin-base  hover:underline w-fit m-auto sm:m-px">Special Products Sale</h3>
                    <div className="py-3 grid grid-cols-1 place-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3 w-full">
                        {
                            products && products.map((each, index) => {
                                if (each?.tags.includes("special")) {
                                    return (
                                        <SpecialProdCard key={index} data={each} wishlist={wishlist} />
                                    )
                                }
                            })
                        }
                    </div>

                </div>
            )}
        </>
    )
}

export default SpecialCart