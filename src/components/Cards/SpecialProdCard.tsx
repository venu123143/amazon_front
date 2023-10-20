import { useState } from "react";
import { Link } from "react-router-dom";
import watch from "../../assets/images/watch.jpg"

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { carousel } from "../../static/staticData";

import RatingStar from "../../pages/Rating"
import Slider from "react-slick";

const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className}  480px:visible invisible absolute right-0 top-[50%] px-3 bg-black  hover:bg-black opacity-50`}
            style={{ ...style, zIndex: '1', display: 'flex', border: '2px solid white', height: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}
            onClick={onClick} />
    )
}

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} 480px:visible invisible absolute  left-0 top-[50%] px-3 bg-black hover:bg-black opacity-50`}
            style={{ ...style, zIndex: '1', display: 'flex', border: '2px solid white', height: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}
            onClick={onClick} />
    )
}


const SpecialProdCard = () => {
    const [click, setClick] = useState(watch)
    const [like, setLike] = useState(false)
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
    return (
        <>
            <section className="w-full h-[300px] p-[10px] rounded-lg shadow-lg">
                <div className="flex w-full h-full items-center">
                    <div className="w-1/2 h-full relative">
                        <span className="absolute left-0 top-0 bg-orange-500 rounded-full px-[5px]">-33%</span>
                        <div className="flex  h-[65%]  items-center justify-center">
                            <img src={click} alt="img" className=" max-h-[80%]" />
                        </div>
                        <div className="">
                            <Slider responsive={responsive}>
                                {
                                    carousel.map((item, index) => (
                                        <div key={index} onClick={() => Connection(item)} className="border overflow-hidden focus:border-black">
                                            <img src={item} alt="imgCarousel" className="h-[70px] m-auto" />
                                        </div>
                                    ))
                                }


                            </Slider>
                        </div>
                    </div>
                    <div className="w-1/2 h-full  relative">
                        <div className="absolute tooltip cursor-pointer right-0 top-0" onClick={() => setLike(!like)}>
                            {like ? <AiFillHeart className="text-red-500" size={25} /> : <AiOutlineHeart size={25} />}
                            <span className="tooltiptext">Wishlist</span>
                        </div>
                        <h5 className="absolute left-0 top-2 text-[0.91rem] text-[#bf4800]">Boat</h5>
                        <h6 className="mt-[40px] text-[.81rem] font-[550] text-[#1c1b1b] w-full h-[60px] overflow-hidden">Boat watch  series with lether stip inside and phone message.</h6>
                        <div className="block xl:flex justify-between my-[5px] items-center">
                            <div className="flex">
                                <RatingStar stars={3.9} />
                            </div>
                            <p className="">304 reviews</p>
                        </div>
                        <div className="flex">
                            <p className="mr-[20px] text-[#bf4800] ">$ 10000</p>
                            <p className="line-through">$ 200</p>
                        </div>
                        <div className=" flex w-full items-center justify-between">
                            <p className="hidden lg:block"><b>5 </b>days</p>
                            <div className="flex h-auto w-auto items-center  justify-between ">
                                <span className="w-[30px] h-[30px] mr-2 justify-center flex items-center text-[.91rem] rounded-full bg-red-400">22</span>
                                <span className="w-[30px] h-[30px] mr-2 justify-center flex items-center  text-[.91rem] rounded-full bg-red-400">11</span>
                                <span className="w-[30px] h-[30px] justify-center flex items-center text-[.91rem]  rounded-full bg-red-400">11</span>
                            </div>
                        </div>
                        <p className="absolute bottom-14 left-0 font-400 text-[#777777] text-[.81rem]">Products Left: 500</p>
                        <div className=" absolute bottom-12  w-full bg-gray-200 rounded-full h-1 shadow-lg dark:bg-gray-700">
                            <div className="bg-green-600 hover:bg-orange-600 h-1 shadow-lg rounded-full" style={{ width: "64%" }}></div>
                        </div>
                        <Link to="/" className="absolute bottom-0 left-0 button text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                            Add to Cart</Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SpecialProdCard