import $ from "jquery"
import { useState, useEffect, useLayoutEffect, CSSProperties } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

import { RxCross2 } from "react-icons/rx"
import { AiOutlineMenu } from "react-icons/ai"
import { HiOutlineBars4 } from "react-icons/hi2"
import { BsCartX, BsThreeDotsVertical } from "react-icons/bs"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { LiaRupeeSignSolid } from "react-icons/lia"
import { AppDispatch, RootState } from "../../redux/store"
import { getAllWishlist } from "../../redux/reducers/product/productSlice"
import { getAllProducts } from "../../redux/reducers/product/productSlice"

import BredCrumb from "../../pages/BredCrumb"
import img from "../../assets/icons/headPhones.webp"
import ProductCard from "../Cards/ProductCard"
import LongCard from "../Cards/LongCard"
import { Category, getAllBrands, getCategories, getColors } from "../../redux/reducers/filters/filterSlice"
import { stars, backObj, Filters } from "../../static/staticData"
import { SyncLoader } from "react-spinners"

const MainSpinner: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    width: 380,
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: 'translateX(-50%, -50%)'
};

const Products = () => {
    const [grid, setGrid] = useState(3)
    const dispatch: AppDispatch = useDispatch()
    const { products, wishlist, isLoading } = useSelector((state: RootState) => state.product)
    const { categories, colors, brands } = useSelector((state: RootState) => state.filters)
    const { user } = useSelector((state: RootState) => state.user)
    const [filters, setFilters] = useState<Filters>({
        color: [],
        category: null,
        brand: [],
        totalRating: [],
        sort: '-createdAt',
        page: 1,
        limit: 12
    })

    const handleColor = (id: string) => {
        setFilters({ ...filters, color: [...filters.color as string[], id] })
    }
    const getProducts = () => {
        dispatch(getAllProducts(filters))
    }
    console.log(filters);

    useEffect(() => {
        getProducts()
        dispatch(getCategories())
        dispatch(getColors())
        dispatch(getAllBrands())
        if (user)
            dispatch(getAllWishlist())
    }, [filters])
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [Link]);
    const removeTotalRating = (valueToRemove: string) => {
        setFilters((prevFilters) => {
            return {
                ...prevFilters,
                totalRating: prevFilters?.totalRating!.filter((value) => value !== valueToRemove),
            };
        });
    };
    const removeBrand = (brandToRemove: string) => {
        setFilters((prevFilters) => {
            return {
                ...prevFilters,
                brand: prevFilters?.brand!.filter((brand) => brand !== brandToRemove),
            };
        });
    };
    const clearFilters = () => {
        setFilters({
            color: [],
            category: null,
            brand: [],
            totalRating: [],
            sort: '-createdAt',
            page: 1,
            limit: 12
        });
    };
    $(document).on('click', '.griditem div', function () {
        $(this).removeClass('griditem-color').addClass('griditem-active').siblings().removeClass('griditem-active').addClass('griditem-color')
    })
    return (
        <>
            <div className={`${isLoading === true ? "block bg-black opacity-50 fixed top-0 left-0  z-20 w-full h-screen" : "hidden"}`}>
                <SyncLoader
                    color="#361AE3"
                    loading={isLoading}
                    cssOverride={MainSpinner}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
            <div className="bg-skin-background group">
                <BredCrumb title="Our Store" />
                <div className="sm:px-5">
                    <div className="w-full flex justify-center ">
                        <div className={`w-3/12 mr-5 hidden md:block`}>

                            <div className="bg-white rounded-lg py-[10px] px-[15px] mb-3 shadow-lg">
                                <h3 className="text-black  text-[1rem] font-[600] space-x-2 mb-[20px] ">Shop By Categories</h3>
                                <div className="h-[150px] overflow-y-scroll no-scrollbar">
                                    <ul className="pl-0 list-none text-[#777777] cursor-pointer capitalize text-[16px] ">
                                        {categories && categories.map((cat: Category) => (
                                            <div onClick={() => setFilters({ ...filters, category: cat?._id })} key={cat?._id} className="hover:text-black hover:bg-gray-200 bg-opacity-90 my-2">{cat?.title}</div>

                                        ))}

                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg py-[10px] px-[15px] mb-3 shadow-lg">
                                <button className="bg-blue-500 text-white hover:bg-red-600  float-right px-3 py-2 rounded-lg" onClick={clearFilters}>Clear Filters</button>
                                <h3 className="text-black text-[1rem] font-[600] mb-[20px] ">Filter By</h3>

                                <div >
                                    <h5 className="text-[14px] font-[600] my-[10px]">Avalibility</h5>
                                    <div className="mb-[0.125rem] felx items-center  min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative bg-[#febd69] float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem]"
                                            type="checkbox"
                                            value="" id="InStock" />
                                        <label
                                            className="inline-block text-[#777777] hover:bg-slate-100 w-full pl-[0.15rem] hover:cursor-pointer"
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
                                        <ul className="colors flex flex-wrap gap-2.5 ps-0">
                                            {colors && colors.map((each, index) => (
                                                <input key={index} onClick={() => handleColor(each?._id)} className={`w-[23px] h-[23px] focus:border-black border-2 focus: rounded-full cursor-pointer ${backObj[each?.title]}`} />
                                            ))}
                                        </ul>
                                    </div>
                                    <h3 className="text-[14px] font-[600] my-[10px] ">Rating</h3>
                                    {
                                        stars.map((star, index) => (
                                            <div key={index} className="mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem]">
                                                <input
                                                    className="relative bg-[#febd69] float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem]"
                                                    type="checkbox"
                                                    onChange={(e) => { e.target.checked === true ? setFilters({ ...filters, totalRating: [...filters.totalRating as string[], e.target.value] }) : removeTotalRating(e.target.value); }}
                                                    value={star.value} id={star?.name} />
                                                <label
                                                    className="inline-block text-[#777777] hover:bg-slate-100 w-full pl-[0.15rem] hover:cursor-pointer"
                                                    htmlFor={star?.name}>
                                                    {star?.value}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="bg-white rounded-lg py-[10px] px-[15px] mb-3 shadow-lg">
                                <h3 className="text-black text-[1rem] font-[600] space-x-2 mb-[20px] ">Brands</h3>
                                {brands && brands.map((brand) => (
                                    <div key={brand?._id} className="mb-[0.125rem]  min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                            type="checkbox"
                                            onChange={(e) => { e.target.checked === true ? setFilters({ ...filters, brand: [...filters.brand as string[], e.target.value] }) : removeBrand(e.target.value) }}
                                            value={brand?._id}
                                            id={brand?.title} />
                                        <label
                                            className="inline-block text-[#777777] w-full pl-[0.15rem] hover:cursor-pointer hover:bg-slate-100"
                                            htmlFor={brand?.title}>
                                            {brand?.title}
                                        </label>
                                    </div>

                                ))}




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
                        <div className="md:w-9/12  w-auto">
                            <div className={`bg-skin-main hidden md:block rounded-lg md:py-[5px] md:px-[10px] mb-3 shadow-lg  `}>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-10">
                                        <p className="mb-0">Sort By:</p>
                                        <select name="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, sort: e.target.value })} className="bg-[#f2f2f2] px-3 py-2 rounded-md border-none" id="">
                                            <option value="-createdAt">Date, New to Old</option>
                                            <option value="createdAt">Date, old to new</option>
                                            <option value="title">Alphabetically, A-Z</option>
                                            <option value="-title">Alphabetically, Z-A</option>
                                            <option value="price">Price, low to high  </option>
                                            <option value="-price">Price, high to low</option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-5">
                                        <p>{products.length} products</p>
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
                            {products.length === 0 ? (
                                <>
                                    <div id="empty-wishlist" className="bg-skin-background" style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                        <div className="empty-wishlist" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                            <div className="empty-wishlist-icon" style={{ zIndex: '-1', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'rgba(0, 0, 0, 0.1)', fontSize: '15rem', fontWeight: '530', fontFamily: 'poppins' }}>
                                                <BsCartX className="w-full h-screen opacity-50" />
                                            </div>
                                            <h2 className="text-skin-base" style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold', fontFamily: 'poppins' }}>No products preset with this filter</h2>
                                            <NavLink className="hover:shadow-lg transition-all hover:scale-110" style={{ padding: '12px 15px', margin: '20px 20px', color: 'white', textDecoration: 'none', fontStyle: 'italic', fontFamily: 'poppins', background: 'linear-gradient(93.87deg, red,gray)', borderRadius: "8px" }}
                                                to="/">Go to Home</NavLink>
                                            <p className="text-skin-backgroundHover" style={{ fontStyle: 'italic', fontFamily: 'poppins', textAlign: 'center' }}>Clear Filter and Try again..!</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div>
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
                                        <div className="flex border bg-white rounded-lg justify-between -space-x-px text-sm ">
                                            <button onClick={() => setFilters({ ...filters, page: filters.page! > 1 ? filters.page! - 1 : 1 })} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                Previous
                                            </button>
                                            <button onClick={() => setFilters({ ...filters, page: 1 })} className={`${filters.page === 1 ? "bg-slate-400" : ""} flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                                                1
                                            </button>
                                            <button onClick={() => setFilters({ ...filters, page: 2 })} className={`${filters.page === 2 ? "bg-slate-400" : ""} flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                                                2
                                            </button>
                                            <div className="flex items-center">
                                                ---
                                            </div>
                                            <button onClick={() => setFilters({ ...filters, page: 3 })} className={`${filters.page === 3 ? "bg-slate-400" : ""} flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                                                3
                                            </button>
                                            <button onClick={() => setFilters({ ...filters, page: filters.page! > 1 ? filters.page! + 1 : 1 })} className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                                Next
                                            </button>
                                        </div>
                                    </nav>
                                </div>


                            )}


                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Products