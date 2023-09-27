import { Link } from "react-router-dom"
import Address from "./Address"
import { BsArrowLeftShort } from "react-icons/bs"
import iphone from "../../assets/icons/iphoneBlue.jpg"
import earpods from "../../assets/icons/boatWatch.webp"
const Checkout = () => {
    return (
        <div className="bg-[#FFFFF7] relative w-full">
            <Link to="/cart" className="ml-3 pt-3 text-[#777777] flex items-center hover:text-black" >
                <BsArrowLeftShort size={28} className="inline" />
                <button>back to Cart</button>
            </Link >
            
            <div className="py-5 w-full 800px:flex block flex-grow justify-evenly">
                <div className="max-w-[400px] sm:w-[400px] mx-auto bg-white p-5 sm:shadow-lg">
                    <h3 className="font-[550] my-5 text-[1.5rem] border-b-2">Address</h3>
                    <div className="gap-5">
                        <form className="flex flex-col justify-center">
                            <Address title="Add Name" name="name" id="name" type="text" />
                            <Address title="Phone Number" name="phone" id="phone" type="tel" />
                            <Address title="Address" name="address" id="address" type="text" />
                            <Address title="State" name="state" id="state" type="text" />
                            <Address title="zipcode" name="zipcode" id="zipcode" type="text" />
                            <div className="flex justify-between items-end h-auto ">
                                <button className="px-3 py-2  bg-[#361AE3] text-white hover:scale-110 transition-all shadow-lg rounded-md">save address</button>
                                <button className="bg-red-600 px-3 py-2 sm:block hidden rounded-md text-white shadow-md hover:scale-110 transition-all">Proceed Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="max-w-[400px] h-auto mx-auto bg-white sm:shadow-lg p-5">
                    <h3 className="font-[550] border-b-2 my-5 text-[1.5rem]">Checkout</h3>
                    <section className="border-b space-y-6 pb-2">
                        <div className=" grid grid-cols-5 col-span-8">
                            <div className="col-span-1 m-auto">
                                <img src={iphone} alt="Product" className="rounded max-h-[80px]" />
                            </div>
                            <div className="col-span-3 pt-2">
                                <span className="text-gray-600 text-md font-semibold line-clamp-1">Studio 2 Headphone   </span>
                                <span className="text-gray-400">2 x $30.99</span>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex items-center space-x-2 text-sm justify-between">
                                    <span className="font-semibold text-black">$300</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 col-span-8">
                            <div className="col-span-1  m-auto">
                                <img src={earpods} alt="Product" className="rounded max-h-[80px]" />
                            </div>
                            <div className="col-span-3 pt-2">
                                <span className="text-gray-600 text-md font-semibold line-clamp-1">Studio 2 Headphone   </span>
                                <span className="text-gray-400">2 x $30.99</span>
                            </div>
                            <div className="flex justify-center ">
                                <div className="flex items-center space-x-2 text-sm justify-between">
                                    <span className="font-semibold text-black">$300</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="p-4 space-y-3 border-b">
                        <div className="flex justify-between text-gray-600">
                            <span>Subtotal</span>
                            <span className="font-semibold text-black">$ 846.98</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>GST (5%)</span>
                            <span className="font-semibold text-black">$ 300</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Shipping</span>
                            <span className="font-semibold text-black">free</span>
                        </div>
                    </div>
                    <div className="font-semibold text-xl px-8 flex justify-between py-8">
                        <span>Total</span>
                        <span>$ 846.98</span>
                    </div>
                    <div className="sm:px-8 flex justify-between">
                        <input type="text" className="w-[75%] p-2 outline-none bg-zinc-300 text-black font-[400] shadow-lg uppercase rounded-l-md " placeholder="apply coupon code" />
                        <button className="uppercase font-[400] bg-green-500 hover:bg-[#febd69] py-2 px-4 rounded-r-md">submit</button>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <button className="bg-red-600 px-3 py-2 w-[75%] shadow-lg  rounded-md text-white hover:scale-110 transition-all">Proceed Payment</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Checkout