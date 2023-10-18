import { brands } from "../../static/staticData";
import { Link } from "react-router-dom";
import BlogCard from "../Cards/BlogCard.tsx"
import { blogs } from "../../static/staticData";

const BrandsAndBlogs = () => {
  return (
    <div id="blogs " className="mt-5"> 
      <h3 className="font-[550] text-[1.5rem] ml-5  hover:underline w-fit">Our Top Brands</h3>

      <section className="rounded-md sm:block justify-between shadow-lg px-[10px] m-[20px] bg-[#ffffff] ">
        <div className="py-3 grid grid-cols-2 sm:grid-cols-4  lg:flex items-center justify-around">
          {brands.map((item: any, index) => (
            <div key={index} className="flex justify-evenly rounded-md hover:bg-[#CCFFFF] cursor-pointer">
              <Link to="/" key={index}>
                <img src={item} alt="img" className="w-[100px]" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <h3 className="font-[550] text-[1.5rem] ml-5  hover:underline w-fit">Most Readed Blogs</h3>

      <section className=" py-5 rounded-md sm:block justify-between px-[10px] m-[20px] bg-[#ffffff] ">
        <div className="py-2 grid 400px:grid-cols-1 sm:grid-cols-2 sm:m-auto  place-items-center gap-5 lg:grid-cols-4  lg:flex justify-center items-center">
          {blogs.map((each, index) => (
            <BlogCard key={index} img={each.img} para={each.para} title={each.title} />

          ))}


        </div>
      </section>
    </div>
  )
}

export default BrandsAndBlogs