// import React from 'react'
import { useState, CSSProperties, useEffect } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BsArrowLeftShort } from "react-icons/bs"
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom"
import { BarLoader } from "react-spinners"
import { forgotPassword, login } from "../../redux/reducers/users/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { object, string } from "yup"
import { useFormik } from "formik"



let loginSchema = object({
  email: string().email('Email should be valid').required('Email is Required field'),
  password: string().required('password is required field'),
});
const LoginPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoading, user, isError, isSuccess } = useSelector((state: RootState) => state.user)
  const [visible, setVisible] = useState(false)
  const [forgotpassword, setForgotPassword] = useState(false)
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (user !== null) {
      navigate('/')
    }
  }, [user, isLoading, isError, isSuccess])
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    width: 380,
    borderRadius: "30px",
    zIndex: 20,
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      dispatch(login(values))
      formik.resetForm()

    },
  });
  const handleSubmit = () => {
    dispatch(forgotPassword(email))
    setEmail("")
    if (isSuccess === true) navigate('/')
  }

  return (
    // bg-skin-background
    <section className="bg-skin-background w-full group">
      <Link to="/" className="absolute top-2 left-2 text-[#777777] dark:hover:text-white flex items-center hover:text-black">
        <BsArrowLeftShort size={28} className="inline" />
        <button>back to home</button>
      </Link>
      <div>

      </div>

      <div className="flex justify-center items-center h-screen 400px:mx-5 py-5">
        <div className=" w-full flex justify-center">
          <div className="w-full bg-white rounded-lg shadow-lg border  dark:border mx-2 sm:mx-0 md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <BarLoader
              color="#361AE3"
              loading={isLoading}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <div className={`${isLoading === true ? "block absolute z-10 top-0 left-0 right-0 bottom-0 bg-black opacity-50 group:pointer-events-none overflow-hidden " : "hidden"}`}></div>

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {forgotpassword === true ? (
                <>
                  <div>
                    <h1 className="text-lg font-medium leading-tight text-center tracking-tight text-gray-900 md:text-xl dark:text-white">
                      Reset your password
                    </h1>
                    <p className="font-light text-center text-[#777777] mb-2">we will send you an email to reset your password</p>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)} value={email}
                      type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email" required />

                    <div className="text-center">
                      <button onClick={handleSubmit} className="bg-skin-light text-skin-background hover:text-skin-backgroundLight hover:bg-skin-main shadow-lg my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                        submit
                      </button> <br />
                      <button onClick={() => setForgotPassword(false)} className="hover:underline text-black dark:text-white  my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
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
                  <form className="space-y-4 md:space-y-6" method="POST" onSubmit={formik.handleSubmit}>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email  <span className="text-red-500 text-lg">*</span></label>
                      <input
                        onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} value={formik.values.email} name="email"
                        type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your email" />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-red-500 text-[14px] ">{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div className="relative">
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password  <span className="text-red-500 text-lg">*</span></label>
                      <input
                        onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} value={formik.values.password} name="password"
                        type={`${visible === true ? "text" : "password"}`} id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                      <div onClick={() => setVisible(!visible)} className="absolute top-11 right-3 cursor-pointer">
                        {visible === true ? <AiOutlineEyeInvisible size={25} /> : <AiOutlineEye size={25} />}
                      </div>
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-red-500 text-[14px] ">{formik.errors.password}</div>
                      ) : null}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-start">
                        <div onClick={() => setForgotPassword(true)} className="text-sm font-medium text-primary-600 hover:underline dark:text-white">Forgot password?</div>
                      </span>
                      <Link to="/otplogin" className="text-sm font-medium text-primary-600 hover:underline dark:text-white">
                        Login with OTP
                      </Link>
                    </div>
                    <div className="flex justify-evenly">
                      <button type="submit" className="bg-skin-light text-skin-background hover:text-skin-backgroundLight hover:bg-skin-main shadow-lg my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                        Login
                      </button>
                      <Link to="/sign-up" className="bg-skin-main text-skin-textBase hover:bg-skin-light hover:text-skin-background my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
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