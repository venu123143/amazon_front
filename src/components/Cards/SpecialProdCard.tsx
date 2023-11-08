import { useState, CSSProperties, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import RatingStar from "../../pages/Rating"
import Slider from "react-slick";
import { IProductState, addToWishlist } from "../../redux/reducers/product/productSlice";
import { MoonLoader } from "react-spinners";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/reducers/cart/cartSlice";
import { LiaRupeeSignSolid } from "react-icons/lia";

export const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}  480px:visible invisible absolute right-0 top-[50%] px-3 bg-black  hover:bg-black opacity-50`}
            style={{ ...style, zIndex: '1', display: 'flex', border: '2px solid white', height: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}
            onClick={onClick} />
    )
}

export const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} 480px:visible invisible absolute  left-0 top-[50%] px-3 bg-black hover:bg-black opacity-50`}
            style={{ ...style, zIndex: '1', display: 'flex', border: '2px solid white', height: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}
            onClick={onClick} />
    )
}

// const isLoading = true
const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const SpecialProdCard: React.FC<{ data: IProductState, wishlist?: any }> = ({ data, wishlist }) => {
    const { user } = useSelector((state: RootState) => state.user)
    const navigate = useNavigate()
    const [click, setClick] = useState({ url: data.images && data?.images[0]?.url })
    const dispatch: AppDispatch = useDispatch()
    const [isLoading, setLoading] = useState(false)

    const initialTimeInSeconds = 1 * 24 * 60 * 60;
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

    const formatTime = (seconds: number) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const sec = seconds % 60;
        return { days, hours, minutes, sec }
    };
    const ToWishlist = useCallback(
        (id: string) => {
            if (!user) {
                navigate('/login')
            } else {
                setLoading(true);
                dispatch(addToWishlist(id)).then(() => {
                    setLoading(false);
                });
            }
        },
        [dispatch, wishlist]
    );
    const responsive = [
        {
            breakpoint: 3050,
            settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 2,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
            }
        },
        {
            breakpoint: 1850,
            settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
            }
        },
        {
            breakpoint: 640,
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
            }
        },
        {
            breakpoint: 400,
            settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
            }
        }
    ];
    const Connection = (item: any) => {
        setClick(item);
    }
    const handleCart = () => {
        if (!user) {
            navigate('/login')
        } else {
            dispatch(addToCart(data))
        }
    }
    return (
        <>
            <section className="bg-skin-background  border hover:shadow-slate-300 w-full h-[300px] p-[10px] rounded-lg shadow-lg">
                <div className="flex w-full h-full items-center gap-3">
                    <div className="w-1/2 h-full relative">
                        <span className="absolute left-0 top-0 bg-orange-500 rounded-full px-[5px]">-30%</span>
                        <Link to={`/product/${data?._id}`} className="flex  h-[65%]  items-center justify-center">
                            <img src={click.url} alt="img" className=" max-h-[80%]" />
                        </Link>
                        <div className="">
                            <Slider responsive={responsive}>
                                {
                                    data?.images && data?.images.map((item, index) => (
                                        <div key={index} onClick={() => Connection(item)} className="border overflow-hidden focus:border-black">
                                            <img src={item.url} alt="imgCarousel" className="h-[70px] m-auto" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                        <p className="400px:hidden block font-400 text-[#777777] text-[.81rem]">Products Left: {data?.quantity - data?.sold}</p>
                    </div>
                    <div className="w-1/2 h-full  relative">
                        <div onClick={() => ToWishlist(data?._id as string)} className="bg-[#c4bfbf] p-2 rounded-full absolute tooltip cursor-pointer right-0 top-0" >
                            {isLoading ?
                                <MoonLoader
                                    size={20}
                                    color="#361AE3"
                                    speedMultiplier={1}
                                    loading={isLoading}
                                    cssOverride={override}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                                : wishlist?.find((id: any) => id?._id === data?._id)
                                    ? <AiFillHeart className="text-red-500" size={25} /> : <AiOutlineHeart size={25} />}
                            <span className="tooltiptext">Wishlist</span>
                        </div>
                        <Link to={`/product/${data?._id}`} >
                            <h5 className="absolute left-0 top-2 text-[0.91rem] text-skin-backgroundHover">{data?.brand?.title}</h5>
                            <h6 className="mt-[40px] text-[.81rem] font-[550] text-skin-base w-full h-[60px] line-clamp-3 overflow-hidden">{data?.title}</h6>
                            <div className="block xl:flex text-skin-base justify-between my-[5px] items-center">
                                <div className="flex">
                                    <RatingStar stars={data?.totalRating} />
                                </div>
                                <p className="">{data?.ratings?.length} reviews</p>
                            </div>
                            <div className="flex justify-between flex-grow-0  text-skin-base">
                                <p className=" text-[.91rem]"><LiaRupeeSignSolid className="inline text-[1.2rem]" /> {data?.price}</p>
                                <p className="line-through text-[.91rem]"><LiaRupeeSignSolid className="inline text-[1.2rem]" />{data?.price + data?.price * 0.3}</p>
                            </div>
                            <div className=" flex w-full items-center justify-between">
                                <p className="hidden lg:block text-skin-base"><b>{formatTime(time).days + 1}</b> day</p>
                                <div className="mt-5 400px:m-auto flex h-auto w-auto items-center  justify-between ">
                                    <span className="w-[30px] h-[30px] mr-2 justify-center flex items-center text-[.91rem] rounded-full bg-orange-400">{formatTime(time).hours}</span>
                                    <span className="w-[30px] h-[30px] mr-2 justify-center flex items-center  text-[.91rem] rounded-full bg-blue-400">{formatTime(time).minutes}</span>
                                    <span className="w-[30px] h-[30px] justify-center flex items-center text-[.91rem]  rounded-full bg-green-400">{formatTime(time).sec}</span>
                                </div>
                            </div>
                            <p className="400px:block hidden absolute bottom-14 left-0 font-400 text-[#777777] text-[.81rem]">Products Left: {data?.quantity - data?.sold}</p>
                            <div className="400px:block hidden absolute bottom-12  w-full bg-gray-200 rounded-full h-1 shadow-lg dark:bg-gray-700">
                                <div className="bg-green-600 hover:bg-orange-600 h-1 shadow-lg rounded-full"
                                    style={{ width: `${(data.quantity - data?.sold) / data?.quantity * 100}%` }}
                                ></div>
                            </div>
                        </Link>
                        <button onClick={handleCart} className="absolute bottom-0 left-0 button text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                            Add to Cart</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SpecialProdCard