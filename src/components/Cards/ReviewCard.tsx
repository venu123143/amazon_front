import { AiOutlineUser } from "react-icons/ai"
import { ratingStar } from "../../pages/Rating"
import { useState } from "react"

const ReviewCard = () => {
    const [readmore, setReadMore] = useState(false)
    return (
        <>
            <section className="all-reviews px-5 py-5 border-b">
                <div className="flex gap-4 items-center">
                    <div className="p-3 rounded-full bg-[#1c1d1d] text-white cursor-pointer">
                        <AiOutlineUser size={25} />
                    </div>
                    <h3 className="text-[1rem] font-semibold capitalize">user name</h3>
                </div>
                <div className="flex items-center mt-2 text-[1.2rem]">
                    {ratingStar}
                    (4.3)
                </div>
                <p className=" text-[.91rem] italic  font-extralight">Reviewed in India on 1 January 2022</p>
                <div className={`text-justify ${readmore === true ? null : "line-clamp-5"}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur quam ipsum officia natus optio qui in
                    officiis explicabo cumque odit sint id tenetur ullam sit maiores magni, doloremque nam, modi accusamus. Iste q
                    uod cum sed dolor at? Quod quae aut iste quam placeat vitae, accusamus dolores, maxime sequi accusantium ipsa,
                    commodi veritatis ad nobis doloremque quia quos dignissimos expedita! Labore eius magnam sint, ex quae perspi
                    ciatis, molestiae pariatur praesentium obcaecati deserunt ab, consequuntur possimus eveniet blanditiis aliqui
                    d quis. Dignissimos, numquam voluptate temporibus delectus voluptatum a illo aut sint ipsa optio nihil? Place
                    at, incidunt corporis! Sit iusto nesciunt magnam hic numquam soluta exercitationem, earum rem perspiciatis pe
                    rferendis? Ab exercitationem aut ullam ad assumenda mollitia cupiditate totam quo maxime, quasi, error suscip
                    it pariatur deleniti dignissimos nulla officiis voluptatibus explicabo, praesentium enim consequuntur eius qu
                    is. Sapiente fuga maxime, perferendis sed expedita animi ipsum quis molestias ab magnam vero modi vitae nostr
                    um accusamus praesentium? Ex fugit incidunt facere quam officia ipsa numquam consequatur. Ratione eaque ipsa
                    enim dignissimos nam illum explicabo asperiores pariatur at dolorum alias deserunt reprehenderit itaque,
                    optio ad aliquid laborum? Officiis dolore aliquid alias architecto fuga in delectus ipsam nemo. Eligendi
                    at soluta vitae temporibus vero maiores in similique ut doloribus dicta inventore odio commodi sunt dolores,
                    quos repellendus. Itaque quo exercitationem maiores amet assumenda quis earum repellendus nostrum. Voluptatib
                    us facilis deleniti repellat quae ullam ipsam dolores quaerat nobis atque harum. Voluptate, itaque. Sit tempo
                    re eligendi eveniet ea non possimus ut dignissimos iure a aspernatur. Officiis consequatur quisquam blanditii
                    s magnam eius voluptatem, obcaecati quod ea laboriosam iure doloremque exercitationem quia suscipit repudiand
                    ae possimus repellendus consectetur? Distinctio voluptatum non itaque veritatis pariatur, consequatur voluptati\
                    porro neque tempora laudantium deserunt excepturi quisquam perferendis nesciunt explicabo ipsam! Illo, blanditiis.
                </div>
                <span onClick={() => setReadMore(true)} className={`text-sm font-medium mr-5 text-blue-700 hover:underline cursor-pointer ${readmore ? "hidden" : "block"} `}>more</span>
                <span onClick={() => setReadMore(false)} className={`text-sm font-medium mr-5 text-blue-700 hover:underline cursor-pointer ${readmore ? "block" : "hidden"} `}>read less</span>
                <div className="mt-5">
                    <button className="text-sm font-medium mr-5 hover:bg-gray-100 text-blue-700 hover:underline ">
                        Edit Review
                    </button>
                    <button className="text-sm font-medium mr-5 text-red-700 hover:underline ">
                        Delete Review
                    </button>
                    <button className="text-sm font-medium text-[#1f1c1d] hover:underline ">
                        Report Review
                    </button>
                </div>

            </section>
        </>
    )
}

export default ReviewCard