import $ from "jquery"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RxCross2 } from "react-icons/rx"
import { AiOutlineMenu } from "react-icons/ai"
import { HiOutlineBars4 } from "react-icons/hi2"
import { BsThreeDotsVertical } from "react-icons/bs"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { LiaRupeeSignSolid } from "react-icons/lia"
import { AppDispatch, RootState } from "../../redux/store"
import { getAllWishlist } from "../../redux/reducers/product/productSlice"
import { getAllProducts } from "../../redux/reducers/product/productSlice"

import BredCrumb from "../../pages/BredCrumb"
import img from "../../assets/icons/headPhones.webp"
import ProductCard from "../Cards/ProductCard"
import LongCard from "../Cards/LongCard"

const Products = () => {
    const [grid, setGrid] = useState(3)
    const dispatch: AppDispatch = useDispatch()
    const { products, wishlist } = useSelector((state: RootState) => state.product)
    const { user } = useSelector((state: RootState) => state.user)

    const getProducts = () => {
        dispatch(getAllProducts())
    }
    useEffect(() => {
        getProducts()
        if (user)
            dispatch(getAllWishlist())
    }, [])

    $(document).on('click', '.griditem div', function () {
        $(this).removeClass('griditem-color').addClass('griditem-active').siblings().removeClass('griditem-active').addClass('griditem-color')
    })
    return (
        <div className="bg-skin-background">
            <BredCrumb title="Our Store" />
            <div className="sm:px-5">
                <div className="w-full flex justify-center ">
                    <div className={`w-3/12 mr-5 hidden md:block`}>

                        <div className="bg-white rounded-lg py-[10px] px-[15px] mb-3 shadow-lg">
                            <h3 className="text-black  text-[1rem] font-[600] space-x-2 mb-[20px] ">Shop By Categories</h3>
                            <div className="h-[150px] overflow-y-scroll no-scrollbar">
                                <ul className="pl-0 list-none text-[#777777] cursor-pointer capitalize text-[16px] ">
                                    <li className="hover:text-black my-2">Watch</li>
                                    <li className="hover:text-black my-2">Tv</li>
                                    <li className="hover:text-black my-2">Cameras</li>
                                    <li className="hover:text-black my-2">Laptops</li>
                                    <li className="hover:text-black my-2">Mobiles</li>
                                    <li className="hover:text-black my-2">Electronics</li>
                                    <li className="hover:text-black my-2">Camera</li>
                                    <li className="hover:text-black my-2">Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg py-[10px] px-[15px] mb-3 shadow-lg">
                            <h3 className="text-black text-[1rem] font-[600] mb-[20px] ">Filter By</h3>
                            <div >
                                <h5 className="text-[14px] font-[600] my-[10px]">Avalibility</h5>
                                {/* <!--Default checkbox--> */}
                                <div className="mb-[0.125rem] felx items-center  min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative bg-[#febd69] float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem]"
                                        type="checkbox"
                                        value="" id="InStock" />
                                    <label
                                        className="inline-block text-[#777777] pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="InStock">
                                        In Stock(1)
                                    </label>
                                </div>
                                <div className="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative bg-[#febd69] float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem]"
                                        type="checkbox"
                                        value=""
                                        id="OutOfStock" />
                                    <label
                                        className="inline-block text-[#777777] pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="OutOfStock">
                                        Out of Stock(1)
                                    </label>
                                </div>
                                <h3 className="text-[14px] font-[600] my-[10px] ">Price</h3>
                                <div className="mb-3 flex  justify-between items-center">
                                    <div className="mr-[10px]">
                                        <input type="number" id="first_name" className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:shadow-sky-600 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="From" min={1} required />
                                    </div>
                                    <div className="ml-[10px]">
                                        <input type="number" id="first_name" className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="To" min={2} required />
                                    </div>

                                </div>
                                <h3 className="text-[14px] font-[600] my-[10px] ">Colors</h3>
                                <div>
                                    <ul className="colors ps-0">
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <h3 className="text-[14px] font-[600] my-[10px] ">Size</h3>
                                <div>
                                    <div className="mb-[0.125rem] felx items-center  min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative hover:pl-0 float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem] "
                                            type="checkbox"
                                            value=""
                                            id="small" />
                                        <label
                                            className="inline-block text-[#777777] w-full pl-[0.15rem] hover:cursor-pointer hover:bg-slate-100"
                                            htmlFor="small">
                                            S
                                        </label>
                                    </div>
                                    <div className="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                            type="checkbox"
                                            value=""
                                            id="medium" />
                                        <label
                                            className="inline-block text-[#777777] pl-[0.15rem] w-full hover:cursor-pointer hover:bg-slate-100"
                                            htmlFor="medium">
                                            M
                                        </label>
                                    </div>
                                    <div className="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                            type="checkbox"
                                            value=""
                                            id="large" />
                                        <label
                                            className="inline-block text-[#777777] pl-[0.15rem] w-full hover:cursor-pointer hover:bg-slate-100"
                                            htmlFor="large">
                                            L
                                        </label>
                                    </div>
                                    <div className="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                            type="checkbox"
                                            value=""
                                            id="ExtraLarge" />
                                        <label
                                            className="inline-block text-[#777777] pl-[0.15rem] w-full hover:cursor-pointer hover:bg-slate-100"
                                            htmlFor="ExtraLarge">
                                            XL
                                        </label>
                                    </div>
                                    <div className="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                            type="checkbox"
                                            value=""
                                            id="DoubleExtra" />
                                        <label
                                            className="inline-block text-[#777777] pl-[0.15rem] w-full hover:cursor-pointer hover:bg-slate-100"
                                            htmlFor="DoubleExtra">
                                            XXL
                                        </label>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg py-[10px] px-[15px] mb-3 shadow-lg">
                            <h3 className="text-black text-[1rem] font-[600] space-x-2 mb-[20px] ">Brands</h3>
                            <div>
                                <div className="mb-[0.125rem] felx items-center  min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                        type="checkbox"
                                        value=""
                                        id="BRAND1" />
                                    <label
                                        className="inline-block text-[#777777] w-full pl-[0.15rem] hover:cursor-pointer hover:bg-slate-100"
                                        htmlFor="BRAND1">
                                        SAMSUNG
                                    </label>
                                </div>
                                <div className="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                        type="checkbox"
                                        value=""
                                        id="BRAND2" />
                                    <label
                                        className="inline-block text-[#777777] pl-[0.15rem] w-full hover:cursor-pointer hover:bg-slate-100"
                                        htmlFor="BRAND2">
                                        ASUS
                                    </label>
                                </div>
                                <div className="mb-[0.125rem] felx items-center  min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                        type="checkbox"
                                        value=""
                                        id="BRAND3" />
                                    <label
                                        className="inline-block text-[#777777] w-full pl-[0.15rem] hover:cursor-pointer hover:bg-slate-100"
                                        htmlFor="BRAND3">
                                        APPLE
                                    </label>
                                </div>
                                <div className="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                        type="checkbox"
                                        value=""
                                        id="BRAND4" />
                                    <label
                                        className="inline-block text-[#777777] pl-[0.15rem] w-full hover:cursor-pointer hover:bg-slate-100"
                                        htmlFor="BRAND4">
                                        BOAT
                                    </label>
                                </div>
                                <div className="mb-[0.125rem] felx items-center  min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                        type="checkbox"
                                        value=""
                                        id="LENEVO" />
                                    <label
                                        className="inline-block text-[#777777] w-full pl-[0.15rem] hover:cursor-pointer hover:bg-slate-100"
                                        htmlFor="LENEVO">
                                        LENAVO
                                    </label>
                                </div>

                            </div>

                        </div>
                        <div className="bg-white rounded-lg py-[10px] px-[15px] mb-3 shadow-lg">
                            <h3 className="text-black text-[1rem] font-[600] space-x-2 mb-[20px] ">Product Tags</h3>
                            <div>
                                <div className="flex flex-wrap items-center">
                                    <span
                                        className="flex flex-wrap pl-3 pr-2 py-1 m-1 justify-between items-center text-[14px] font-medium rounded-md cursor-pointer bg-[#e5e4e4]  text-[#434343] hover:bg-purple-500 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
                                        laptop <RxCross2 className="ml-1 rounded-full" size={15} />
                                    </span>
                                    <span
                                        className="flex flex-wrap pl-3 pr-2 py-1 m-1 justify-between items-center text-[14px] font-medium rounded-md cursor-pointer bg-[#e5e4e4]  text-[#434343] hover:bg-purple-500 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
                                        mobile <RxCross2 className="ml-1 rounded-full" size={15} />
                                    </span>
                                    <span
                                        className="flex flex-wrap pl-3 pr-2 py-1 m-1 justify-between items-center text-[14px] font-medium rounded-md cursor-pointer bg-[#e5e4e4]  text-[#434343] hover:bg-purple-500 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
                                        charger <RxCross2 className="ml-1 rounded-full" size={15} />
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="bg-white rounded-lg py-[10px] px-[15px] mb-3 shadow-lg">
                            <h3 className="text-black text-[1rem] font-[600] space-x-2 mb-[20px] ">Random Product</h3>
                            <div>
                                <div className="flex w-full items-center border-b py-2 border-[#777777]">
                                    <div className="w-3/12 mb-3">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="w-9/12 mb-3">
                                        <h6 className="font-[600] text-[#1c1b1b] h-[50px] m-0 font-Rubik overflow-hidden">
                                            Head phone with yellow color and good sound quality </h6>
                                        <div className="flex"></div>
                                        <span className=" text-[#1c1b1b] font-[500] text-[1rem] font-Rubik"><LiaRupeeSignSolid className="inline text-[1.2rem]" />1000</span>
                                    </div>
                                </div>
                                <div className="flex w-full items-center border-b py-2 border-[#777777]">
                                    <div className="w-3/12 mb-3">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="w-9/12 mb-3">
                                        <h6 className="font-[600] text-[#1c1b1b] h-[50px] m-0 font-Rubik overflow-hidden">
                                            Head phone with yellow color and good sound quality </h6>
                                        <div className="flex"></div>
                                        <span className=" text-[#1c1b1b] font-[500] text-[1rem] font-Rubik"><LiaRupeeSignSolid className="inline text-[1.2rem]" />1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-9/12  w-auto  md:h-[250vh] md:overflow-y-scroll md:no-scrollbar">
                        <div className={`bg-skin-main hidden md:block rounded-lg md:py-[5px] md:px-[10px] mb-3 shadow-lg  `}>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-10">
                                    <p className="mb-0">Sort By:</p>
                                    <select name="" className="bg-[#f2f2f2] px-3 py-2 rounded-md border-none" id="">
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best Selling</option>
                                        <option value="title-ascending">Alphabetically, A-Z</option>
                                        <option value="title-descending">Alphabetically, Z-A</option>
                                        <option value="price-ascending">Price, low to high  </option>
                                        <option value="price-decending">Price, high to low</option>
                                        <option value="created-ascending">Date, old to new</option>
                                        <option value="created-descending">Date, New to Old</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-5">
                                    <p>21 products</p>
                                    <div className="flex gap-3 items-center griditem">
                                        <div className=" p-2 rounded-lg cursor-pointer griditem-color" onClick={() => setGrid(1)}>
                                            <BsThreeDotsVertical size={20} />
                                        </div>
                                        <div className=" p-2 rounded-lg  cursor-pointer griditem-color" onClick={() => setGrid(2)}>
                                            <HiOutlineMenuAlt4 className="" size={20} />
                                        </div>
                                        <div className="p-2 rounded-lg  cursor-pointer griditem-active" onClick={() => setGrid(3)}>
                                            <AiOutlineMenu size={20} />
                                        </div>
                                        <div className="p-2 rounded-lg  cursor-pointer griditem-color" onClick={() => setGrid(4)}>
                                            <HiOutlineBars4 size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:pb-5 products">

                            <div className={` ${grid === 3 ? "grid lg:grid-cols-2 sm:gap-5 border border-b-2 sm:border-none 1100px:grid-cols-3 grid-cols-1 place-items-center" : "null"} ${grid === 2 ? "grid md:grid-cols-2 place-items-center border border-b-2 sm:border-none sm:gap-5 grid-cols-1" : "grid sm:gap-5 place-items-center border border-b-2 sm:border-none grid-cols-1"} `}>
                                {(grid === 1 || grid === 2 || grid === 3) && products?.map((item, index) => (
                                    <ProductCard key={index} data={item} wishlist={wishlist} />
                                ))}
                                {
                                    grid === 4 && products?.map((item, index) => (
                                        <LongCard key={index} data={item} wishlist={wishlist} />
                                    ))
                                }
                            </div>
                        </div>

                        <nav className="my-[20px]">
                            <ul className="flex border bg-white rounded-lg justify-between -space-x-px text-sm ">
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                </li>

                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                </li>
                                <li className="flex items-center">
                                    ---
                                </li>
                                <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                </li>
                                <li className="flex items-center">
                                    ---
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                </li>

                                <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Products