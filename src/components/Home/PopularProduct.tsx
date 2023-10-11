import { popularProducts } from "../../static/staticData"
import ProductCard from "../Cards/ProductCard"

import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SampleNextArrow = (props: any) => {
    const { className, style, onClick, currentSlide, slideCount } = props;
    const isLastSlide = currentSlide === slideCount - 1;
    return (
        <div className={`${className}  absolute right-0 top-[50%] p-[20px] bg-black  ${isLastSlide ? 'hidden' : ''}  `} style={{ ...style, zIndex: '1', display: 'flex', border: '2px solid white', height: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }} onClick={onClick} />
    )
}
const SamplePrevArrow = (props: any) => {
    const { className, style, onClick, currentSlide } = props;
    const isFirstSlide = currentSlide === 0;
    return (
        <div className={`${className}  absolute left-0 top-[50%] p-[20px] bg-black ${isFirstSlide ? 'hidden' : ''} `} style={{ ...style, zIndex: '1', display: 'flex', border: '2px solid white', height: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }} onClick={onClick} />
    )
}

const PopularProduct = () => {
    const responsive = [
        {
            breakpoint: 1850,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: false,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
            }
        },
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: false,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
            }
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
            }
        },
        {
            breakpoint: 875,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: false,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        }
    ]
    return (
        <>
            <div className="rounded-md sm:block justify-between sm:m-[20px] select-none">
                <h3 className="font-[550] text-[1.5rem] hover:underline w-fit m-auto sm:m-px">Popular Products</h3>

                <Slider responsive={responsive} >
                    {
                        popularProducts.map((item, index) => (
                            <ProductCard key={index} img={item.image} price={item.price} title={item.title} />
                        ))
                    }

                </Slider>

            </div >

        </>
    )
}

export default PopularProduct