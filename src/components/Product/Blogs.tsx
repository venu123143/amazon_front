
import { useEffect, useLayoutEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
// import { blogs } from "../../static/staticData";
import BigBlogCard from "../Cards/BigBlogCard";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllBlogs } from "../../redux/reducers/blogs/blogSlice";
import { Link } from "react-router-dom";
const Blogs = () => {
  const dispatch: AppDispatch = useDispatch()
  const { blogs } = useSelector((state: RootState) => state.blog)

  useEffect(() => {
    dispatch(getAllBlogs())
  }, [])

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [Link]);

  return (
    <section className="bg-skin-background">
      <div className="sm:px-5">
        <div className="w-full flex justify-center ">
          <div className={`w-3/12 my-5 hidden 1100px:block`}>
            <div className="text-skin-base bg-skin-background rounded-lg sticky top-30  py-[10px] px-[15px] mb-3 shadow-lg">
              <h3 className="text-skin-base text-[1rem] font-[600] space-x-2 mb-[20px] ">Shop By Categories</h3>
              <div className="h-[150px] overflow-y-scroll no-scrollbar">
                <ul className="pl-0 list-none text-[#777777] cursor-pointer capitalize text-[16px] ">
                  <li className="hover:text-black my-2">Watch</li>
                  <li className="hover:text-black my-2">Tv</li>
                  <li className="hover:text-black my-2">Cameras</li>
                  <li className="hover:text-black my-2">Laptops</li>
                  <li className="hover:text-black my-2">Mobiles</li>
                  <li className="hover:text-black my-2">Electronics</li>
                  <li className="hover:text-black my-2">Camera</li>
                  <li className="hover:text-black my-2">Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="1100px:w-9/12 my-5">
            <h3 className="font-[550] text-[1.5rem] text-skin-base hover:underline w-fit md:hidden m-auto"> Blogs</h3>

            <div className="grid 800px:grid-cols-2 grid-cols-1 gap-5 place-items-center">
              {blogs.map((each, index) => (
                <BigBlogCard key={index} blog={each} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs