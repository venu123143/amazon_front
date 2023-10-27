import { useEffect } from "react"
import { brands } from "../../static/staticData";
import { Link } from "react-router-dom";
import BlogCard from "../Cards/BlogCard.tsx"
// import { blogs } from "../../static/staticData";
import { AppDispatch, RootState } from "../../redux/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/reducers/blogs/blogSlice.ts";

const BrandsAndBlogs = () => {
  const dispatch: AppDispatch = useDispatch()
  const { blogs } = useSelector((state: RootState) => state.blog)
  useEffect(() => {
    dispatch(getAllBlogs())
  }, [])
  return (
    <div className="">
      <section className="rounded-md sm:block justify-between shadow-lg px-[10px] m-[20px]  ">
        <h3 className="font-[550] text-skin-base text-[1.5rem] hover:underline w-fit">Our Top Brands</h3>
        <div className=" bg-slate-300 rounded-md py-3 grid grid-cols-2 sm:grid-cols-4  lg:flex items-center justify-around">
          {brands.map((item: any, index) => (
            <div key={index} className="flex justify-evenly rounded-md hover:bg-[#CCFFFF] cursor-pointer">
              <Link to="/" key={index}>
                <img src={item} alt="img" className="w-[100px]" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      {blogs.length === 0 ? (
        <>
          Loading...
        </>
      ) : (
        <section className=" py-5 rounded-md sm:block justify-between px-[10px] m-[20px] ">
          <h3 className="font-[550] text-[1.5rem] text-skin-base  hover:underline w-fit">Most Readed Blogs</h3>
          <div className="py-2 grid 400px:grid-cols-1 text-skin-base sm:grid-cols-2 sm:m-auto  place-items-center gap-5 lg:grid-cols-4  lg:flex justify-center items-center">
            {blogs.map((each, index) => {
              if (index < 4) {
                return (
                  <BlogCard key={index} blog={each} />
                )
              }
            })}


          </div>
        </section>

      )}
    </div>
  )
}

export default BrandsAndBlogs