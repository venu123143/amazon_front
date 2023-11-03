import { Link } from "react-router-dom"
import { BsChevronDown } from "react-icons/bs"
import { useState, useEffect, useLayoutEffect } from "react"
import { RxCross2 } from "react-icons/rx"
import RatingStar from "./Rating"
import { LiaRupeeSignSolid } from "react-icons/lia"
import img from "../assets/images/headphone.jpg"
import { AppDispatch, RootState } from "../redux/store"
import { getAllWishlist } from "../redux/reducers/product/productSlice"
import { getAllProducts } from "../redux/reducers/product/productSlice"
import { useDispatch, useSelector } from "react-redux"
import { Category, getAllBrands, getCategories, getColors } from "../redux/reducers/filters/filterSlice"
import { Filters, backObj, stars } from "../static/staticData"
const BredCrumb: React.FC<any> = ({ title }) => {
    const [dropdown, setDropdown] = useState(false)
    const [sort, setSort] = useState(false)
    const dispatch: AppDispatch = useDispatch()
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
            minPrice: null,
            maxPrice: null,
            limit: 12
        });
    };

    return (
        <div className="mb-0 py-4 relative w-full bg-skin-background text-skin-base">
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
                <div className={`duration-300 ease-in-out ${sort ? 'transform-none visible group:overflow-hidden  ' : 'invisible '} fixed bottom-0 left-0 right-0 top-0 translate-y-full bg-skin-background z-20`} >
                    <button onClick={() => setSort(!sort)} className="absolute z-20 top-5 right-5 focus:outline-none">
                        <RxCross2 className="text-skin-base" size={25} />
                    </button>
                    <div className="py-[10px] px-[15px] mt-5 w-full">
                        <div className="bg-skin-background text-skin-base">
                            <h3 className="bg-skin-background text-skin-base text-[1rem] font-[600] mb-[20px] ">Filter By</h3>
                            <select className="bg-skin-background px-3 py-2 rounded-md border-none" name="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFilters({ ...filters, sort: e.target.value })} id="">
                                <option value="-createdAt">Date, New to Old</option>
                                <option value="createdAt">Date, old to new</option>
                                <option value="title">Alphabetically, A-Z</option>
                                <option value="-title">Alphabetically, Z-A</option>
                                <option value="price">Price, low to high  </option>
                                <option value="-price">Price, high to low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute md:hidden bg-skin-background  right-0 top-0 flex items-center justify-center px-4 py-2">
                <button
                    onClick={() => setDropdown(!dropdown)}
                    className="transition duration-300 ease-in-out translate-y-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                    type="button"
                >
                    Filters <BsChevronDown className={`transform ${dropdown ? 'rotate-180' : ''} ml-2`} size={15} />
                </button>
                <div className={`duration-300 ease-in-out ${dropdown ? 'transform-none visible  ' : 'invisible '
                    } fixed bottom-0 left-0 right-0 top-0 translate-y-full bg-skin-background overflow-y-scroll z-20`} >
                    <button onClick={() => setDropdown(!dropdown)} className="absolute z-20 top-5 right-5 focus:outline-none">
                        <RxCross2 className="text-skin-base" size={25} />
                    </button>
                    <div>
                        <div className="  py-[10px] px-[15px]">
                            <h3 className="text-skin-base text-[1rem] font-[600] mb-[20px] ">Shop By Categories</h3>
                            <div className="h-[150px] overflow-y-scroll no-scrollbar">
                                <ul className="pl-0 list-none text-[#777777] cursor-pointer capitalize text-[16px] ">
                                    {categories && categories.map((cat: Category) => (
                                        <div onClick={() => setFilters({ ...filters, category: cat?._id })} key={cat?._id} className="hover:text-black hover:bg-gray-200 dark:text-skin-base dark:hover:text-skin-light bg-opacity-90 my-2">{cat?.title}</div>

                                    ))}

                                </ul>
                            </div>
                        </div>
                        <div className="  py-[10px] px-[15px]">
                            <button className="bg-blue-500 text-white hover:bg-red-600  float-right px-3 py-2 rounded-lg" onClick={clearFilters}>Clear Filters</button>

                            <h3 className="text-skin-base text-[1rem] font-[600] mb-[20px] ">Filter By</h3>
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
                                        <input
                                            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} value={filters.minPrice as string}
                                            type="number" id="first_name" className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:shadow-sky-600 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="From" min={1} required />
                                    </div>
                                    <div className="ml-[10px]">
                                        <input
                                            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} value={filters.maxPrice as string}
                                            type="number" id="first_name" className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="To" min={2} required />
                                    </div>

                                </div>
                                <h3 className="text-[14px] font-[600] my-[10px] ">Colors</h3>
                                <div>
                                    <ul className="colors flex flex-wrap gap-2.5 ps-0">
                                        {colors && colors.map((each, index) => (
                                            <input key={index} readOnly onClick={() => handleColor(each?._id)} className={`w-[23px] h-[23px] focus:border-black border-2 focus: rounded-full cursor-pointer ${backObj[each?.title]}`} />
                                        ))}
                                    </ul>
                                </div>
                                <h3 className="text-[14px] font-[600] my-[10px] ">Size</h3>
                                {
                                    stars.map((star, index) => (
                                        <div key={index} className="mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem]">
                                            <input
                                                className="relative bg-[#febd69] float-left rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]  border-[0.125rem]"
                                                type="checkbox"
                                                onChange={(e) => { e.target.checked === true ? setFilters({ ...filters, totalRating: [...filters.totalRating as string[], e.target.value] }) : removeTotalRating(e.target.value); }}
                                                value={star.value} id={star?.name} />
                                            <label
                                                className="inline-block text-[#777777] hover:bg-slate-100 dark:text-skin-base dark:hover:text-skin-light w-full pl-[0.15rem] hover:cursor-pointer"
                                                htmlFor={star?.name}>
                                                {star?.value}
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="  py-[10px] px-[15px]">
                            <h3 className="text-skin-base text-[1rem] font-[600] space-x-2 mb-[20px] ">Brands</h3>
                            {brands && brands.map((brand) => (
                                <div key={brand?._id} className="mb-[0.125rem]  min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                        className="relative float-left  rounded-sm -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-[0.125rem]  "
                                        type="checkbox"
                                        onChange={(e) => { e.target.checked === true ? setFilters({ ...filters, brand: [...filters.brand as string[], e.target.value] }) : removeBrand(e.target.value) }}
                                        value={brand?._id}
                                        id={brand?.title} />
                                    <label
                                        className="inline-block text-[#777777] dark:text-skin-base dark:hover:text-skin-light w-full pl-[0.15rem] hover:cursor-pointer hover:bg-slate-100"
                                        htmlFor={brand?.title}>
                                        {brand?.title}
                                    </label>
                                </div>

                            ))}


                        </div>
                        <div className="  py-[10px] px-[15px]">
                            <h3 className="text-skin-base text-[1rem] font-[600] space-x-2 mb-[20px] ">Product Tags</h3>
                            <div>
                                <div className="flex flex-wrap items-center">
                                    <span
                                        className="flex select-none flex-wrap pl-3 pr-2 py-1 m-1 justify-between items-center text-[14px] font-medium rounded-md cursor-pointer bg-[#e5e4e4]  text-[#434343] hover:bg-purple-500 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
                                        laptop <RxCross2 className="ml-1 rounded-full" size={15} />
                                    </span>
                                    <span
                                        className="flex select-none flex-wrap pl-3 pr-2 py-1 m-1 justify-between items-center text-[14px] font-medium rounded-md cursor-pointer bg-[#e5e4e4]  text-[#434343] hover:bg-purple-500 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
                                        mobile <RxCross2 className="ml-1 rounded-full" size={15} />
                                    </span>
                                    <span
                                        className="flex select-none flex-wrap pl-3 pr-2 py-1 m-1 justify-between items-center text-[14px] font-medium rounded-md cursor-pointer bg-[#e5e4e4]  text-[#434343] hover:bg-purple-500 hover:text-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-100">
                                        charger <RxCross2 className="ml-1 rounded-full" size={15} />
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="  py-[10px] px-[15px]">
                            <h3 className="text-skin-base text-[1rem] font-[600] space-x-2 mb-[20px] ">Random Product</h3>
                            <div>
                                <div className="flex w-full gap-5 items-center border-b py-2 border-[#777777]">
                                    <div className="w-3/12 mb-3">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="w-9/12 mb-3">
                                        <h6 className="font-[600] text-skin-base h-[50px] m-0 font-Rubik overflow-hidden">
                                            Head phone with yellow color and good sound quality </h6>
                                        <div className="flex"><RatingStar stars={3.9} /></div>
                                        <span className=" text-skin-base font-[500] text-[1rem] font-Rubik"><LiaRupeeSignSolid className="inline text-[1.2rem]" />1000</span>
                                    </div>
                                </div>
                                <div className="flex gap-5 w-full items-center border-b py-2 border-[#777777]">
                                    <div className="w-3/12 mb-3">
                                        <img src={img} alt="" />
                                    </div>
                                    <div className="w-9/12 mb-3 ">
                                        <h6 className="font-[600] text-skin-base  h-[50px] m-0 font-Rubik overflow-hidden">
                                            Head phone with yellow color and good sound quality </h6>
                                        <div className="flex"><RatingStar stars={3.9} /></div>
                                        <span className=" text-skin-base font-[500] text-[1rem] font-Rubik"><LiaRupeeSignSolid className="inline text-[1.2rem]" />1000</span>
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