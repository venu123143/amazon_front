import { useState, useEffect } from "react"
import { number, object, string } from "yup"
import { useFormik } from "formik"
import { AppDispatch } from "../../redux/store";
import { AiFillStar, AiOutlineStar, AiOutlineUpload } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { createReview, handleReview } from "../../redux/reducers/product/productSlice";

let RatingSchema = object({
    title: string().min(3, 'minimum 3 characters should be there').required('title is required'),
    rating: number().min(1, 'rating is required').required('rating is required'),
    comment: string().required('Please Write your review'),
});

const CreateReview = ({ prodId }: { prodId: string }) => {
    const dispatch: AppDispatch = useDispatch()
    const [rating, setRating] = useState(0)
    const formik = useFormik({
        initialValues: {
            title: '',
            comment: '',
            rating: 0,
            prodId: prodId
        },
        validationSchema: RatingSchema,
        onSubmit: values => {
            dispatch(createReview(values))
            dispatch(handleReview(true))
            setRating(0)
            formik.resetForm()
        },
    });
    useEffect(() => {
        formik.values.rating = rating
        formik.values.prodId = prodId
    }, [rating, prodId])
    return (
        <>
            <section className="px-5 py-5 bg-white dark:bg-[#222e35] rounded-md">
                <h3 className="font-semibold border-b-black text-skin-base text-[1.5rem]">Create Review</h3>
                <h5 className="text-skin-base">Over all Rating</h5>
                <div>
                    <form action="" className="space-y-4" onSubmit={formik.handleSubmit}>
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
                        {formik.touched.rating && formik.errors.rating && rating === 0 ? (
                            <div className="text-red-500 text-[14px] ">{formik.errors.rating}</div>
                        ) : null}
                        <div className="">
                            <label htmlFor="reviewTitle" className="font-Rubik font-[400] text-skin-base text-md">Review title</label>
                            <input
                                onChange={formik.handleChange("title")} onBlur={formik.handleBlur("title")} value={formik.values.title}
                                type="text" id="reviewTitle " placeholder="Review Title" className="px-3 py-2 w-full border rounded-md bg-gray-100 focus:bg-white dark:bg-gray-300 dark:focus:bg-gray-100 dark:text-black outline-none shadow" />
                            {formik.touched.title && formik.errors.title ? (
                                <div className="text-red-500 text-[14px] ">{formik.errors.title}</div>
                            ) : null}
                        </div>

                        <div className="">
                            <label htmlFor="review " className="text-base text-skin-base text-md">Body of the review</label>
                            <textarea name="" id="review"
                                onChange={formik.handleChange("comment")} onBlur={formik.handleBlur("comment")} value={formik.values.comment}
                                className="p-5 w-full shadow-lg rounded-md border bg-gray-100 focus:bg-white dark:bg-gray-300 dark:focus:bg-gray-100 dark:text-black outline-none" placeholder="write a review" cols={30} rows={8}></textarea>
                            {formik.touched.comment && formik.errors.comment ? (
                                <div className="text-red-500 text-[14px] ">{formik.errors.comment}</div>
                            ) : null}
                        </div>
                        <div>
                            <p className="text-skin-base text-base text-md">Upload images(Optional)</p>
                            <label htmlFor="prodImages" className="text-base text-[#000] text-md cursor-pointer inline-flex px-5 py-3 rounded-md mt-2 bg-gray-100 shadow-sm hover:bg-white transition-all  hover:scale-105 hover:shadow-lg items-center border outline-none "> Upload Images<AiOutlineUpload className="inline ml-5" size={25} /></label>
                            <input type="file" name="" id="prodImages" className="hidden" />
                        </div>
                        <button className="button my-[10px] dark:bg-[#00a884] dark:hover:bg-[#f02849] text-white text-[0.91rem] px-[25px] py-[8px] uppercase rounded-[25px]">
                            submit
                        </button>
                    </form>
                </div>

            </section>
        </>
    )
}

export default CreateReview