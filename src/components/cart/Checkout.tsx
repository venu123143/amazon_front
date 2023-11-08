import React, { useCallback, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import Address from "./Address";
import { BsArrowLeftShort } from "react-icons/bs";

import Logo from "../../assets/icons/vgold.png"

import useRazorpay, { RazorpayOptions } from "react-razorpay";

// import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RaziropayKey, base_url } from "../../static/staticData";
import { number, object, string } from "yup"
import { useFormik } from "formik"
import { AppDispatch } from "../../redux/store";
import { saveAddress, toggleAddress } from "../../redux/reducers/users/userSlice";
import { Order } from "../../redux/reducers/orders/orderSlice";
import { calculateTaxes, clearCart } from "../../redux/reducers/cart/cartSlice";
import { toast } from "react-toastify";
import { LiaRupeeSignSolid } from "react-icons/lia";



let AddressSchema = object({
  name: string().min(3, 'minimum 3 characters should be there').required('name is required'),
  mobile: string().matches(/^[0-9]{10}$/, 'Mobile should contain exactly 10 numeric digits').required('mobile is required'),
  address: string().required('Please Enter your address'),
  state: string().required("Please add the correct state"),
  zipcode: number().required("zipcode is mandetory")
});
const Checkout = () => {

  const [Razorpay, isLoaded] = useRazorpay();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { cartItems, shipping, gst, totalPrice } = useSelector((state: any) => state.cart);
  const { address } = useSelector((state: any) => state.user);
  console.log(cartItems);

  // const { createOrder } = useSelector((state: any) => state.orders);

  // const handleCheckout = async () => {
  //   console.log("clicked button");
  //   const stripe = await loadStripe(
  //     "pk_test_51NurmeSIbcockITrXLp3KUY7hbWoFuO2Fp4G8XFpUU8CXwbvUJI50zYVy0qWHrjsNhfc7Vb0lbcXrs5qhXJPTt9J003fUuNx5y"
  //   );
  //   const response = await axios.post(
  //     "http://localhost:5000/api/product/create-checkout-session",
  //     { cartItems });
  //   const session = await response.data;
  //   const checkout = await stripe?.redirectToCheckout({
  //     sessionId: session?.id,
  //   });

  //   if (checkout && checkout.error) {
  //     console.log(checkout.error, "error occured");
  //   }

  // };
  let totalAmount = cartItems.reduce((total: number, item: any) => total + item.price * item.cartQuantity, 0);
  const handlePaymentSucess = async (e: any) => {
    dispatch(Order({ address: address, orderId: e?.razorpay_order_id, paymentId: e?.razorpay_payment_id, cartItems, cartTotalAmount: totalPrice }))
    dispatch(clearCart())
    navigate('/sucess')
  }
  const handlePaymentFailure = async (response: any) => {
    console.log(response);

    navigate('/cancel')
  }

  useEffect(() => {
    formik.setValues({
      name: address?.name,
      mobile: address?.mobile,
      address: address?.address,
      state: address?.state,
      zipcode: address?.zipcode,
    })
  }, [address])
  useEffect(() => {
    dispatch(calculateTaxes())
  }, [])
  const handlePayment = useCallback(async () => {
    try {

      if (!address) {
        toast.error("please  fill the address")
        return
      }
      if (totalPrice > 50000) {
        toast.info("test payment only accepts less than fifty thousand rupees only.")
        return
      }
      let res = await axios.post(`${base_url}/product/create-raziropay-session`,
        { cartTotalAmount: totalPrice }) as any;
      const createOrder = res.data

      if (res?.response?.data?.message) {
        toast.error(res?.response?.data?.message, {
          position: "top-right"
        })
        return
      }

      const options: RazorpayOptions = {
        key: RaziropayKey,
        amount: createOrder?.amount?.toString(),
        currency: "INR",
        name: "Amazon clone transation",
        description: "Test Transaction 1",
        image: Logo,
        order_id: createOrder?.id,
        handler: handlePaymentSucess,
        prefill: {
          name: "Dummy Name",
          email: "RaziropayKey.Dummy@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Hitech city Hyderabad.",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response: any) {
        handlePaymentFailure(response)
      });
      rzp1.open();
    } catch (error: any) {
      toast.error(error?.response?.data.message)
    }

  }, [isLoaded, address])



  const formik = useFormik({
    initialValues: {
      name: '',
      mobile: '',
      address: '',
      state: '',
      zipcode: '',
    },
    validationSchema: AddressSchema,
    onSubmit: values => {
      dispatch(saveAddress(values))
      dispatch(toggleAddress(true))
      // formik.resetForm()
    },
  });
  return (
    <div className="bg-[#F0FFFF] dark:bg-skin-background relative w-full">
      <Link
        to="/cart"
        className="ml-3 pt-3 text-[#777777] flex items-center hover:text-black dark:hover:text-white">
        <BsArrowLeftShort size={28} className="inline" />
        <button>back to Cart</button>
      </Link>

      <div className="py-5 w-full 800px:flex block flex-grow justify-evenly">
        <div className="max-w-[400px] sm:w-[400px] mx-auto bg-white dark:bg-[#222e35] p-5 sm:shadow-lg">
          <h3 className="font-[550] my-5 text-[1.5rem] border-b-2 text-skin-base">Address</h3>
          <div className="">
            <form className="flex flex-col justify-center" onSubmit={formik.handleSubmit}>
              <div>
                <Address title="Add Name" name="name" id="name" type="text"
                  onChange={formik.handleChange("name")} onBlur={formik.handleBlur("name")} value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-[14px] ">{formik.errors.name}</div>
                ) : null}

              </div>
              <Address title="Phone Number" name="phone" id="phone" type="tel"
                onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")} value={formik.values.mobile}
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <div className="text-red-500 text-[14px] ">{formik.errors.mobile}</div>
              ) : null}
              <Address
                title="Address"
                name="address"
                id="address"
                type="text"
                onChange={formik.handleChange("address")} onBlur={formik.handleBlur("address")} value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500 text-[14px] ">{formik.errors.address}</div>
              ) : null}
              <Address title="State" name="state" id="state" type="text"
                onChange={formik.handleChange("state")} onBlur={formik.handleBlur("state")} value={formik.values.state}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-red-500 text-[14px] ">{formik.errors.state}</div>
              ) : null}
              <Address
                title="zipcode"
                name="zipcode"
                id="zipcode"
                type="text"
                onChange={formik.handleChange("zipcode")} onBlur={formik.handleBlur("zipcode")} value={formik.values.zipcode}
              />
              {formik.touched.zipcode && formik.errors.zipcode ? (
                <div className="text-red-500 text-[14px] ">{formik.errors.zipcode}</div>
              ) : null}
              <div className="flex justify-between items-end h-auto ">
                <button type="submit" className="px-3 py-2  bg-[#361AE3] text-white hover:scale-110 transition-all shadow-lg rounded-md">
                  save address
                </button>
                <div
                  onClick={handlePayment}
                  className="bg-red-600 px-3 py-2 cursor-pointer  rounded-md text-white shadow-md hover:scale-110 transition-all"
                >
                  Proceed Payment
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="max-w-[400px] h-auto mx-auto bg-white dark:bg-[#222e35] sm:shadow-lg p-5">
          <h3 className="font-[550] border-b-2 my-5 text-[1.5rem] text-skin-base">Checkout</h3>
          {cartItems?.map((item: any) => (
            <div key={item?._id}>
              <section className="border-b space-y-6 pb-2">
                <div className="grid gap-2 my-1 grid-cols-5 col-span-8">
                  <div className="col-span-1  m-auto">
                    <img
                      src={item?.images[0]?.url}
                      alt={item?.title}
                      className="rounded max-h-[80px]"
                    />
                  </div>
                  <div className="col-span-3 pt-2">
                    <span className="text-gray-600 dark:text-[#e9edef] text-md font-semibold line-clamp-1">
                      {item?.title}{" "}
                    </span>
                    <span className="text-skin-base">
                      {item?.cartQuantity} x <LiaRupeeSignSolid className="inline text-[1.2rem]" />{item?.price}
                    </span>
                  </div>
                  <div className="flex justify-center ">
                    <div className="flex items-center space-x-2 text-sm justify-between">
                      <span className="font-semibold text-skin-base">
                        <LiaRupeeSignSolid className="inline text-[1.2rem]" />{item?.price * item?.cartQuantity}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
          {/* #00a884 */}
          <div className="p-4 space-y-3 border-b">
            <div className="flex justify-between dark:text-skin-base text-gray-600">
              <span>Subtotal</span>
              <span className="font-semibold text-skin-base"><LiaRupeeSignSolid className="inline text-[1.2rem]" />{totalAmount}</span>
            </div>
            <div className="flex justify-between dark:text-skin-base text-gray-600">
              <span>GST (5%)</span>
              {/* {(0.05 * totalPrice).toFixed(2)} */}
              <span className="font-semibold text-skin-base"><LiaRupeeSignSolid className="inline text-[1.2rem]" />{gst}</span>
            </div>
            <div className="flex justify-between dark:text-skin-base text-gray-600">
              <span>Shipping</span>
              <span className="font-semibold text-skin-base">{shipping === 0 ? "free" : shipping}</span>
            </div>
          </div>
          <div className="font-semibold text-skin-base text-xl px-8 flex justify-between py-8">
            <span>Total</span>
            <span><LiaRupeeSignSolid className="inline text-[1.2rem]" />{totalPrice}</span>
          </div>
          <div className="sm:px-8 flex justify-between">
            <input
              type="text"
              className="w-[75%] p-2 outline-none bg-zinc-300 text-black font-[400] shadow-lg uppercase rounded-l-md "
              placeholder="apply coupon code"
            />
            <button className="uppercase font-[400] bg-green-500 hover:bg-[#febd69] py-2 px-4 rounded-r-md">
              submit
            </button>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              onClick={handlePayment}
              className="bg-red-600 px-3 py-2 w-[75%] shadow-lg  rounded-md text-white hover:scale-110 transition-all"
            >
              Proceed Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Checkout);
