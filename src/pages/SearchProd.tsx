import React, { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import ProductCard from '../components/Cards/ProductCard'
import LongCard from '../components/Cards/LongCard'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineAppstore } from 'react-icons/ai'
import { BsBook, BsCartCheck, BsCartX } from 'react-icons/bs'
import { MdOutlineFlipCameraAndroid } from 'react-icons/md'
import { GrCart } from 'react-icons/gr'
import { SyncLoader } from 'react-spinners'

const MainSpinner: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    width: 380,
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: 'translateX(-50%, -50%)'
};
const SearchProd = () => {
    const { products, wishlist, isLoading } = useSelector((state: RootState) => state.product)
    return (
        <>
            <div className={`${isLoading === true ? "block bg-black opacity-50 fixed top-0 left-0  z-20 w-full h-screen" : "hidden"}`}>
                <SyncLoader
                    color="#361AE3"
                    loading={isLoading}
                    cssOverride={MainSpinner}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
            <div className="bg-skin-background">
                <h3 className='font-[550] text-skin-base text-2xl text-center mt-5'>Your search result</h3>
                <section className="rounded-md py-5">
                    {products.length === 0 ? (
                        <>
                            <div id="empty-wishlist" className="bg-skin-background" style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                <div className="empty-wishlist" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <div className="empty-wishlist-icon" style={{ zIndex: '-1', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'rgba(0, 0, 0, 0.1)', fontSize: '15rem', fontWeight: '530', fontFamily: 'poppins' }}>
                                        <BsCartX className="w-full h-screen opacity-50" />
                                    </div>
                                    <h2 className="text-skin-base" style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold', fontFamily: 'poppins' }}>No products preset with this filter</h2>
                                    <NavLink className="hover:shadow-lg transition-all hover:scale-110" style={{ padding: '12px 15px', margin: '20px 20px', color: 'white', textDecoration: 'none', fontStyle: 'italic', fontFamily: 'poppins', background: 'linear-gradient(93.87deg, red,gray)', borderRadius: "8px" }}
                                        to="/">Go to Home</NavLink>
                                    <p className="text-skin-backgroundHover" style={{ fontStyle: 'italic', fontFamily: 'poppins', textAlign: 'center' }}>Clear Filter and Try again..!</p>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="block md:flex gap-5 sm:p-5 ">
                            <div className="md:w-3/12 relative ">
                                <div className="sticky top-32 bg-white rounded-lg py-[10px] px-[15px]  mb-3 shadow-lg">
                                    <Link to="/orders" className="bg-[#00BFFF] mb-5 hover:bg-[#00FFFF]  py-3 px-2 rounded-md cursor-pointer flex items-center">
                                        <BsCartCheck size={25} className="inline mr-[1rem]" />
                                        <span className="text-lg  font-Roboto font-semibold">My Orders</span>
                                    </Link>
                                    <Link to="/cart" className="bg-pink-500 hover:bg-[#FF1493] mb-5 py-3 px-2 rounded-md cursor-pointer flex items-center">
                                        <GrCart size={25} className="inline mr-[1rem]" />
                                        <span className="text-lg  font-Roboto font-semibold">Go to Cart</span>
                                    </Link>
                                    <Link to="/compare" className="bg-yellow-500 hover:bg-[#FFFF00] mb-5 py-3 px-2 rounded-md cursor-pointer flex items-center">
                                        <MdOutlineFlipCameraAndroid size={25} className="inline mr-[1rem]" />
                                        <span className="text-lg  font-Roboto font-semibold">Compare</span>
                                    </Link>
                                    <Link to="/blogs" className="bg-green-500 hover:bg-[#7CFC00] mb-5 py-3 px-2 rounded-md cursor-pointer flex items-center">
                                        <BsBook size={25} className="inline mr-[1rem]" />
                                        <span className="text-lg  font-Roboto font-semibold">Blogs</span>
                                    </Link>
                                    <Link to="/products" className="bg-red-500 hover:bg-[#FF0000] mb-5 py-3 px-2 rounded-md cursor-pointer flex items-center">
                                        <AiOutlineAppstore size={25} className="inline mr-[1rem]" />
                                        <span className="text-lg  font-Roboto font-semibold">Store</span>
                                    </Link>

                                </div>
                            </div>
                            <div className="md:w-9/12 grid gap-5">
                                {
                                    products?.map((item, index) => (
                                        <div className="" key={index}>
                                            <ProductCard isHidden={true} data={item} wishlist={wishlist} />
                                            <LongCard isHidden={false} data={item} wishlist={wishlist} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                    }
                </section>
            </div>
        </>
    )
}

export default React.memo(SearchProd)