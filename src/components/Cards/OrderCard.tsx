import React from 'react'
import { orderStatus } from '../../static/staticData'
import { toast } from 'react-toastify'

const OrderCard: React.FC<any> = ({ order, item }) => {
    const cancelOrder = () => {
        console.log("order cacelled");
        toast.error("You cannot cancel the order", { position: "top-right" })
    }
    return (
        <>
            <section className='px-4 relative py-2 flex gap-5 items-center border hover:shadow-lg transition-all hover:scale-x-95'>
                <div className=''>
                    <img src={order?.images[0]?.url} alt="productimage" className='max-h-[100px]' />
                </div>
                <div className='space-y-1'>
                    <h3 className='font-Rubik font-[450] text-skin-base line-clamp-1'>{order?.title}</h3>
                    <div className='flex gap-3'>
                        <p className='text-[#777777]'>Color: {order?.color[0]?.title}</p>
                        <time className='text-[#777777]'>Ordered on: {new Date(item.createdAt).toLocaleDateString()} </time>
                    </div>
                    <div className='gap-5 flex'>
                        <p className='text-skin-base'>price:
                            <span>{order?.price}</span>
                        </p>
                        <p className=''>Status:
                            <span className={`${orderStatus[item?.orderStatus]} ml-2 drop-shadow-lg font-bold py-1 px-2 rounded-sm `}>{item?.orderStatus}</span>
                        </p>
                    </div>
                    <button onClick={cancelOrder} className='sm:absolute float-right sm:bottom-3 sm:right-3 bg-red-500 hover:bg-red-700 hover:shadow-lg px-2 py-1 rounded-md text-white'>Cancel</button>
                </div>
            </section>
        </>
    )
}

export default React.memo(OrderCard)