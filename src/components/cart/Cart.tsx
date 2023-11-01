import { useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { removeFromCart, descreaseCart, addToCart, clearCart, cartTotal } from '../../redux/reducers/cart/cartSlice';
import { BsArrowLeftShort } from 'react-icons/bs';
import { AppDispatch, RootState } from '../../redux/store';
const Cart = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const { cartItems, cartTotalAmount } = useSelector((state: RootState) => state.cart);
    const { user } = useSelector((state: RootState) => state.user)
    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [Link]);
    useEffect(() => {
        dispatch(cartTotal())
    }, [cartItems, dispatch])
    const handleRemoveFromcart = (cartItem: any) => {
        dispatch(removeFromCart(cartItem))
    }
    const handleDecreaseCart = (cartItem: any) => {
        dispatch(descreaseCart(cartItem))
    }
    const handleIncreaseCart = (cartItem: any) => {
        dispatch(addToCart(cartItem))
    }
    const clearAllCart = () => {
        dispatch(clearCart())
    }
    console.log(cartItems);

    return (
        <>
            <div className='cart-container   bg-skin-background'>
                <h2 className='text-skin-base'>Shopping Cart</h2>
                <div className="continue-shopping">
                    <Link to="/products" className="p-3 py-2 text-white tracking-wider rounded-md bg-gradient-to-tr from-pink-600 to-purple-400">
                        <BsArrowLeftShort size={28} className="inline" />
                        <span>continue shopping</span>
                    </Link>
                </div>
                {
                    cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <p className='text-skin-base'>your cart is currently empty</p>
                            <div className="start-shopping min-h-screen">
                                <Link to="/" className=" text-[#777777] flex items-center hover:text-black">
                                    <BsArrowLeftShort size={28} className="inline" />
                                    <button>start shopping</button>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className=''>
                            <div className="titles">
                                <h3 className="product-title font-[450]">product</h3>
                                <h3 className="price font-[450]">price</h3>
                                <h3 className="quantity font-[450]">quantity</h3>
                                <h3 className="total font-[450]">total</h3>
                            </div>
                            <div className="cart-items">
                                {cartItems?.map((cartItem: any) => (
                                    <div key={cartItem._id} className="cart-item">
                                        <div className="cart-product">
                                            <img src={cartItem.images[0].url} alt={cartItem?.title} className='hidden sm:block' />
                                            <div className='flex flex-col justify-center items-baseline'>
                                                <h3 className='line-clamp-1 mt-10 text-skin-base'>{cartItem?.title}</h3>
                                                <button onClick={() => handleRemoveFromcart(cartItem)}>remove</button>
                                            </div>
                                        </div>
                                        <div className="cart-product-price text-skin-base">${cartItem?.price}</div>
                                        <div className="cart-product-quantity">
                                            <button className='text-skin-base' onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                            <div className="count text-skin-base">{cartItem.cartQuantity}</div>
                                            <button className='text-skin-base' onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                        </div>
                                        <div className=" text-skin-base cart-product-total-price">
                                            ${cartItem.price * cartItem.cartQuantity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-summery relative">
                                <button onClick={clearAllCart} className="button my-[10px] text-white  text-[1rem] sm:text-[1.2rem] tracking-wider px-2 py-[6px] rounded-md ">
                                    clear cart
                                </button>
                                <div className="cart-checkout ">
                                    <div className="text-skin-base subtotal">
                                        <span>subtotal</span>
                                        <span>${cartTotalAmount}</span>
                                    </div>
                                    <p className='text-skin-base'>taxes and shipping calculated at checkout</p>
                                    <Link to="/checkout" className="button group flex items-center justify-center">
                                        <span className='text-white group-hover:text-black text-[1rem] font-[400]'>Checkout</span>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Cart




