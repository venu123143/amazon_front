import { useState } from "react"
import { AiFillStar, AiOutlineStar, AiOutlineUpload } from "react-icons/ai"

const CreateReview = () => {
    const [rating, setRating] = useState(0)

    return (
        <>
            <section className="px-5 py-5 bg-white rounded-md">
                <h3 className="font-semibold border-b-black text-[1.5rem]">Create Review</h3>
                <h5 className="">Over all Rating</h5>
                <div className="flex transition-all delay-200 mb-5">
                    <div className="cursor-pointer" onClick={() => setRating(1)}>
                        {rating >= 1 ? <AiFillStar className="text-[#ffd700]  " size={30} /> : <AiOutlineStar className="text-[#ffd700] " size={30} />}
                    </div>
                    <div className="cursor-pointer" onClick={() => setRating(2)}>
                        {rating >= 2 ? <AiFillStar className="text-[#ffd700]  " size={30} /> : <AiOutlineStar className="text-[#ffd700] " size={30} />}
                    </div>
                    <div className="cursor-pointer" onClick={() => setRating(3)}>
                        {rating >= 3 ? <AiFillStar className="text-[#ffd700]  " size={30} /> : <AiOutlineStar className="text-[#ffd700] " size={30} />}
                    </div>
                    <div className="cursor-pointer" onClick={() => setRating(4)}>
                        {rating >= 4 ? <AiFillStar className="text-[#ffd700]  " size={30} /> : <AiOutlineStar className="text-[#ffd700] " size={30} />}
                    </div>
                    <div className="cursor-pointer" onClick={() => setRating(5)}>
                        {rating >= 5 ? <AiFillStar className="text-[#ffd700]  " size={30} /> : <AiOutlineStar className="text-[#ffd700] " size={30} />}
                    </div>
                </div>
                <div>
                    <form action="" className="space-y-4">
                        <div className="">
                            <label htmlFor="reviewTitle" className="font-Rubik font-[400] text-[#000] text-md">Review title</label>
                            <input type="text" id="reviewTitle " placeholder="Review Title" className="px-3 py-2 w-full border rounded-md bg-gray-100 focus:bg-white outline-none shadow" />
                        </div>
                        <div className="">
                            <label htmlFor="review " className="text-base text-[#000] text-md">Body of the review</label>
                            <textarea name="" id="review" className="p-5 w-full shadow-lg rounded-md border bg-gray-100 focus:bg-white outline-none" placeholder="write a review" cols={30} rows={8}></textarea>
                        </div>
                        <div>
                            <p className="text-black text-base text-md">Upload images(Optional)</p>
                            <label htmlFor="prodImages" className="text-base text-[#000] text-md cursor-pointer inline-flex px-5 py-3 rounded-md mt-2 bg-gray-100 shadow-sm hover:bg-white transition-all  hover:scale-105 hover:shadow-lg items-center border outline-none "> Upload Images<AiOutlineUpload className="inline ml-5" size={25} /></label>
                            <input type="file" name="" id="prodImages" className="hidden" />
                        </div>
                        <button className="button my-[10px] text-white text-[0.91rem] px-[25px] py-[8px] uppercase rounded-[25px]">
                            submit
                        </button>
                    </form>
                </div>

            </section>
        </>
    )
}

export default CreateReview