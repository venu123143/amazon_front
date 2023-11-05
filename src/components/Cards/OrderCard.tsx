import React, { useState } from 'react'
import { orderStatus } from '../../static/staticData'
import { AiFillCaretDown } from 'react-icons/ai'
import { AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { updateOrder } from '../../redux/reducers/orders/orderSlice'

const OrderCard: React.FC<any> = ({ order, item }) => {
    const dispatch: AppDispatch = useDispatch()
    const [openOrder, setOpenOrder] = useState(false)

    const cancelOrder = (id: string) => {
        let answer = window.confirm("Do You Want to delete Order.?");
        if (answer === true) {
            dispatch(updateOrder({ id, Status: "Cancelled" }))
        }
    }
    return (
        <>
            <main className='border transition-all hover:scale-x-95 relative'>
                <section onClick={() => setOpenOrder(!openOrder)} className='px-4 sm:cursor-pointer relative py-2 flex gap-5 items-center hover:shadow-lg '>
                    <div onClick={() => setOpenOrder(!openOrder)} className='sm:cursor-pointer absolute bottom-3 sm:top-5 right-4   rounded-full'>
                        <AiFillCaretDown title="toggle menu" className="float-right text-skin-base" />
                    </div>
                    <div className=''>
                        <img src={order?.images[0]?.url} alt="productimage" className='max-h-[100px]' />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='font-Rubik font-[450] text-skin-base line-clamp-1'>{order?.title}</h3>
                        <div className='flex gap-3'>
                            <p className='text-[#777777]'>Color: {order?.color[0]?.title}</p>
                            <time className='text-[#777777]'>Ordered on: {new Date(item.createdAt).toLocaleDateString()} </time>
                        </div>
                        <div className='gap-3 flex'>
                            <p className='text-skin-base'>price: <span className='font-bold ml-2'>{order?.price}</span>
                            </p>
                            <p className='text-skin-base'>Status:
                                <span className={`${orderStatus[item?.orderStatus]} ml-2 drop-shadow-lg font-bold py-1 px-2 rounded-sm `}>{item?.orderStatus}</span>
                            </p>
                        </div>
                    </div>
                </section>
                {
                    openOrder === true ? (
                        <>
                            <section className='block sm:flex gap-5 p-5'>
                                <div className='text-skin-base'>
                                    <h3 className='border-b-2 border-black dark:border-white border-dotted font-[550] text-[1.2rem]'>Shipping Info</h3>
                                    <p className='shipping dark:text-gray-300'>{item.shippingInfo.name}</p>
                                    <p className='shipping dark:text-gray-300'>{item.shippingInfo.mobile}</p>
                                    <p className='shipping dark:text-gray-300'>{item.shippingInfo.state}</p>
                                    <p className='shipping dark:text-gray-300'>{item.shippingInfo.address}</p>
                                    <p className='shipping dark:text-gray-300'>{item.shippingInfo.pincode}</p>
                                </div>
                                <div className='text-skin-base'>
                                    <h3 className='border-b-2 border-black dark:border-white  border-dotted font-[550] text-[1.2rem]'>Payment Info</h3>
                                    <p className='order dark:text-gray-300'>{item.paymentInfo?.razorPayOrderId}</p>
                                    <p className='order dark:text-gray-300'>{item.paymentInfo?.razorPayPaymentId}</p>
                                    <p className='order dark:text-gray-300'>Paid with: <span className='font-[450] text-[1.2rem] uppercase '> {item.paymentInfo?.paidWith}</span></p>
                                </div>
                                <div>
                                    {
                                        item?.orderStatus !== "Cancelled" ?
                                            <button onClick={() => cancelOrder(item?._id)} className='absolute bottom-3 right-3 bg-red-500 hover:bg-red-700 hover:shadow-lg px-2 py-1 rounded-md text-white'>Cancel</button>
                                            : null
                                    }
                                </div>
                            </section>
                        </>
                    ) : null
                }
            </main>
        </>
    )
}

export default React.memo(OrderCard)