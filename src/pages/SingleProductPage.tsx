import { useState, useEffect, useLayoutEffect } from "react"
import { AiFillHeart, AiFillThunderbolt, AiOutlineHome, AiOutlineHeart, AiOutlineMinus } from "react-icons/ai"
import { HiOutlineChevronRight } from "react-icons/hi"
import ReviewCard from "../components/Cards/ReviewCard"
import RatingStar from "./Rating"
import { LiaRupeeSignSolid } from "react-icons/lia"
import { FaCircle } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

import { Link, useParams } from "react-router-dom"
import { productDetails } from "../static/staticData"
import PopularProduct from "../components/Home/PopularProduct"
import CreateReview from "../components/Product/CreateReview"
import { AppDispatch, RootState } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { getSingleProduct } from "../redux/reducers/product/productSlice"

const SingleProductPage = () => {
    const dispatch: AppDispatch = useDispatch()
    const { singleProduct } = useSelector((state: RootState) => state.product)
    console.log(singleProduct);
    const pageId = useParams()
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [Link]);


    useEffect(() => {
        dispatch(getSingleProduct(pageId?.id as string))
    }, [])


    const [count, setCount] = useState(1)
    const [addtoCart, setAddToCart] = useState(false)
    const [image, setImage] = useState(productDetails[0].images[0])
    const [isLiked, setIsLiked] = useState(false)

    const handleRadioChange = (e: any) => {
        console.log(e.target.value);
    };


    return (
        <div className="bg-[#fffff7] w-full">
            <section className="sm:mx-5 ">
                <section className="related-produts bg-red-50m0 px-5 py-5 ">
                    {productDetails.map((each, index) => (
                        (
                            <main key={index}>
                                <div className="flex items-center justify-start text-[#525258]">
                                    <AiOutlineHome className="inline mr-2" size={20} />
                                    <Link to="/"> Home</Link>
                                    <HiOutlineChevronRight size={20} className="inline" />
                                    <Link to="/products">Products</Link>
                                    <HiOutlineChevronRight size={20} className="inline font-[400]    " />
                                    <span>{each.title.split(' ').slice(0, 2)}</span>
                                </div>
                                <section className="block lg:flex gap-5 w-full mt-5">
                                    <div className="lg:w-1/2">
                                        <div className="flex gap-4">
                                            <div className="flex flex-col justify-center gap-2">
                                                {each.images.map((img, idx) => (
                                                    <div key={idx} className=" bg-gray-300 rounded-md w-[80px] h-[80px] p-1">
                                                        <img onMouseEnter={() => setImage(img)} className="h-full max-w-full rounded-lg max-h-[100px] cursor-pointer m-auto" src={img} alt="" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="bg-slate-300 rounded-md flex w-full shadow-lg min-h-[350px] max-h-[500px] items-center justify-center p-5">
                                                <img className="max-w-full rounded-lg h-full" src={image} alt="" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="lg:w-1/2 mt-5 lg:mt-0">
                                        <p className="text-[1.2rem] p-0 m-0 text-justify tracking-wide font-[450]">
                                            {each.title}
                                        </p>
                                        <div className="flex items-center text-[1.5rem]">
                                            <RatingStar stars={3.9} />
                                            <span className="font-[500] mx-3">({each.rating})</span>
                                            <span className="text-[#777777] text-[1.2rem]">(305 reviews)</span>
                                        </div>
                                        <div className="block md:flex items-center">
                                            <span className="text-[1.4rem] font-[450] mr-5 leading-loose"><LiaRupeeSignSolid size={25} className="inline" />{each.price}</span>
                                            <span className="text-[1.4rem] font-[400] mr-5 leading-loose line-through italic"><LiaRupeeSignSolid size={25} className="inline line-through" />90000</span>
                                            <div className="block md:inline text-[1rem] w-fit font-[400] bg-gray-200 px-2 rounded-md py-2 text-[#070707]">
                                                <AiFillThunderbolt size={20} className="inline mr-1 " />Ending In:
                                                <span className="font-[500]">1h 17m 36s</span>
                                            </div>
                                        </div>
                                        {/* <!--Default radio without label--> */}
                                        <div className="">
                                            <p className="font-semibold tracking-Fwide text-[1rem]">Choose your color: <span className="font-extralight">dianamic red</span></p>
                                            <div className="flex w-max gap-4">
                                                {each.colors.map((color, id) => (
                                                    <div key={id} className="inline-flex items-center">
                                                        <label
                                                            className="relative flex cursor-pointer items-center rounded-full p-3"
                                                            htmlFor={color}
                                                        >
                                                            <input
                                                                id={color}
                                                                name="color"
                                                                value={color}
                                                                type="radio"
                                                                // checked={isChecked}
                                                                onChange={handleRadioChange}
                                                                className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-black ${color === "black" ? "text-black" : `text-${color}-500 checked:border-${color}-500 checked:before:bg-${color}-500`} transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10`}
                                                            />
                                                            <div className={`pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 ${color === "black" ? "text-black" : `text-${color}-500`} opacity-0 transition-opacity peer-checked:opacity-100`}>
                                                                <FaCircle />
                                                            </div>
                                                        </label>
                                                    </div>

                                                ))}

                                            </div>
                                        </div>

                                        <div className="flex items-center h-fit w-fit">
                                            {addtoCart === true ? (

                                                <div className="border my-5 rounded-md border-black w-fit p-1 flex items-center">
                                                    <button onClick={() => count > 1 ? setCount(count - 1) : setAddToCart(false)} className=" p-4 rounded-md bg-gradient-to-tr from-purple-600 to-pink-400" ><AiOutlineMinus className="" size={20} /></button>
                                                    <span className="p-4">{count}</span>
                                                    <button onClick={() => setCount(count + 1)} className="p-4  rounded-md bg-gradient-to-tr from-pink-600 to-purple-400"><FiPlus className="" size={20} /></button>
                                                </div>

                                            ) :
                                                (
                                                    <button onClick={() => setAddToCart(true)} className="px-5 py-3 my-5 bg-gradient-to-tr from-purple-600 to-pink-400 text-lg font-[500] shadow-inner shadow-pink-500/20 hover:shadow-pink-500/40  text-white transition-all scale-100 hover:scale-110 delay-75 rounded-md">Add to Cart</button>
                                                )}
                                            <span onClick={() => setIsLiked(!isLiked)} className="cursor-pointer group h-fit transition-all delay-100 hover:bg-pink-600 p-4 bg-gray-300 rounded-md ml-5">

                                                {isLiked ? <AiFillHeart className="inline text-purple-600 group-hover:text-blue-400 transition-all scale-100 hover:scale-110 delay-75" size={25} /> :
                                                    <AiOutlineHeart className="inline " size={25} />}
                                            </span>
                                        </div>
                                        <div className="">
                                            <div className="flex gap-5 items-center my-2">
                                                <h3 className="text-[.91rem] text-[#1c1c1b] mb-0 font-[450]">Type :</h3>
                                                <p className="text-[.85rem] mb-0 col-auto">Watch</p>
                                            </div>
                                            <div className="flex gap-5 items-center my-2">
                                                <h3 className="text-[.91rem] text-[#1c1c1b] mb-0 font-[450]">Category :</h3>
                                                <p className="text-[.85rem] mb-0 col-auto">Electronics</p>
                                            </div>
                                            <div className="flex gap-5 items-center my-2">
                                                <h3 className="text-[.91rem] text-[#1c1c1b] mb-0 font-[450]">Brand :</h3>
                                                <p className="text-[.85rem] mb-0">Boat</p>
                                            </div>

                                        </div>
                                        <div className="">
                                            <h3 className="text-[.91rem] text-[#1c1c1b] mb-0 font-[450]">Tags :</h3>
                                            <div className='my-3 flex flex-wrap -m-1'>
                                                <span
                                                    className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:text-white hover:bg-gradient-to-tr from-pink-600 to-purple-400 rounded px-4 py-2 font-medium leading-loose cursor-pointer dark:text-gray-300">
                                                    Watches <RxCross2 className="ml-2" size={15} />
                                                </span>
                                                <span
                                                    className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:text-white hover:bg-gradient-to-tr from-pink-600 to-purple-400 rounded px-4 py-2 font-medium leading-loose cursor-pointer dark:text-gray-300">
                                                    Electronics <RxCross2 className="ml-2" size={15} />
                                                </span>

                                                <span
                                                    className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:text-white hover:bg-gradient-to-tr from-pink-600 to-purple-400 rounded px-4 py-2 font-medium leading-loose cursor-pointer dark:text-gray-300">
                                                    Popular <RxCross2 className="ml-2" size={15} />
                                                </span>
                                                <span
                                                    className="m-1 flex flex-wrap justify-between items-center text-xs sm:text-sm bg-gray-200 hover:text-white hover:bg-gradient-to-tr from-pink-600 to-purple-400 rounded px-4 py-2 font-medium leading-loose cursor-pointer dark:text-gray-300">
                                                    Best Selling <RxCross2 className="ml-2" size={15} />
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div className="my-5">
                                    <p className="border-b font-[450] text-[1rem] italic ">description</p>
                                    <div className="text-justify my-5">
                                        <h3 className="font-[550] text-[1.52rem] line-clamp-1">ASUS Vivobook S 14 Intel EVO H-Series Core i5 12th Gen 12500H </h3>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, eaque similique? Maiores minus
                                        praesentium quibusdam laborum architecto incidunt dolorum et culpa fugit nam eum eius, vero numqu
                                        am eaque reiciendis ipsum, natus possimus, tempore aut. Quasi est esse repellendus quia itaque op
                                        tio corporis molestiae ipsa enim, ea officiis, aliquid nihil qui perspiciatis voluptatum minus de
                                        bitis a deserunt quas sint mollitia ad. Asperiores recusandae nulla excepturi a dolore illum expl
                                        icabo culpa saepe molestiae sint at, rem cum tempora eligendi id libero cumque animi officiis. Do
                                        lorem nostrum excepturi eveniet molestiae architecto vero similique ex aspernatur, tenetur deseru
                                        nt, velit amet odit autem sunt neque?
                                    </div>
                                    {each.detailImg.map((detail, ind) => (
                                        <div key={ind}>
                                            <div className={`w-full ${detail.color === "yellow" ? "bg-yellow-400" : detail.color === "red" ? "bg-red-400" : detail.color === "black" ? "bg-black text-white" : "bg-white"}  h-[400px] p-5 flex justify-center items-center`}>
                                                <div className={`w-1/2 h-full flex justify-center`}>
                                                    <img src={detail.img} alt="" className="h-full " />
                                                </div>
                                                <div className="w-1/2 ">
                                                    <h3 className="font-[550] text-[1.5rem]">{detail.heading}</h3>
                                                    <p>{detail.desc}</p>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </main>
                        )
                    ))}


                </section>
            </section>
            <section className="sm:mx-5 my-5 shadow-lg">
                <h3 className="mx-5 font-[550] text-[2rem]">Related Products</h3>
                <PopularProduct />
            </section>
            <section className="sm:mx-5 my-5 shadow-lg">
                <CreateReview />
            </section>
            <section className="sm:mx-5">
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
            </section>
        </div >
    )
}

export default SingleProductPage