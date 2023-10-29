import { useState, CSSProperties } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BsArrowLeftShort } from "react-icons/bs"
import { Link, useNavigate, useParams } from "react-router-dom"
import { BarLoader } from "react-spinners"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { object, string } from "yup"
import { useFormik } from "formik"
import { resetPassword } from "../../redux/reducers/users/userSlice"


const passwordSchema = string()
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/,
        'password contain atleast {1} uppercase, lowecase, one number, one symbol and mininum 8 chars long.'
    )
    .required('Password is Required');

let ResetSchema = object({
    password: passwordSchema,
    confirmPassword: string()
        .test('passwords-match', 'Passwords does not match', function (value) {
            return this.parent.password === value;
        })
        .required('Confirm Password is required'),
}); 
const ResetPassword = () => {
    const [visible, setVisible] = useState(false)
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const { isLoading, isSuccess } = useSelector((state: RootState) => state.user)
    // const isLoading = true
    const tokenID = useParams()

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
            password: '',
            confirmPassword: '',
        },
        validationSchema: ResetSchema,
        onSubmit: values => {
            dispatch(resetPassword({ password: values.password, token: tokenID.id as string }))
            formik.resetForm()
            if (isSuccess === true) {
                navigate('/')
            }
        },
    });

    return (
        <div className="bg-skin-background flex justify-center items-center h-screen py-5 group">
            <Link to="/login" className="absolute top-2 left-2 text-[#777777] flex items-center hover:text-black dark:hover:text-white">
                <BsArrowLeftShort size={28} className="inline" />
                <button>back to login</button>
            </Link>
            <div className="w-full flex justify-center">
                <div className="w-full bg-white rounded-lg shadow-lg border  dark:border md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <BarLoader
                        color="#361AE3"
                        loading={isLoading}
                        cssOverride={override}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    <div className={`${isLoading === true ? "block absolute z-10 top-0 left-0 right-0 bottom-0 bg-black opacity-50 group:pointer-events-none overflow-hidden " : "hidden"}`}></div>
                    <div className="p-6 space-y-1 md:space-y-1 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create New Password
                        </h1>
                        <form action="#" className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit} >
                            <div className="relative">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter New Password <span className="text-red-500 text-lg">*</span></label>
                                <input
                                    onChange={formik.handleChange("password")} onBlur={formik.handleBlur("password")} value={formik.values.password}
                                    type={`${visible === true ? "text" : "password"}`} name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <div onClick={() => setVisible(!visible)} className="absolute top-11 right-3 cursor-pointer">
                                    {visible === true ? <AiOutlineEyeInvisible size={25} /> : <AiOutlineEye size={25} />}
                                </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500 text-[14px] ">{formik.errors.password}</div>
                                ) : null}
                            </div>
                            <div className="">
                                <label htmlFor="resetpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-Enter Password <span className="text-red-500 text-lg">*</span></label>
                                <input
                                    onChange={formik.handleChange("confirmPassword")} onBlur={formik.handleBlur("confirmPassword")} value={formik.values.confirmPassword}
                                    type="password" name="resetpassword" id="resetpassword" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Enter your password" />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div className="text-red-500 text-[14px] ">{formik.errors.confirmPassword}</div>
                                ) : null}
                            </div>
                            <div>
                                <button type="submit" className="button dark:bg-[#00a884] dark:hover:bg-[#f02849] my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
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