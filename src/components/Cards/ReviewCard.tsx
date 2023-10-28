import { AiOutlineUser } from "react-icons/ai"
import RatingStar from "../../pages/Rating"
import React, { useState } from "react"

const ReviewCard = ({ rating }: any) => {
    const [readmore, setReadMore] = useState(false)
    return (
        <>
            <section className=" dark:bg-[#0c1317]  px-5 py-5 border-b">
                <div className="flex gap-4 items-center">
                    <div className="p-3 rounded-full bg-[#1c1d1d] dark:bg-gray-500 text-white cursor-pointer">
                        <AiOutlineUser size={25} />
                    </div>
                    <h3 className="text-[1rem] font-semibold text-skin-base capitalize">{rating?.postedBy?.firstname}</h3>
                </div>
                <div className="flex items-center text-skin-base mt-2 text-[1.2rem]">
                    <RatingStar stars={rating?.star} />
                </div>
                <p className=" text-[.91rem] italic text-skin-base  font-extralight">Reviewed in India on 1 January 2022</p>
                <h3 className="font-[450] text-[1.2rem] text-skin-base ">{rating?.title}</h3>
                <div className={`text-justify  text-skin-base ${readmore === true ? null : "line-clamp-5"}`}>
                    {rating?.comment}
                </div>
                <span onClick={() => setReadMore(true)} className={`text-sm font-medium mr-5 text-blue-700 hover:underline cursor-pointer ${readmore ? "hidden" : "block"} `}>more</span>
                <span onClick={() => setReadMore(false)} className={`text-sm font-medium mr-5 text-blue-700 hover:underline cursor-pointer ${readmore ? "block" : "hidden"} `}>read less</span>
                <div className="mt-5">
                    <button className="text-sm font-medium mr-5 hover:bg-gray-100 text-blue-700 hover:underline ">
                        Edit Review
                    </button>
                    <button className="text-sm font-medium mr-5 text-red-700 hover:underline ">
                        Delete Review
                    </button>
                    <button className="text-sm font-medium text-[#1f1c1d] dark:text-gray-500 hover:underline ">
                        Report Review
                    </button>
                </div>

            </section>
        </>
    )
}

export default React.memo(ReviewCard)