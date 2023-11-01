import { useDispatch, useSelector } from "react-redux"
import { MoonLoader, SyncLoader } from "react-spinners"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, CSSProperties, useCallback, useLayoutEffect } from "react"


import { AiFillHeart, AiFillThunderbolt, AiOutlineHome, AiOutlineHeart, AiOutlineMinus } from "react-icons/ai"
import { HiOutlineChevronRight } from "react-icons/hi"
import { LiaRupeeSignSolid } from "react-icons/lia"
import { FaCircle } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

import ReviewCard from "../components/Cards/ReviewCard"
import RatingStar from "./Rating"
import PopularProduct from "../components/Home/PopularProduct"
import CreateReview from "../components/Product/CreateReview"
import { AppDispatch, RootState } from "../redux/store"
import { addToWishlist, getAllWishlist, getSingleProduct } from "../redux/reducers/product/productSlice"
import { addToCart, descreaseCart, removeFromCart } from "../redux/reducers/cart/cartSlice"
import { Image } from "../redux/reducers/blogs/blogSlice"

import { borderObj, colorObj, backObj } from "../static/staticData"

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

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
const SingleProductPage = () => {
    const dispatch: AppDispatch = useDispatch()
    const pageId = useParams()
    const navigate = useNavigate()
    const { singleProduct, wishlist, isLoading, isReviewAdded } = useSelector((state: RootState) => state.product)
    const { user } = useSelector((state: RootState) => state.user)
    const { cartItems } = useSelector((state: RootState) => state.cart)

    const [loading, setLoading] = useState(false)

    const [image, setImage] = useState(0)
    const [color, setColor] = useState(singleProduct?.color[0]?.title)
    const currItem = cartItems.find((item: any) => item._id === singleProduct!?._id);

    const initialTimeInSeconds = 2 * 24 * 60 * 60;
    const [time, setTime] = useState(initialTimeInSeconds);

    useEffect(() => {
        const interval = setInterval(() => {
            if (time > 0) {
                setTime(time - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [Link]);
    const formatTime = (seconds: number) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const remainingSeconds = seconds % 60;

        return `${String(days).padStart(2, "0")}d ${String(hours).padStart(
            2,
            "0"
        )}h ${String(minutes).padStart(2, "0")}m ${String(
            remainingSeconds
        ).padStart(2, "0")}s`;
    };



    const ToWishlist = useCallback((id: string) => {
        if (!user) {
            navigate('/login')
        } else {
            setLoading(true);
            dispatch(addToWishlist(id)).then(() => {
                setLoading(false);
            });
        }
    }, [dispatch, wishlist]);

    useEffect(() => {
        dispatch(getSingleProduct(pageId?.id as string))
        if (user)
            dispatch(getAllWishlist())
    }, [pageId?.id, dispatch, isReviewAdded])

    const handleRadioChange = (e: any) => {
        setColor(e.target.value);
    };

    const handleCart = () => {
        if (!user) {
            navigate('/login')
        } else {
            dispatch(addToCart(singleProduct))
        }
    }

    const handleRemove = () => {
        if (currItem?.cartQuantity === 1) {
            dispatch(removeFromCart(singleProduct))
        } else {
            dispatch(descreaseCart(singleProduct))
        }
    }


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
            <div className="bg-skin-background w-full">
                <section className="sm:mx-5 ">
                    <section className="related-produts bg-red-50m0 px-5 py-5 ">
                        <main >
                            <div className="flex items-center justify-start text-[#525258] dark:text-white">
                                <Link to="/">
                                    <AiOutlineHome className="inline mr-2 mb-1" size={20} />
                                    Home</Link>
                                <HiOutlineChevronRight size={20} className="inline" />
                                <Link to="/products">Products</Link>
                                <HiOutlineChevronRight size={20} className="inline font-[400]    " />
                                <span>{singleProduct?.title.split(' ').slice(0, 2)}</span>
                            </div>
                            <section className="block lg:flex gap-5 w-full mt-5">
                                <div className="lg:w-1/2">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col justify-center gap-2">
                                            {singleProduct?.images?.map((img: Image, idx: number) => (
                                                <div key={idx} className=" bg-gray-300 rounded-md w-[80px] h-[80px] p-1">
                                                    <img onMouseEnter={() => setImage(idx)} className="h-full max-w-full rounded-lg max-h-[100px] cursor-pointer m-auto"
                                                        src={img?.url} alt="sideImages" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-slate-300 rounded-md flex w-full shadow-lg min-h-[350px] max-h-[500px] items-center justify-center p-5">
                                            <img className=" max-w-full rounded-lg h-full" src={singleProduct?.images[image]?.url} alt="Main-Image" />
                                        </div>
                                    </div>

                                </div>

                                <div className="lg:w-1/2 text-skin-base mt-5 lg:mt-0">
                                    <p className="text-[1.2rem]  p-0 m-0 text-justify tracking-wide font-[450]">
                                        {singleProduct?.title}
                                    </p>
                                    <div className="flex items-center text-[1.5rem]">
                                        <RatingStar stars={3.9} />
                                        <span className="font-[500] mx-3">({singleProduct?.totalRating})</span>
                                        <span className="text-[#777777] text-[1.2rem]">({singleProduct?.ratings?.length} reviews)</span>
                                    </div>
                                    <div className="block md:flex items-center">
                                        <span className="text-[1.4rem] font-[450] mr-5 leading-loose"><LiaRupeeSignSolid size={25} className="inline" />{singleProduct?.price}</span>
                                        <span className="text-[1.4rem] font-[400] mr-5 leading-loose line-through italic"><LiaRupeeSignSolid size={25} className="inline line-through" />{singleProduct!?.price + 0.3 * singleProduct!?.price}</span>
                                        <div className="block md:inline text-[1rem] w-fit font-[400] bg-gray-200 px-2 rounded-md py-2 text-[#070707]">
                                            <AiFillThunderbolt size={20} className="inline mr-1 " />Ending In:
                                            <span className="font-[500] ml-2">{formatTime(time)}</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold tracking-Fwide text-[1rem]">Choose your color: <span className="font-medium">{color}</span></p>
                                        <div className="flex items-center w-max gap-4">
                                            {singleProduct?.color.map((color, id) => (
                                                <div key={id} className="inline-flex items-center">
                                                    <label
                                                        className="relative flex sm:cursor-pointer items-center rounded-full p-3"
                                                        htmlFor={color?.title}
                                                    >
                                                        <input
                                                            id={color?.title}
                                                            name="color"
                                                            value={color?.title}
                                                            type="radio"
                                                            // checked={color}
                                                            onChange={handleRadioChange}
                                                            className={`text-skin-light ${colorObj[color?.title]}  ${borderObj[color?.title]} before:content[''] peer relative h-5 w-5 sm:cursor-pointer appearance-none rounded-full border border-black  dark:border-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10`}
                                                        />
                                                        <div className={`${colorObj[color?.title]}  pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0 transition-opacity peer-checked:opacity-100`}>
                                                            <FaCircle />
                                                        </div>
                                                    </label>
                                                </div>

                                            ))}
                                            <p>select one color ( * )</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center h-fit w-fit">
                                        {currItem?.cartQuantity >= 1 ? (
                                            <div className="border my-5 rounded-md border-black w-fit p-1 flex items-center">
                                                <button onClick={handleRemove} className=" p-4 rounded-md bg-gradient-to-tr from-purple-600 to-pink-400" >
                                                    <AiOutlineMinus className="" size={20} />
                                                </button>
                                                <span className="p-4">{currItem.cartQuantity}</span>
                                                <button onClick={handleCart} className="p-4  rounded-md bg-gradient-to-tr from-pink-600 to-purple-400">
                                                    <FiPlus className="" size={20} />
                                                </button>
                                            </div>
                                        ) :
                                            (
                                                <button onClick={handleCart} className="select-none px-5 py-3 my-5 bg-gradient-to-tr from-purple-600 to-pink-400 text-lg font-[500] shadow-inner shadow-pink-500/20 hover:shadow-pink-500/40  text-white transition-all scale-100 hover:scale-110 delay-75 rounded-md">
                                                    Add to Cart</button>
                                            )}
                                        <span onClick={() => ToWishlist(singleProduct?._id as string)} className="cursor-pointer group h-fit transition-all delay-100 hover:bg-pink-600 p-4 bg-gray-300 rounded-md ml-5">
                                            {loading ?
                                                <MoonLoader
                                                    size={20}
                                                    color="#361AE3"
                                                    speedMultiplier={1}
                                                    loading={loading}
                                                    cssOverride={override}
                                                    aria-label="Loading Spinner"
                                                    data-testid="loader"
                                                />
                                                : wishlist?.find((id: any) => id?._id === singleProduct?._id)
                                                    ? <AiFillHeart className="text-red-500 group-hover:text-blue-500 transition-all group-hover:scale-110" size={25} /> : <AiOutlineHeart size={25} />}
                                        </span>
                                    </div>
                                    <div className="">
                                        <div className="flex gap-5 items-center my-2">
                                            <h3 className="text-[.91rem] text-[#1c1c1b] dark:text-[#fffff7] mb-0 font-[450]">Seller :</h3>
                                            <p className="text-[.85rem] mb-0 col-auto">{singleProduct?.seller?.firstname}</p>
                                        </div>
                                        <div className="flex gap-5 items-center my-2">
                                            <h3 className="text-[.91rem] text-[#1c1c1b] dark:text-[#fffff7] mb-0 font-[450]">Category :</h3>
                                            <p className="text-[.85rem] mb-0 col-auto">{singleProduct?.category?.title}</p>
                                        </div>
                                        <div className="flex gap-5 items-center my-2">
                                            <h3 className="text-[.91rem] text-[#1c1c1b] dark:text-[#fffff7] mb-0 font-[450]">Brand :</h3>
                                            <p className="text-[.85rem] mb-0">{singleProduct?.brand?.title}</p>
                                        </div>

                                    </div>
                                    <div className="">
                                        <h3 className="text-[.91rem] text-[#1c1c1b] dark:text-[#fffff7] mb-0 font-[450]">Tags :</h3>
                                        <div className='my-3 flex flex-wrap -m-1'>
                                            {
                                                singleProduct?.tags?.map((tag, index) => (
                                                    <span key={index}
                                                        className="tag">
                                                        {tag} <RxCross2 className="ml-2" size={15} />
                                                    </span>

                                                ))
                                            }

                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="my-5">
                                <p className="border-b text-skin-base font-[550] text-[1.5rem] italic ">description</p>
                                <div className="text-justify my-5">
                                    <div className="lowercase text-skin-base my-2 font-[450] text-justify text-[1.2rem]" dangerouslySetInnerHTML={{ __html: singleProduct?.description as string }}></div>

                                </div>
                                {singleProduct?.images.map((detail, ind) => {
                                    if (ind < 3) {
                                        return (
                                            <div key={ind}>
                                                <div className={`w-full ${backObj[singleProduct?.color[ind]?.title] ? backObj[singleProduct?.color[ind]?.title] : "bg-yellow-300"} p-5 bg-opacity-40 border md:flex space-y-3 border-black block text-center justify-center items-center`}>
                                                    <div className={`md:w-1/2 h-full flex justify-center`}>
                                                        <img src={detail.url} alt="" className="sm:max-h-[300px] max-h-[200px] w-auto " />
                                                    </div>
                                                    <div className="md:w-1/2 ">
                                                        <h3 className="font-[550] text-[1.5rem] text-skin-base">{singleProduct?.title}</h3>
                                                        <p className="line-clamp-3" dangerouslySetInnerHTML={{ __html: singleProduct?.description as string }}></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </main>
                    </section>
                </section>

                <section className="sm:mx-5 my-5 shadow-lg">
                    <h3 className="mx-5 font-[550] text-[2rem]">Related Products</h3>
                    <PopularProduct />
                </section>
                <section className="sm:mx-5 my-5 shadow-lg">
                    <CreateReview prodId={singleProduct?._id as string} />
                </section>
                <section className="sm:mx-5">
                    {singleProduct?.ratings?.map((rating, index) => (
                        <ReviewCard key={index} rating={rating} />
                    ))}

                </section>
            </div >


        </>
    )
}

export default SingleProductPage