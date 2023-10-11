import { Link } from "react-router-dom"
import { BsChevronDown } from "react-icons/bs"
import { useState } from "react"
import { RxCross2 } from "react-icons/rx"
import { ratingStar } from "./Rating"
import { LiaRupeeSignSolid } from "react-icons/lia"
import img from "../assets/images/headphone.jpg"

const BredCrumb: React.FC<any> = ({ title }) => {
    const [dropdown, setDropdown] = useState(false)
    const [sort, setSort] = useState(false)

    return (
        <div className="mb-0 py-4 relative w-full">
            <p className="text-center  mb-0">
                <Link to="/">Home &nbsp;</Link>
                / {title}
            </p>
            <div className="absolute md:hidden left-0 top-0 flex items-center justify-center px-4 py-2">
                <button
                    onClick={() => setSort(!sort)}
                    id="sort"
                    data-drawer-target="#offsort"
                    aria-controls="#offsort"
                    className="transition duration-300 ease-in-out translate-y-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                    type="button"
                >
                    Sort By <BsChevronDown className={`transform ${sort ? 'rotate-180' : ''} ml-2`} size={15} />
                </button>
                <div
                    tabIndex={-1}
                    id="offbutton"
                    data-drawer-show="onbutton"
                    className={`duration-300 ease-in-out ${sort ? 'transform-none visible  ' : 'invisible '
                        } fixed bottom-0 left-0 right-0 top-0 translate-y-full overflow-y-scroll bg-white z-20`} >
                    <button onClick={() => setSort(!sort)} className="absolute z-20 top-5 right-5 focus:outline-none">
                        <RxCross2 className="text-black" size={25} />
                    </button>
                    <div className="py-[10px] px-[15px] mt-5 w-full">
                        <div className="">
                            <h3 className="text-black text-[1rem] font-[600] mb-[20px] ">Filter By</h3>
                            <select data-te-select-init className="bg-[#f2f2f2] px-3 py-2 rounded-md border-none">
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
                    </div>
                </div>
            </div>
            <div className="absolute md:hidden right-0 top-0 flex items-center justify-center px-4 py-2">
                <button
                    onClick={() => setDropdown(!dropdown)}
                    id="onbutton"
                    data-drawer-target="#offbutton"
                    aria-controls="#offbutton"
                    className="transition duration-300 ease-in-out translate-y-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                    type="button"
                >
                    Filters <BsChevronDown className={`transform ${dropdown ? 'rotate-180' : ''} ml-2`} size={15} />
                </button>
                <div
                    tabIndex={-1}
                    id="offbutton"
                    data-drawer-show="onbutton"
                    className={`duration-300 ease-in-out ${dropdown ? 'transform-none visible  ' : 'invisible '
                        } fixed bottom-0 left-0 right-0 top-0 translate-y-full overflow-y-scroll z-20`} >
                    <button onClick={() => setDropdown(!dropdown)} className="absolute z-20 top-5 right-5 focus:outline-none">
                        <RxCross2 className="text-black" size={25} />
                    </button>
                    <div>
                        <div className="bg-white  py-[10px] px-[15px] shadow-lg">
                            <h3 className="text-black text-[1rem] font-[600] mb-[20px] ">Shop By Categories</h3>
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
                        <div className="bg-white  py-[10px] px-[15px] shadow-lg">
                            <h3 className="text-black text-[1rem] font-[600] mb-[20px] ">Filter By</h3>
                            <div >
                                <h5 className="text-[14px] font-[600] my-[10px]">Avalibility</h5>

                                <div className="mb-[0.125rem] felx items-center  min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative bg-[#febd69] float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem] "
                                        type="checkbox"
                                        value=""
                                        id="In-Stock" />
                                    <label
                                        className="inline-block text-[#777777] pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="In-Stock">
                                        In Stock(1)
                                    </label>
                                </div>
                                <div className="mb-[0.125rem] flex items-center min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative bg-[#febd69] float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem] "
                                        type="checkbox"
                                        value=""
                                        id="checkboxDefault" />
                                    <label
                                        className="inline-block text-[#777777] pl-[0.15rem] hover:cursor-pointer"
                                        htmlFor="checkboxDefault">
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
                        <div className="bg-white  py-[10px] px-[15px] shadow-lg">
                            <h3 className="text-black text-[1rem] font-[600] space-x-2 mb-[20px] ">Brands</h3>
                            <div>
                                <div className="mb-[0.125rem] felx items-center  min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative hover:pl-0 float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem]"
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
                                        className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem] "
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
                                        className="relative float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
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
                                        className="relative  float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem]  "
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
                                        className="relative float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]   border-[0.125rem]  "
                                        type="checkbox"
                                        value=""
                                        id="LENEVO" />
                                    <label
                                        className="inline-block text-[#777777] w-full pl-[0.15rem] hover:cursor-pointer hover:bg-slate-100"
                                        htmlFor="LENEVO">
                                        LENEVO
                                    </label>
                                </div>

                            </div>

                        </div>
                        <div className="bg-white  py-[10px] px-[15px] shadow-lg">
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
                        <div className="bg-white  py-[10px] px-[15px]  shadow-lg">
                            <h3 className="text-black text-[1rem] font-[600] space-x-2 mb-[20px] ">Random Product</h3>
                            <div>
                                <div className="flex w-full items-center border-b py-2 border-[#777777]">
                                    <div className="w-3/12 mb-3">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="w-9/12 mb-3">
                                        <h6 className="font-[600] text-[#1c1b1b] h-[50px] m-0 font-Rubik overflow-hidden">
                                            Head phone with yellow color and good sound quality </h6>
                                        <div className="flex">{ratingStar}</div>
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
                                        <div className="flex">{ratingStar}</div>
                                        <span className=" text-[#1c1b1b] font-[500] text-[1rem] font-Rubik"><LiaRupeeSignSolid className="inline text-[1.2rem]" />1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div >
    )
}

export default BredCrumb