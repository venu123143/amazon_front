
// import catBanner4 from "../../assets/images/catbanner-04.jpg"
import { useEffect, useLayoutEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import FeatureCollection from "./Features"
import Carousel from "./Carousel"
import Home from "./Home"
import BrandsAndBlogs from "./Brands"
import TopProducts from "./TopProducts"
import SpecialCart from "./SpecialCart"
import PopularProduct from "./PopularProduct"
import Offers from "./Offers.tsx"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store.ts"
import { setGoogleLoginUser } from "../../redux/reducers/users/userSlice.ts"

// import { SyncLoader } from "react-spinners"

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [Link]);
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const encodedUserData = urlParams.get('user');
    if (encodedUserData) {
      const decodedUserData = JSON.parse(decodeURIComponent(encodedUserData));
      localStorage.setItem("token", JSON.stringify(decodedUserData))
      dispatch(setGoogleLoginUser(decodedUserData))
    }
  }, [])


  return (
    <>
      <div className="">
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