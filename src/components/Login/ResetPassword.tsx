import { useState, CSSProperties } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BsArrowLeftShort } from "react-icons/bs"
import { Link } from "react-router-dom"
import { BarLoader } from "react-spinners"

const ResetPassword = () => {
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        width: 380,
        borderRadius: "30px"
    };

    return (
        <div className="bg-[#FFFFF7] flex justify-center items-center h-screen py-5">
            <Link to="/login" className="absolute top-2 left-2 text-[#777777] flex items-center hover:text-black">
                <BsArrowLeftShort size={28} className="inline" />
                <button>back to login</button>
            </Link>
            <div className="w-full flex justify-center">
                <div className="w-full bg-white rounded-lg shadow-lg border  dark:border md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <BarLoader
                        color="#361AE3"
                        loading={loading}
                        cssOverride={override}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <div className="p-6 space-y-1 md:space-y-1 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create New Password
                        </h1>
                        <p className={`${error === true ? "block" : "hidden"} text-red-600`}>Min 1 (upper, lower, num, symbol)</p>
                        <form action="#" className="space-y-4 md:space-y-6" >
                            <div className="relative">
                                <label htmlFor="password" className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter New Password <span className="text-red-500 text-lg">*</span></label>
                                <input type={`${visible === true ? "text" : "password"}`} name="password" id="password" placeholder="Enter your password" onBlur={() => setError(true)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                <div onClick={() => setVisible(!visible)} className="absolute top-11 right-3 cursor-pointer">
                                    {visible === true ? <AiOutlineEyeInvisible size={25} /> : <AiOutlineEye size={25} />}
                                </div>
                            </div>
                            <div className="">
                                <label htmlFor="resetpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-Enter Password <span className="text-red-500 text-lg">*</span></label>
                                <input type="password" name="resetpassword" id="resetpassword" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your password" required />
                            </div>
                            <div>
                                <button className="button my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                                    Reset
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword