import { AiOutlineHome, AiOutlineMail, AiOutlineInfoCircle } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
const Contact = () => {
    return (
        <section className="bg-[#FFFFF7]">
            <section className="px-10 py-5">
                <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33062.247954153885!2d78.39092952095174!3d17.471714424058703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb900ed933ff81%3A0xb79715aed0874331!2sAhex%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1693671119432!5m2!1sen!2sin" width="600" height="450" className="border-0 w-full" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="block 1100px:flex justify-evenly my-5 bg-white p-5 shadow-lg">
                    <div>
                        <h3 className="font-bold text-2xl">Contact</h3>
                        <form action="" method="post" className="mt-[1rem]">
                            <div className="mb-6 w-full">
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:max-w-[50%] 1100px:max-w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="enter your name" required />
                            </div>
                            <div className="mb-6 w-full">
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:max-w-[50%] 1100px:max-w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="enter your Email" required />
                            </div>
                            <div className="mb-6 w-full">
                                <input type="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:max-w-[50%] 1100px:max-w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="enter your PhoneNo" required />
                            </div>
                            <div className="mb-6 w-full">
                                <textarea name="" id="" cols={40} rows={4} placeholder="comments " className="rounded-lg p-2.5  w-full sm:max-w-[50%] 1100px:max-w-full  bg-gray-50 border border-gray-300 text-gray-900" ></textarea>
                            </div>
                            <button className="button my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl">Get In Touch</h3>
                        <address> <AiOutlineHome size={25} className="inline m-3" />100ft road, Hitech City, Hyderabad, Telengana, 647517</address>
                        <a href="tel:+91 8008952100"> <BsTelephone size={25} className="inline m-3" />+91 80080 92332</a>  <br />
                        <a href="mailto:venugopalreddy9493@gmail.com"> <AiOutlineMail size={25} className="inline m-3" />ecommmail@ahex.co.in</a>
                        <p> <AiOutlineInfoCircle size={25} className="inline m-3" />ahex-tech, madhapur</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Contact