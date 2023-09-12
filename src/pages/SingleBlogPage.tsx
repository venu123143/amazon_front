import { BsArrowLeftShort } from "react-icons/bs"
import { Link } from "react-router-dom"
import taj from "../assets/icons/tajmahal.jpg"
const BlogPage = () => {
  return (
    <div className="bg-[#FFFFF7] w-full h-full min-h-screen relative">
      <Link to="/blogs" className="absolute top-4 left-4 text-[#777777] flex items-center hover:text-black">
        <BsArrowLeftShort size={28} className="inline" />
        <button>back to blogs</button>
      </Link>
      <div className="max-w-full p-5 sm:p-0 sm:max-w-[80%] m-auto flex justify-center items-center">

        <div className="">
          <h3 className="font-extrabold text-[2rem] mt-10 text-center tracking-wide line-clamp-2">A Beautiful day in the America.</h3>
          <p className="italic font-medium text-[#000000] font-serief text-start mb-3">An article By Venu gopal on 03-09-23</p>
          <img src={taj} alt="" className="w-full m-auto shadow-sm rounded-md max-h-[80%]" />
          <p className="text-justify my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illo quam ut minima totam similique commodi sapiente
            ea excepturi nostrum sed, accusantium dolor eveniet corrupti saepe officia magnam obcaecati tempora consectetur iure
            quisquam natus, omnis cupiditate? Quod ea illo repudiandae nemo a obcaecati neque eveniet veritatis veniam soluta,
            fugit unde cumque id. Dicta beatae id voluptatem? Dicta, omnis? Necessitatibus deserunt est laudantium, laboriosam
            doloremque explicabo! Laborum repellendus placeat, quis enim error, qui inventore magni eos doloribus deserunt accusa
            ntium. Eius pariatur inventore officiis ullam quae eaque veritatis! Sunt, velit. Excepturi veritatis inventore non
            iste quo quis unde, cumque cupiditate libero, quibusdam, mollitia magnam. Explicabo mollitia tenetur esse quam susc
            ipit, consequatur illum. Culpa cupiditate ipsa esse officia iure explicabo, voluptate vero eum minus impedit ab eaq
            ue? Aspernatur maxime dolorem natus dicta inventore a commodi praesentium culpa alias sed! Sit quasi alias dolorem
            dignissimos exercitationem eos, facilis quod ut praesentium cumque hic, eveniet velit laborum dolores. Eveniet pariatur
            fuga libero quam illum mollitia laboriosam quos obcaecati, ducimus temporibus aliquid suscipit veritatis eius. Quas
            explicabo porro laborum, sequi facere fuga repellat harum reprehenderit architecto ratione officiis ex. Facilis nobis
            autem aliquid quis assumenda, ducimus molestias laborum! Numquam incidunt saepe est tempora ratione, quidem in neque
            ea veritatis necessitatibus amet beatae culpa esse animi, nobis reprehenderit? Alias, est itaque quos molestias soluta
            hic. Magni nisi dolore minima corporis, impedit quaerat temporibus cumque dolorem nihil, deleniti quo. Dolorem consectetur
            repellat unde. Beatae asperiores aut tempore libero explicabo recusandae, sapiente quaerat, doloribus sed unde rerum reiciendis
            ex placeat facilis! Nisi magnam et ullam perferendis error obcaecati saepe, dignissimos accusantium molestiae neque, repellendus
            , cum asperiores vitae fugit quibusdam aperiam. Harum, quia repellendus, dicta omnis minima ea enim nulla dolorem iusto labore
            tempora molestias eum amet id beatae perspiciatis recusandae ex? Fuga ratione eligendi perferendis voluptatibus accusantium quasi.

          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage