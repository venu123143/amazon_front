// import React from 'react'
import { useState, useRef, useEffect, CSSProperties } from "react"
import { BsArrowLeftShort } from "react-icons/bs"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { BarLoader } from "react-spinners"
import { AppDispatch, RootState } from "../../redux/store"
import { array, object, string } from "yup"
import { useFormik } from "formik"
import { sendOtp, VerifyOtp } from "../../redux/reducers/users/userSlice"

let otpValid = object({
    otp: array().of(string().required("Please enter the otp"))
})

let otpSchema = object({
    mobile: string()
        .matches(/^[6-9]\d{9}$/, 'Enter a Valid Mobile Number')
        .required('mobile is required'),
})
const LoginWithOtp = () => {
    const [SendOtp, setSendOtp] = useState(false)
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""))
    const codesRef = useRef<any>([]);
    const { isLoading, user } = useSelector((state: RootState) => state.user)
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch()
    const [err, setErr] = useState("")

    useEffect(() => {
        if (user) navigate('/')
    }, [user])

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        width: 380,
        borderRadius: "30px",
        zIndex: 20,
    };
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
        const newOtp: string[] = [...otp]
        newOtp[index] = e.target.value
        setOtp(newOtp)
    }

    useEffect(() => {
        // codesRef.current[0]?.focus();
        codesRef.current.forEach((code: any, idx: any) => {
            code?.addEventListener('keydown', (e: any) => {
                if (e.key >= '0' && e.key <= '9') {
                    codesRef.current[idx].value = '';
                    setTimeout(() => codesRef.current[idx + 1]?.focus(), 10);

                } else if (e.key === 'Backspace') {
                    setTimeout(() => codesRef.current[idx - 1]?.focus(), 10);
                } else {
                    e.preventDefault();
                }
            });
        });
    }, [otp, SendOtp]);

    const formik = useFormik({
        initialValues: {
            mobile: '',
        },
        validationSchema: otpSchema,
        onSubmit: values => {
            dispatch(sendOtp(values.mobile))
            setSendOtp(true)
            // formik.resetForm()
        },
    });

    const handleVerifyOtp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await otpValid.validate({ otp }, { abortEarly: false });
            dispatch(VerifyOtp({ mobile: formik.values.mobile, otp }))
            setErr("")
        } catch (error: any) {
            setErr(error.errors[0])
        }
    }

    return (
        <section className="bg-skin-background w-full relative group">
            <Link to="/" className="absolute top-2 left-2 text-[#777777] flex items-center hover:text-black dark:hover:text-white">
                <BsArrowLeftShort size={28} className="inline" />
                <button>back to home</button>
            </Link>
            <div className="flex justify-center items-center h-screen 400px:mx-5 py-5">
                <div className=" w-full  flex justify-center">
                    <div className="w-full bg-white rounded-lg shadow-lg border mx-2 400px:mx-0 md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <BarLoader
                            color="#361AE3"
                            loading={isLoading}
                            cssOverride={override}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        <div className={`${isLoading === true ? "block absolute z-10 top-0 left-0 right-0 bottom-0 bg-black opacity-50 group:pointer-events-none overflow-hidden " : "hidden"}`}></div>

                        <div className="p-6 space-y-4  sm:p-8">
                            {
                                SendOtp === true ? (
                                    <>
                                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Enter Your Otp
                                        </h1>
                                        <form onSubmit={handleVerifyOtp} action="#" method="post">
                                            <div className="flex flex-col">
                                                <span className="text-red-500 text-center font-[450]">{err !== "" ? err : null}</span>
                                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                                    {otp.map((_, idx) => (
                                                        <div key={idx} className="w-10 h-10 ">
                                                            <input
                                                                className="codes w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-lg border border-gray-500 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                                maxLength={1} onChange={(e) => { handleOnChange(e, idx) }} value={otp[idx]} type="tel" ref={(el) => (codesRef.current[idx] = el)} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* onClick={handleVerifyOtp} */}

                                            <div className="text-center">
                                                <button type="submit" className="bg-skin-light text-skin-background button my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                                                    Submit
                                                </button> <br />
                                                <button onClick={() => setSendOtp(false)} className="hover:underline dark:text-white my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Login With Otp
                                        </h1>
                                        <form onSubmit={formik.handleSubmit} className="space-y-2   md:space-y-4" action="#">
                                            <div>
                                                <label htmlFor="otpmobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone No (+91)  <span className="text-red-500 text-lg">*</span></label>

                                                <input maxLength={10} id="otpmobile"
                                                    onChange={formik.handleChange("mobile")} onBlur={formik.handleBlur("mobile")} value={formik.values.mobile}
                                                    type="tel" name="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 "
                                                    placeholder="Enter your Phone No (+91)" />
                                                {formik.touched.mobile && formik.errors.mobile ? (
                                                    <div className="text-red-500 text-[14px] ">{formik.errors.mobile}</div>
                                                ) : null}
                                            </div>

                                            <div className="flex justify-evenly">
                                                <button type="submit" className="bg-skin-light text-skin-background hover:text-skin-backgroundLight hover:bg-skin-main shadow-lg my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                                                    Get Otp
                                                </button>
                                            </div>
                                        </form>

                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LoginWithOtp