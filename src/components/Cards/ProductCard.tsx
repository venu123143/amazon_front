

import { useState } from "react"
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from "react-icons/ai"
import { LiaRupeeSignSolid } from "react-icons/lia"
import { BsHandbag, BsCart3 } from "react-icons/bs"
import { GoGitCompare } from "react-icons/go"
import { ratingStar } from "../../pages/Rating"
import { useNavigate } from "react-router-dom"

const ProductCard: React.FC<any> = ({ title, img, price, isHidden }) => {
    const [like, setLike] = useState(false)
    const navigate = useNavigate()
    const handleProduct = () => {
        navigate("/product/id")
    }
    return (
        <div className={`${isHidden === true ? "inline sm:hidden" : "null"}`}>
            <div className="sm:w-[270px] sm:h-[400px]  h-[250px]  max-h-full relative group flex w-screen sm:block rounded-lg overflow-hidden md:cursor-pointer bg-[#ffffff] shadow-lg">
                <div className="relative flex items-center justify-center w-[60%] sm:w-auto">
                    <img onClick={handleProduct} src={img} alt="img" className="sm:h-[240px] w-auto self-center h-auto hover:rotate-6 transition-all max-h-[80%]" />
                    <div onClick={() => setLike(!like)} className=" tooltip sm:absolute hidden sm:block sm:top-4 sm:right-4 cursor-pointer hover:bg-[#c4bfbf] rounded-full p-2 " >
                        {like ? <AiFillHeart className="text-red-500" size={25} /> : <AiOutlineHeart size={25} />}
                        <span className="tooltiptext">Wishlist</span>
                    </div>
                    <span className="absolute left-5 top-5 bg-yellow-500 rounded-full px-[5px]">-33%</span>
                    <div className="tooltip absolute sm:right-4 sm:top-12 hidden sm:block first-letter transition-all ease-linear sm:translate-x-14 sm:group-hover:translate-x-0 hover:bg-[#c4bfbf] rounded-full p-2">
                        <AiOutlineEye size={25} />
                        <span className="tooltiptext">Eye</span>
                    </div>
                    <div className="tooltip absolute right-4 top-[51%] hidden sm:block transition-all ease-linear translate-x-14 group-hover:translate-x-0 hover:bg-[#c4bfbf] rounded-full p-2">
                        <GoGitCompare size={25} />
                        <span className="tooltiptext">Compare</span>
                    </div>
                    <div className="tooltip absolute sm:right-4 sm:top-[35%] hidden sm:block transition-all ease-linear translate-x-14 group-hover:translate-x-0 hover:bg-[#c4bfbf] rounded-full p-2">
                        <BsHandbag size={25} />
                        <span className="tooltiptext">Cart</span>
                    </div>
                </div>
                <div className="w-full h-full p-[15px] relative ">
                    <span className="absolute  text-[#bf4800] text-[.91rem]">Brand Name</span>
                    <div onClick={() => setLike(!like)} className="absolute block  sm:hidden top-4 right-4 cursor-pointer" >
                        {like ? <AiFillHeart className="text-red-500" size={25} /> : <AiOutlineHeart size={25} />}
                    </div>
                    <h6 onClick={handleProduct} className="absolute top-10  font-[500] text-[#1c1b1b] h-[50px] overflow-hidden">{title} </h6>
                    <div className="absolute bottom-0 sm:bottom-auto top-20 flex my-[10px] items-center ">
                        {ratingStar}
                        <p className="ml-[10px]">304 reviews</p>
                    </div>

                    <div>
                        <span className="absolute top-[120px] text-[#1c1b1b] font-[1rem] font-Rubik"><LiaRupeeSignSolid className="inline text-[1.2rem]" />{price}</span>
                        <span className="absolute top-[120px] left-24 line-through italic text-[#1c1b1b] font-[1rem] font-Rubik">99990</span>
                    </div>
                    <button className="absolute block tooltip sm:hidden bottom-5 left-5 bg-[#000000]  hover:opacity-80 px-[15px] py-[5px]  rounded-md shadow-lg text-white">
                        <span className="hidden  480px:inline">Compare</span>
                        <span className="tooltiptext">Compare</span>
                        <GoGitCompare className="inline" />
                    </button>
                    <button className="absolute block tooltip sm:hidden bottom-5 right-5 bg-purple-700 hover:bg-purple-600 px-[15px] py-[5px] rounded-md shadow-lg text-white">
                        <span className="hidden 480px:inline">Add To Cart</span>
                        <span className="tooltiptext">Add to Cart</span>
                        <BsCart3 className="inline " />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard