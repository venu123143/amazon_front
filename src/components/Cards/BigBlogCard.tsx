import { Link } from "react-router-dom"
import { BlogType } from "../../redux/reducers/blogs/blogSlice"

const BigBlogCard: React.FC<{ blog?: BlogType }> = ({ blog }) => {
    return (
        <>
            <section className="max-w-[340px] 400px:max-w-[400px] h-[500px] rounded-md overflow-hidden shadow-lg ">
                <div className="">
                    <img src={blog?.images[0]?.url} alt="img" className="h-[300px] w-full" />
                </div>
                <div className="w-full h-full p-[10px] text-justify relative ">
                    <time className="text-[.91rem] text-[#777777] dark:text-skin-base uppercase font-[400]"> {blog && new Date(blog.createdAt).toLocaleDateString()}</time>
                    <h6 className="font-semibold line-clamp-1">{blog?.title}</h6>
                    <p className="text-[.91rem] text-[#777777] dark:text-skin-base my-[5px] line-clamp-3 font-[400]" dangerouslySetInnerHTML={{ __html: blog?.description as string }}></p>

                    <Link  to={`/blog/${blog?._id}`}  className="button absolute top-[130px] left-4 my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
                        Read More
                    </Link>

                </div>
            </section>
        </>
    )
}

export default BigBlogCard