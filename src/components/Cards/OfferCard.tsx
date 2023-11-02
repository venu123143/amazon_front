import { Link } from "react-router-dom"

const OfferCard: React.FC<any> = ({ color, title, offer, img, brand, path }) => {
    return (
        <>
            <Link to={path} className={`${color === "black" ? 'bg-black' : 'bg-white'} h-[400px] w-[300px] rounded-lg shadow-lg border p-[10px] `}>
                <div className={`${color === "black" ? 'text-white' : 'text-black'} h-1/4 relative`}>
                    <p className="text-[13px] font-[400] uppercase absolute top-5 left-1 ">{brand}</p>
                    <h6 className="font-Rubik text-[1.7rem] font-[500] absolute top-10 left-0  h-[40px] overflow-hidden">{title}</h6>
                    <p className="absolute top-20 left-0 font-extralight text-[.91rem] h-[20px] overflow-hidden ">{offer}</p>
                </div>
                <div className="h-3/4 flex items-center justify-center md:cursor-pointer">
                    <img src={img} alt="offerIMG" className="h-[90%] ease-in-out hover:rotate-6 transition-all" />
                </div>
            </Link>
        </>
    )
}

export default OfferCard