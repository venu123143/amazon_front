import { Link } from "react-router-dom"

const BlogCard: React.FC<any> = ({ img, title, para }) => {
  return (
    <>
      <section className="w-[300px] h-[400px] rounded-md overflow-hidden shadow-lg ">
        <div className="">
          <img src={img} alt="img" className="h-[200px] w-full" />
        </div>
        <div className="w-full h-full p-[10px] text-justify relative ">
          <time className="text-[.91rem] text-[#777777] uppercase font-[400]">11 JUNE 2022</time>
          <h6 className="font-semibold ">{title}</h6>
          <p className="text-[.91rem] text-[#777777] my-[5px] font-[400] line-clamp-2">
            {para}</p>
          <Link to="/blog/:id" className="button absolute top-[130px] left-4 my-[10px] text-white text-[0.91rem] px-[25px] py-[6px] rounded-[25px]">
            Read More
          </Link>

        </div>
      </section>
    </>
  )
}

export default BlogCard