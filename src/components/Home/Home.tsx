// import React from 'react'
// import React from 'react'
import { Link } from "react-router-dom"
import mainBanner1 from "../../assets/images/main-banner-1.jpg"
import mainBanner from "../../assets/images/main-banner.jpg"
import catBanner1 from "../../assets/images/catbanner-01.jpg"
import catBanner2 from "../../assets/images/catbanner-02.jpg"
import catBanner3 from "../../assets/images/catbanner-03.jpg"
export const Home = () => {
    return (
        <div className="max-w-[1300px] m-auto">
            <section className="grid-wrapper rounded-md my-[1rem] shadow-lg">
                <div className="big relative">
                    <img src={mainBanner} alt="main banner" />
                    <div className="main-banner-content absolute top-1.5 left-1.5 ">
                        <h4>SUPERCHARGED FOR PROS.</h4>
                        <h5>ipad S13+ Pro.</h5>
                        <p className="text-black">From $999.00 or $41.62/mo.</p>
                        <Link to="/" className="button text-white text-[0.91rem] px-[33px] py-[13px] rounded-[25px]">Buy Now</Link>
                    </div>
                </div>
                <div className="relative">
                    <img src={mainBanner1} alt="" />
                    <div className="small-banner-content absolute top-1 left-1.5 ">
                        <h4>BEST SALE</h4>
                        <h5>ipad S13+ Pro.</h5>
                        <p className="text-black">From $999.00 or $41.62/mo.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src={catBanner1} alt="" />
                    <div className="small-banner-content absolute top-1 left-1.5 ">
                        <h4>LAPTOPS MAX</h4>
                        <h5>Apple Air</h5>
                        <p className="text-black">From $999.00 or $41.62/mo.</p>
                    </div>
                </div>
                <div className="relative">
                    <img src={catBanner2} alt="" />
                    <div className="small-banner-content absolute top-1 left-1.5 ">
                        <h4>BEST SALE</h4>
                        <h5>Smart Watch 7.</h5>
                        <p className="text-black"> shop the latest brand</p>
                    </div>
                </div>
                <div className="relative">
                    <img src={catBanner3} alt="" />
                    <div className="small-banner-content absolute top-1 left-1.5 ">
                        <h4>NEW ARRIVAL</h4>
                        <h5>Buy Ipad Air.</h5>
                        <p className="text-black">From $599.00 or $21.62/mo.</p>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home
