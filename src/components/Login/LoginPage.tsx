// import React from 'react'
import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BsArrowLeftShort } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom"
const LoginPage = () => {
  const [visible, setVisible] = useState(false)
  const [forgotpassword, setForgotPassword] = useState(false)
  return (
    <section className="bg-[#FFFFF7] w-full">
      <Link to="/" className="absolute top-2 left-2 text-[#777777] flex items-center hover:text-black">
        <BsArrowLeftShort size={28} className="inline" />
        <button>back to home</button>
      </Link>
      <div className="flex justify-center items-center h-screen 400px:mx-5 py-5">
        <div className=" w-full flex justify-center">
          <div className="w-full bg-white rounded-lg shadow-lg border  dark:border md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {forgotpassword === true ? (
                <>
                  <div>
                    <h1 className="text-lg font-medium leading-tight text-center tracking-tight text-gray-900 md:text-xl dark:text-white">
                      Reset your password
                    </h1>
                    <p className="font-light text-center text-[#777777] mb-2">we will send you an email to reset your password</p>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email" required />
                    <div className="text-center">
                      <button className="button my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                        Submit
                      </button> <br />
                      <button onClick={() => setForgotPassword(false)} className="hover:underline text-black my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Login
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your email" required />

                    </div>
                    <div className="relative">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type={`${visible === true ? "text" : "password"}`} name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                      <div onClick={() => setVisible(!visible)} className="absolute top-9 right-3 cursor-pointer">
                        {visible === true ? <AiOutlineEyeInvisible size={25} /> : <AiOutlineEye size={25} />}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <button onClick={() => setForgotPassword(true)} className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</button>
                      </div>
                      <Link to="/otplogin" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Login with OTP
                      </Link>
                    </div>
                    <div className="flex justify-evenly">
                      <button className="button my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                        Login
                      </button>
                      <Link to="/sign-up" className="bg-[#febd69] hover:bg-[#232f3e] hover:text-white text-black my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                        Sign up
                      </Link>
                    </div>
                  </form>
                  <div className="flex items-center justify-center my-2">
                    <button className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      <FcGoogle size={25} className="inline mr-2" />
                      <span>Continue with Google</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default LoginPage