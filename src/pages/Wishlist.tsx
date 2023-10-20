import { useEffect } from "react"

import LongCard from "../components/Cards/LongCard"
import { popularProducts } from "../static/staticData"
import { BsCartCheck } from "react-icons/bs"
import { GrCart } from "react-icons/gr"
import { BsBook } from "react-icons/bs"
import { AiOutlineAppstore } from "react-icons/ai"
import { MdOutlineFlipCameraAndroid } from "react-icons/md"
import { Link } from "react-router-dom"
import ProductCard from "../components/Cards/ProductCard"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { GetFromWishlist } from "../redux/reducers/product/productSlice"

const Wishlist = () => {
    const dispatch: AppDispatch = useDispatch()
    const { wishlist } = useSelector((state: RootState) => state.product)
    console.log(wishlist);

    useEffect(() => {
        dispatch(GetFromWishlist())
    }, [])

    return (
        <div className="bg-[#FFFFF7]">
            <h3 className="font-[550] text-[1.5rem] pt-2 hover:underline w-fit sm:hidden m-auto">My wishlist</h3>
            <section className="rounded-md py-5">
                <div className="md:flex block">
                    <div className="md:w-3/12 relative ">
                        <div className="sticky top-32 bg-white rounded-lg py-[10px] px-[15px]  mb-3 shadow-lg">
                            <Link to="/orders" className="bg-[#00BFFF] mb-5 hover:bg-[#00FFFF]  py-3 px-2 rounded-md cursor-pointer flex items-center">
                                <BsCartCheck size={25} className="inline mr-[1rem]" />
                                <span className="text-lg  font-Roboto font-semibold">My Orders</span>
                            </Link>
                            <Link to="/cart" className="bg-pink-500 hover:bg-[#FF1493] mb-5 py-3 px-2 rounded-md cursor-pointer flex items-center">
                                <GrCart size={25} className="inline mr-[1rem]" />
                                <span className="text-lg  font-Roboto font-semibold">Go to Cart</span>
                            </Link>
                            <Link to="/compare" className="bg-yellow-500 hover:bg-[#FFFF00] mb-5 py-3 px-2 rounded-md cursor-pointer flex items-center">
                                <MdOutlineFlipCameraAndroid size={25} className="inline mr-[1rem]" />
                                <span className="text-lg  font-Roboto font-semibold">Compare</span>
                            </Link>
                            <Link to="/blogs" className="bg-green-500 hover:bg-[#7CFC00] mb-5 py-3 px-2 rounded-md cursor-pointer flex items-center">
                                <BsBook size={25} className="inline mr-[1rem]" />
                                <span className="text-lg  font-Roboto font-semibold">Blogs</span>
                            </Link>
                            <Link to="/products" className="bg-red-500 hover:bg-[#FF0000] mb-5 py-3 px-2 rounded-md cursor-pointer flex items-center">
                                <AiOutlineAppstore size={25} className="inline mr-[1rem]" />
                                <span className="text-lg  font-Roboto font-semibold">Store</span>
                            </Link>

                        </div>
                    </div>
                    <div className="md:w-9/12 grid gap-5">
                        {/* {
                            wishlist?.map((item, index) => (
                                <div className="" key={index}>
                                    <ProductCard isHidden={true} data={item} />
                                    <LongCard isHidden={true} data={item} />
                                </div>

                            ))
                        } */}

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Wishlist