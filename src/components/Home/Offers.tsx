import { offers } from "../../static/staticData"
import OfferCard from "../Cards/OfferCard"

const Offers = () => {
    return (
        <>
            <div className="rounded-md sm:block justify-between px-[10px] m-[20px]  ">
            <h3 className="font-[550] text-skin-base text-[1.5rem]  hover:underline w-fit">Top Offers</h3>

                <div className="py-3 grid grid-cols-1 place-items-center gap-3 1100px:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full">
                    {offers.map((item, index) => (
                        <OfferCard key={index} color={item.color} title={item.title} img={item.img} offer={item.offer} brand={item.brand} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Offers