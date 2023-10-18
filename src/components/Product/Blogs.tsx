import { blogs } from "../../static/staticData";
import BigBlogCard from "../Cards/BigBlogCard";

const Blogs = () => {
  return (
    <section className="bg-[#FFFFF7]">
      <div className="sm:px-5">
        <div className="w-full flex justify-center ">
          <div className={`w-3/12 my-5 hidden 1100px:block`}>
            <div className="bg-white rounded-lg  py-[10px] px-[15px] mb-3 shadow-lg">
              <h3 className="text-black text-[1rem] font-[600] space-x-2 mb-[20px] ">Shop By Categories</h3>
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
            <h3 className="font-[550] text-[1.5rem] hover:underline w-fit md:hidden m-auto"> Blogs</h3>

            <div className="grid 800px:grid-cols-2 grid-cols-1 gap-5 place-items-center">
              {blogs.map((each, index) => (
                <BigBlogCard key={index} img={each.img} para={each.para} title={each.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blogs