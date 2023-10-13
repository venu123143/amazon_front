
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
  // const [value, setValue] = useState<any>([])
  // var formData = new FormData()
  // const handleSendBtn = async () => {
  //   const res = await axios.post('http://localhost:5000/api/product/upload-to-s3',
  //     formData, { headers: { 'Content-Type': 'multipart/form-data' } })
  //   console.log(res.data);
  //   setValue(res.data?.url)
  //   formData = new FormData();
  // }
  // const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target && e.target.files) {
  //     for (let i = 0; i < e.target.files.length; i++) {
  //       formData.append("images", e.target.files[i])
  //     }
  //   }
  // }
  // const isLoading = true
  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  //   width: 380,
  //   position: 'absolute',
  //   top: "50%",
  //   left: "50%",
  //   transform: 'translateX(-50%, -50%)'

  // };
  return (
    <>
      <div className="bg-[#FFFFF7] ">
        <Carousel />
        <Home />
        <FeatureCollection />
        <Offers />
        <TopProducts />
        <SpecialCart />
        <PopularProduct />
        <BrandsAndBlogs />
        {/* <div className={`${isLoading === true ? "block bg-black opacity-50 absolute top-0 left-0 w-full h-screen" : "hidden"}`}>
          <SyncLoader
            color="#361AE3"
            loading={isLoading}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

        </div> */}
        {/* <div>
          <input multiple onChange={handlechange} type="file" name="fileinput" id="" />
          <button onClick={handleSendBtn} className="px-3 py-2 border shadow-md bg-gray-200 rounded-md hover:shadow-lg">sendImage</button>
          <img src={value} alt="awsImage" />
        </div> */}
      </div>
    </>
  )
}

export default HomePage