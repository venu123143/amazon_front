// import React from 'react'
import { useState, useRef, useEffect, CSSProperties } from "react"
import { BsArrowLeftShort } from "react-icons/bs"
import { Link } from "react-router-dom"
import { BarLoader } from "react-spinners"

const LoginWithOtp = () => {
    const [sendOtp, setSendOtp] = useState(false)
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""))
    const codesRef = useRef<any>([]);
    // const [loading, setLoading] = useState(false)
    const loading = false;


    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        width: 380,
        borderRadius: "30px"
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
    }, [otp]);

    return (
        <section className="bg-skin-background w-full relative">
            <Link to="/" className="absolute top-2 left-2 text-[#777777] flex items-center hover:text-black dark:hover:text-white">
                <BsArrowLeftShort size={28} className="inline" />
                <button>back to home</button>
            </Link>
            <div className="flex justify-center items-center h-screen 400px:mx-5 py-5">
                <div className=" w-full  flex justify-center">
                    <div className="w-full bg-white rounded-lg shadow-lg border mx-2 400px:mx-0 md:mt-0 sm:max-w-sm xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <BarLoader
                            color="#361AE3"
                            loading={loading}
                            cssOverride={override}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {
                                sendOtp === true ? (
                                    <>

                                        <form action="" method="post">
                                            <div className="flex flex-col space-y-16">
                                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                                    {otp.map((_, idx) => (
                                                        <div key={idx} className="w-10 h-10 ">
                                                            <input className="codes w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-lg border border-gray-500 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                                                maxLength={1} onChange={(e) => { handleOnChange(e, idx) }} value={otp[idx]} type="text" ref={(el) => (codesRef.current[idx] = el)} />
                                                        </div>

                                                    ))}

                                                </div>
                                            </div>
                                        </form>

                                        <div className="text-center">
                                            <button className="button my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                                                Submit
                                            </button> <br />
                                            <button onClick={() => setSendOtp(false)} className="hover:underline text-skin-base my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                                                Cancel
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Login With Otp
                                        </h1>
                                        <form className="space-y-2   md:space-y-4" action="#">
                                            <div>
                                                <input type="tel" name="mobile" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="Enter your Phone No" required />
                                            </div>


                                            <div className="flex justify-evenly">
                                                <button type="submit" onClick={() => setSendOtp(true)} className="bg-skin-light text-skin-background hover:text-skin-backgroundLight hover:bg-skin-main shadow-lg my-[10px] text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
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