
// import catBanner4 from "../../assets/images/catbanner-04.jpg"
// import { CSSProperties } from "react"
import FeatureCollection from "./Features"
import Carousel from "./Carousel"
import Home from "./Home"
import BrandsAndBlogs from "./Brands"
import TopProducts from "./TopProducts"
import SpecialCart from "./SpecialCart"
import PopularProduct from "./PopularProduct"
import Offers from "./Offers.tsx"

// import { SyncLoader } from "react-spinners"

const HomePage = () => {
  return (
    <>
      <div className="bg-[#FFFFF7]">
        <Carousel />
        <Home />
        <FeatureCollection />
        <Offers />
        <TopProducts />
        <SpecialCart />
        <PopularProduct />
        <BrandsAndBlogs />
      </div>
    </>
  )
}

export default HomePage