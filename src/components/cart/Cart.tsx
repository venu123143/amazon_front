import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { removeFromCart, descreaseCart, addToCart, clearCart, cartTotal } from '../../redux/reducers/product/cartSlice';
import { BsArrowLeftShort } from 'react-icons/bs';
const Cart = () => {
    const cart = useSelector((state: any) => state.cart);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(cartTotal())
    }, [cart, dispatch])
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
    return (
        <>
            <div className='cart-container   bg-[#fffff7]'>
                <h2>Shopping Cart</h2>
                <div className="continue-shopping">
                    <Link to="/products" className="p-3 py-2 text-white tracking-wider rounded-md bg-gradient-to-tr from-pink-600 to-purple-400">
                        <BsArrowLeftShort size={28} className="inline" />
                        <span>continue shopping</span>
                    </Link>
                </div>
                {
                    cart.cartItems.length === 0 ? (
                        <div className="cart-empty">
                            <p>your cart is currently empty</p>
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
                                {cart.cartItems?.map((cartItem: any) => (
                                    <div key={cartItem.id} className="cart-item">
                                        <div className="cart-product">
                                            <img src={cartItem.image} alt={cartItem.name} />
                                            <div className='flex flex-col justify-center items-baseline'>
                                                <h3 className='line-clamp-1 mt-10'>{cartItem.name}</h3>
                                                <button onClick={() => handleRemoveFromcart(cartItem)}>remove</button>
                                            </div>
                                        </div>
                                        <div className="cart-product-price">${cartItem.price}</div>
                                        <div className="cart-product-quantity">
                                            <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                                            <div className="count">{cartItem.cartQuantity}</div>
                                            <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
                                        </div>
                                        <div className="cart-product-total-price">
                                            ${cartItem.price * cartItem.cartQuantity}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-summery relative">
                                <button onClick={clearAllCart} className="button my-[10px] text-white text-[1.2rem] tracking-wider px-[2rem] py-[6px] rounded-md ">
                                    clear cart
                                </button>
                                <div className="cart-checkout">
                                    <div className="subtotal">
                                        <span>subtotal</span>
                                        <span>${cart.cartTotalAmount}</span>
                                    </div>
                                    <p>taxes and shipping calculated at checkout</p>
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