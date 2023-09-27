// import React from 'react'
import Slider from "react-slick"
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div className={`${className}  absolute right-0 top-[50%] p-[20px] bg-transparent  `} style={{ ...style, zIndex: '1', display: 'flex', border: '2px solid white', height: '30vh', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }} onClick={onClick} />
    )
}
const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
        <div className={`${className}  absolute left-0 top-[50%] p-[20px]`} style={{ ...style, zIndex: '1', display: 'flex', border: '2px solid white', height: '30vh', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }} onClick={onClick} />
    )
}

const Carousel = () => {
    const responsive = [
        {
            breakpoint: 1330,
            settings: {
                dots: false,
                infinite: true,
                speed: 500,
                slideToShow: 1,
                slidesToScroll: 1,
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
                slideToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
    return (
        <div className="w-full">
            <Slider responsive={responsive} className="relative cursor-pointer" >
                <div>
                    <img className=" w-full h-full bg-no-repeat" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Flagship/115G/19Aug/D66357764_WLD_OnePlus_Salami_NewLaunch_DesktopTallHero_3000x1200._CB598553099_.jpg" alt="img1" />
                </div>
                <div>
                    <img className="w-full h-full bg-no-repeat" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/wearables/Boat_SIgma/wave_3000x1200-up._CB596878552_.jpg" alt="img4" />
                </div>
                <div>
                    <img className="w-full h-full bg-no-repeat" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/tiyesum/iQOOZ7Pro/NewKV/14thAug/D92526702_WLD_iQOO-Z7-Pro-5G_New-Launch_Tall_hero_3000x1200._CB598193729_.jpg" alt="img3" />
                </div>
                <div>
                    <img className="w-full h-full bg-no-repeat" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungBAU/Q5B5/Sale-is-live/D87778320_INWLD-WLD-Samsung-Q5B5-NewLaunch-July23_tallhero_3000x1200_2._CB598491787_.jpg" alt="img4" />
                </div>
                <div>
                    <img className="w-full h-full bg-no-repeat" src="https://m.media-amazon.com/images/I/71NvQQcaVfL._SX3000_.jpg" alt="img5" />
                </div>
            </Slider>
        </div>
    )
}

export default Carousel