import { useLayoutEffect, useEffect, CSSProperties } from "react"
import { BsArrowLeftShort } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import { AppDispatch, RootState } from "../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { getSingleBlog } from "../redux/reducers/blogs/blogSlice"
import { SyncLoader } from "react-spinners"



const MainSpinner: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  width: 380,
  position: 'absolute',
  top: "50%",
  left: "50%",
  transform: 'translateX(-50%, -50%)'
};

const BlogPage = () => {
  const dispatch: AppDispatch = useDispatch()
  const { singleBlog, isLoading } = useSelector((state: RootState) => state.blog)
  // const navigate = useNavigate();
  const pageId = useParams()
  console.log(singleBlog);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [Link]);


  useEffect(() => {
    dispatch(getSingleBlog(pageId?.id as string))
  }, [])

  return (
    <>
      <div className={`${isLoading === true ? "block bg-black opacity-50 fixed top-0 left-0  z-20 w-full h-screen" : "hidden"}`}>
        <SyncLoader
          color="#361AE3"
          loading={isLoading}
          cssOverride={MainSpinner}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>

      <div className="bg-skin-background dark:bg-skin-textBase w-full h-full min-h-screen relative">
        <Link to="/blogs" className="absolute top-4 left-4 text-[#777777] flex items-center hover:text-black">
          <BsArrowLeftShort size={28} className="inline" />
          <button>back to blogs</button>
        </Link>
        <div className="max-w-full p-5 sm:p-0 sm:max-w-[80%] m-auto flex justify-center items-center">
          <div className="">
            <h3 className="text-skin-base font-extrabold text-[2rem] mt-10 text-center tracking-wide line-clamp-2">{singleBlog?.title}</h3>
            <p className="italic font-medium text-skin-base font-serief text-start mb-3">
              An article By {singleBlog?.auther?.firstname} on {singleBlog && new Date(singleBlog?.createdAt).toLocaleDateString()?.split('/')?.join('-')}</p>
            <img src={singleBlog?.images[0]?.url} alt="" className="sm:max-w-[80%] sm:max-h-[550px] bg-blue-200 w-full m-auto shadow-sm rounded-md" />
            <p className="text-[.91rem] text-skin-base my-[5px] font-[400] font-Rubik text-justify" dangerouslySetInnerHTML={{ __html: singleBlog?.description as string }}></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPage