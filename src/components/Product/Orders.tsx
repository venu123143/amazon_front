import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { getOrders } from '../../redux/reducers/orders/orderSlice'
import OrderCard from '../Cards/OrderCard'
import { Link, NavLink } from 'react-router-dom'
import { BsBook, BsCartCheck, BsCartX } from 'react-icons/bs'
import { GrCart } from 'react-icons/gr'
import { MdOutlineFlipCameraAndroid } from 'react-icons/md'
import { AiOutlineAppstore } from 'react-icons/ai'
const Orders = () => {
    const dispatch: AppDispatch = useDispatch()
    const { orders } = useSelector((state: RootState) => state.orders)
    useEffect(() => {
        dispatch(getOrders())
    }, [])

    return (
        <section className=''>
            {orders.length === 0 ? (
                <>
                    <div id="empty-wishlist" className="bg-skin-background" style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <div className="empty-wishlist" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <div className="empty-wishlist-icon" style={{ zIndex: '-1', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'rgba(0, 0, 0, 0.1)', fontSize: '15rem', fontWeight: '530', fontFamily: 'poppins' }}>
                                <BsCartX className="w-full h-screen opacity-50" />
                            </div>
                            <h2 className="text-skin-base" style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold', fontFamily: 'poppins' }}>You Haven't placed any order</h2>
                            <NavLink className="hover:shadow-lg transition-all hover:scale-110" style={{ padding: '12px 15px', margin: '20px 20px', color: 'white', textDecoration: 'none', fontStyle: 'italic', fontFamily: 'poppins', background: 'linear-gradient(93.87deg, orange, gray)', borderRadius: "8px" }}
                                to="/products">Place Order</NavLink>
                            <p className="text-skin-backgroundHover" style={{ fontStyle: 'italic', fontFamily: 'poppins', textAlign: 'center' }}>Place some order and come back soon!</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="rounded-md sm:block justify-between">
                        <h3 className="font-[550] text-skin-base text-[1.5rem] text-center  hover:underline w-full mt-5">My Orders</h3>

                        <div className="md:flex gap-5 sm:p-5 block">
                            <div className="md:w-3/12 relative ">
                                <div className="sticky bg-white top-32 rounded-lg py-[10px] px-[15px]  mb-3">
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
                            <div className='md:w-9/12 sm:space-y-3 '>
                                {
                                    orders?.map((item) => item?.orderItems?.map((each, idx) => (
                                        <OrderCard key={idx} order={each} item={item} />
                                    )))
                                }
                            </div>

                        </div>
                    </div>
                </>
            )
            }
        </section >
    )
}

export default React.memo(Orders)